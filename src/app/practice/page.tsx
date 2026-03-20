"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useAuth } from "@/lib/auth-context";
import { useGamification, calculateXP, BADGES } from "@/lib/gamification-context";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Flag,
  BookOpen,
  Trophy,
  ArrowRight,
  Zap,
  Flame,
  Star,
  AlertTriangle,
  BarChart3,
  Target,
  HelpCircle,
  TrendingUp,
  Eye,
  List,
  Play,
  Filter,
} from "lucide-react";
import Link from "next/link";
import {
  getPracticeQuestions,
  CHAPTER_CONFIG,
  MODULE_CONFIG,
  getQuestionsByModule,
  getChaptersForModule,
  getQuestionsByChapter,
} from "@/lib/question-bank";

// ─── Types ───
type QuizMode = "practice" | "exam";
type Confidence = "sure" | "unsure" | null;
type QuizPhase = "setup" | "quiz" | "review" | "results";

interface QuestionHistory {
  attempts: number;
  wrong: number;
}

interface ExamAttempt {
  date: string;
  moduleId: string;
  mode: QuizMode;
  score: number;
  total: number;
  pct: number;
  timeSeconds: number;
  chapterFilter: string | null;
}

// ─── LocalStorage helpers ───
const HISTORY_KEY = "suresuccess_question_history";
const EXAM_HISTORY_KEY = "suresuccess_exam_history";

function getQuestionHistory(): Record<string, QuestionHistory> {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || "{}"); } catch { return {}; }
}
function saveQuestionHistory(h: Record<string, QuestionHistory>) {
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(h)); } catch { /* ignore */ }
}
function getExamHistory(): ExamAttempt[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(EXAM_HISTORY_KEY) || "[]"); } catch { return []; }
}
function saveExamAttempt(a: ExamAttempt) {
  const h = getExamHistory();
  h.push(a);
  try { localStorage.setItem(EXAM_HISTORY_KEY, JSON.stringify(h.slice(-100))); } catch { /* ignore */ }
}

// ─── Utils ───
function shuffleArray<T>(arr: T[]): T[] {
  const s = [...arr];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

function fmtTime(secs: number) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  if (h > 0) return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

const allQuestions = getPracticeQuestions();

// ─── Smart selector with difficulty distribution ───
function selectQuestions(
  moduleId: string,
  chapterFilter: string | null,
  count: number,
) {
  const history = getQuestionHistory();
  let pool = allQuestions.filter(q => q.moduleId === moduleId);

  if (chapterFilter) {
    pool = pool.filter(q => q.chapterId === chapterFilter);
  }

  // If chapter-focused or small pool, just shuffle & return
  if (chapterFilter || pool.length <= count) {
    return shuffleArray(pool).slice(0, count);
  }

  // Apply realistic difficulty mix: ~25% easy, ~50% medium, ~25% hard
  const byDiff = { easy: [] as typeof pool, medium: [] as typeof pool, hard: [] as typeof pool };
  for (const q of pool) (byDiff[q.difficulty] ??= []).push(q);

  const easyTarget = Math.round(count * 0.25);
  const hardTarget = Math.round(count * 0.25);
  const medTarget = count - easyTarget - hardTarget;

  // Priority: questions user gets wrong more often
  function score(q: { id: string }) {
    const h = history[q.id];
    if (!h || !h.attempts) return 0.5;
    return h.wrong / h.attempts;
  }

  function pickFromPool(p: typeof pool, n: number) {
    const sorted = shuffleArray(p).sort((a, b) => score(b) - score(a));
    return sorted.slice(0, n);
  }

  const selected = [
    ...pickFromPool(byDiff.easy, easyTarget),
    ...pickFromPool(byDiff.medium, medTarget),
    ...pickFromPool(byDiff.hard, hardTarget),
  ];

  // Fill shortfall from any remaining
  if (selected.length < count) {
    const used = new Set(selected.map(q => q.id));
    const rest = shuffleArray(pool.filter(q => !used.has(q.id)));
    selected.push(...rest.slice(0, count - selected.length));
  }

  return shuffleArray(selected);
}

// ═══════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════
export default function PracticePage() {
  const { user, loading } = useAuth();
  const { stats, recordQuizResult } = useGamification();
  const router = useRouter();
  const searchParams = useSearchParams();

  // ─── Setup state ───
  const [phase, setPhase] = useState<QuizPhase>("setup");
  const [mode, setMode] = useState<QuizMode>("practice");
  const [selectedModule, setSelectedModule] = useState("cisi-reg");
  const [chapterFilter, setChapterFilter] = useState<string | null>(null);
  const [questionCount, setQuestionCount] = useState(80);

  // ─── Quiz state ───
  const [questions, setQuestions] = useState<ReturnType<typeof getPracticeQuestions>>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [confidence, setConfidence] = useState<Confidence[]>([]);
  const [finished, setFinished] = useState(false);

  // ─── Timing ───
  const [globalTimeRemaining, setGlobalTimeRemaining] = useState(0); // seconds
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [questionStartTimes, setQuestionStartTimes] = useState<number[]>([]);
  const [questionTimesSpent, setQuestionTimesSpent] = useState<number[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ─── Results ───
  const [xpEarned, setXpEarned] = useState(0);
  const [newBadges, setNewBadges] = useState<string[]>([]);

  // ─── Past history ───
  const [examHistory, setExamHistory] = useState<ExamAttempt[]>([]);

  useEffect(() => {
    setExamHistory(getExamHistory());
  }, []);

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [user, loading, router]);

  // ─── Timer effect ───
  useEffect(() => {
    if (phase !== "quiz" || finished) return;

    const tick = () => {
      setTimeElapsed(t => t + 1);
      if (mode === "exam") {
        setGlobalTimeRemaining(t => {
          if (t <= 1) return 0;
          return t - 1;
        });
      }
    };

    timerRef.current = setInterval(tick, 1000);
    const handleVis = () => {
      if (document.hidden) {
        if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
      } else {
        if (!timerRef.current) timerRef.current = setInterval(tick, 1000);
      }
    };
    document.addEventListener("visibilitychange", handleVis);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      document.removeEventListener("visibilitychange", handleVis);
    };
  }, [phase, finished, mode]);

  // Auto-finish exam when time runs out
  useEffect(() => {
    if (mode === "exam" && globalTimeRemaining <= 0 && phase === "quiz" && !finished && timeElapsed > 0) {
      finishQuiz();
    }
  }, [globalTimeRemaining]);

  // Track time per question
  useEffect(() => {
    if (phase === "quiz" && !finished) {
      setQuestionStartTimes(prev => {
        const next = [...prev];
        next[currentQ] = Date.now();
        return next;
      });
    }
  }, [currentQ, phase, finished]);

  // Record time spent when leaving a question
  const recordTimeOnQuestion = useCallback((qIdx: number) => {
    const start = questionStartTimes[qIdx];
    if (!start) return;
    const spent = (Date.now() - start) / 1000;
    setQuestionTimesSpent(prev => {
      const next = [...prev];
      next[qIdx] = (next[qIdx] || 0) + spent;
      return next;
    });
  }, [questionStartTimes]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (phase !== "quiz" || finished) return;
    const tag = (e.target as HTMLElement).tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

    if (mode === "practice") {
      if (e.key === "ArrowRight" && revealed && currentQ < questions.length - 1) goNext();
      else if (e.key === "ArrowLeft" && currentQ > 0) goPrev();
    } else {
      if (e.key === "ArrowRight" && currentQ < questions.length - 1) goNext();
      else if (e.key === "ArrowLeft" && currentQ > 0) goPrev();
    }
  }, [phase, finished, currentQ, questions.length, revealed, mode]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // ─── Start quiz ───
  const startQuiz = () => {
    const moduleConfig = MODULE_CONFIG[selectedModule];
    const count = chapterFilter ? questionCount : (moduleConfig?.totalQuestions ?? 80);
    const qs = selectQuestions(selectedModule, chapterFilter, count);

    setQuestions(qs);
    setAnswers(new Array(qs.length).fill(null));
    setConfidence(new Array(qs.length).fill(null));
    setQuestionTimesSpent(new Array(qs.length).fill(0));
    setQuestionStartTimes(new Array(qs.length).fill(0));
    setFlagged(new Set());
    setCurrentQ(0);
    setSelected(null);
    setRevealed(false);
    setFinished(false);
    setTimeElapsed(0);
    setXpEarned(0);
    setNewBadges([]);

    if (mode === "exam") {
      setGlobalTimeRemaining((moduleConfig?.timeMinutes ?? 120) * 60);
    }

    setPhase("quiz");
  };

  // ─── Navigation ───
  const goNext = () => {
    if (currentQ < questions.length - 1) {
      recordTimeOnQuestion(currentQ);
      setCurrentQ(currentQ + 1);
      setSelected(answers[currentQ + 1]);
      if (mode === "practice") setRevealed(false);
    }
  };

  const goPrev = () => {
    if (currentQ > 0) {
      recordTimeOnQuestion(currentQ);
      setCurrentQ(currentQ - 1);
      setSelected(answers[currentQ - 1]);
      if (mode === "practice") setRevealed(false);
    }
  };

  const jumpTo = (i: number) => {
    recordTimeOnQuestion(currentQ);
    setCurrentQ(i);
    setSelected(answers[i]);
    if (mode === "practice") setRevealed(false);
  };

  // ─── Answer handling ───
  const handleSelect = (idx: number) => {
    if (mode === "practice" && revealed) return;
    setSelected(idx);
    const newAnswers = [...answers];
    newAnswers[currentQ] = idx;
    setAnswers(newAnswers);
  };

  const handleReveal = () => {
    // Practice mode: reveal answer, calculate XP
    const timeTaken = questionTimesSpent[currentQ] + ((Date.now() - (questionStartTimes[currentQ] || Date.now())) / 1000);
    const isCorrect = selected === questions[currentQ].correct;
    const xp = calculateXP(questions[currentQ].difficulty, timeTaken, isCorrect, true);
    setXpEarned(prev => prev + xp);
    setRevealed(true);
  };

  const toggleFlag = () => {
    const next = new Set(flagged);
    if (next.has(currentQ)) next.delete(currentQ);
    else next.add(currentQ);
    setFlagged(next);
  };

  const setConfidenceForQ = (c: Confidence) => {
    const next = [...confidence];
    next[currentQ] = c;
    setConfidence(next);
  };

  // ─── Review screen (exam mode) ───
  const [showReview, setShowReview] = useState(false);
  const [unansweredWarning, setUnansweredWarning] = useState(false);

  const unansweredCount = useMemo(() => answers.filter(a => a === null).length, [answers]);

  const handleExamFinishAttempt = () => {
    recordTimeOnQuestion(currentQ);
    if (unansweredCount > 0) {
      setUnansweredWarning(true);
    } else {
      setShowReview(true);
    }
  };

  const confirmFinish = () => {
    setUnansweredWarning(false);
    setShowReview(false);
    finishQuiz();
  };

  // ─── Finish quiz ───
  const finishQuiz = async () => {
    recordTimeOnQuestion(currentQ);
    setFinished(true);

    // In practice mode, calculate remaining XP for unscored questions
    if (mode === "exam") {
      let totalXp = 0;
      questions.forEach((q, i) => {
        const isCorrect = answers[i] === q.correct;
        const time = questionTimesSpent[i] || 0;
        totalXp += calculateXP(q.difficulty, time, isCorrect, true);
      });
      setXpEarned(totalXp);
    }

    // Save per-question performance
    const history = getQuestionHistory();
    questions.forEach((q, i) => {
      const prev = history[q.id] || { attempts: 0, wrong: 0 };
      prev.attempts += 1;
      if (answers[i] !== q.correct) prev.wrong += 1;
      history[q.id] = prev;
    });
    saveQuestionHistory(history);

    const score = answers.reduce<number>((acc, ans, i) => acc + (ans === questions[i].correct ? 1 : 0), 0);
    const pct = Math.round((score / questions.length) * 100);
    const isPerfect = score === questions.length;
    const fastCount = questionTimesSpent.filter(t => t > 0 && t < 10).length;

    // Save exam attempt for history
    saveExamAttempt({
      date: new Date().toISOString(),
      moduleId: selectedModule,
      mode,
      score,
      total: questions.length,
      pct,
      timeSeconds: timeElapsed,
      chapterFilter,
    });
    setExamHistory(getExamHistory());

    const badges = await recordQuizResult({
      score,
      total: questions.length,
      xpEarned: xpEarned + (isPerfect ? 50 : 0),
      fastAnswerCount: fastCount,
      isPerfect,
    });
    setNewBadges(badges);

    setPhase("results");
  };

  // ─── Computed values ───
  const score = useMemo(
    () => answers.reduce<number>((acc, ans, i) => acc + (ans === questions[i]?.correct ? 1 : 0), 0),
    [answers, questions]
  );

  const chapterBreakdown = useMemo(() => {
    if (!questions.length) return [];
    const map: Record<string, { name: string; correct: number; total: number }> = {};
    questions.forEach((q, i) => {
      const cfg = CHAPTER_CONFIG[q.chapterId];
      const name = cfg?.name ?? q.topic;
      if (!map[q.chapterId]) map[q.chapterId] = { name, correct: 0, total: 0 };
      map[q.chapterId].total += 1;
      if (answers[i] === q.correct) map[q.chapterId].correct += 1;
    });
    return Object.entries(map)
      .map(([id, data]) => ({ id, ...data, pct: Math.round((data.correct / data.total) * 100) }))
      .sort((a, b) => a.pct - b.pct);
  }, [questions, answers]);

  const confidenceStats = useMemo(() => {
    let sureRight = 0, sureWrong = 0, unsureRight = 0, unsureWrong = 0;
    questions.forEach((q, i) => {
      const correct = answers[i] === q.correct;
      const c = confidence[i];
      if (c === "sure" && correct) sureRight++;
      else if (c === "sure" && !correct) sureWrong++;
      else if (c === "unsure" && correct) unsureRight++;
      else if (c === "unsure" && !correct) unsureWrong++;
    });
    return { sureRight, sureWrong, unsureRight, unsureWrong };
  }, [questions, answers, confidence]);

  const slowestQuestions = useMemo(() => {
    return questions
      .map((q, i) => ({ idx: i, q, time: questionTimesSpent[i] || 0 }))
      .sort((a, b) => b.time - a.time)
      .slice(0, 5);
  }, [questions, questionTimesSpent]);

  // ─── Loading ───
  if (loading || !user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center" role="status">
        <div className="w-8 h-8 border-[3px] border-navy-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // ═══════════════════════════════════════
  // SETUP SCREEN
  // ═══════════════════════════════════════
  if (phase === "setup") {
    const moduleChapters = getChaptersForModule(selectedModule);
    const filteredHistory = examHistory.filter(
      a => a.moduleId === selectedModule && !a.chapterFilter
    ).slice(-10);

    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-text-primary mb-1">Practice &amp; Exam</h1>
        <p className="text-text-secondary text-sm mb-8">Choose your mode and start revising</p>

        {/* Mode selector */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => setMode("practice")}
            className={`card p-5 text-left transition-all ${mode === "practice" ? "ring-2 ring-navy-500 border-navy-500" : "hover:border-navy-200"}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-navy-600" />
              <span className="font-bold text-text-primary">Practice Mode</span>
            </div>
            <p className="text-xs text-text-secondary">See answers after each question. Learn as you go with explanations.</p>
          </button>
          <button
            onClick={() => setMode("exam")}
            className={`card p-5 text-left transition-all ${mode === "exam" ? "ring-2 ring-navy-500 border-navy-500" : "hover:border-navy-200"}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-navy-600" />
              <span className="font-bold text-text-primary">Exam Mode</span>
            </div>
            <p className="text-xs text-text-secondary">2-hour countdown, 80 questions. No reveals until final submission — just like the real CBT.</p>
          </button>
        </div>

        {/* Module selector */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-text-primary mb-2 block">Exam Paper</label>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(MODULE_CONFIG).map(([id, cfg]) => (
              <button
                key={id}
                onClick={() => { setSelectedModule(id); setChapterFilter(null); }}
                className={`p-3 rounded-lg border text-left text-sm transition-all ${selectedModule === id ? "border-navy-500 bg-navy-50 text-navy-800" : "border-border hover:border-navy-200 text-text-secondary"}`}
              >
                <span className="font-semibold block">{cfg.shortName}</span>
                <span className="text-xs">{cfg.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chapter-focused practice (#10) */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Filter className="w-4 h-4 text-text-tertiary" />
            <label className="text-sm font-semibold text-text-primary">Focus on a chapter (optional)</label>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setChapterFilter(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${!chapterFilter ? "bg-navy-600 text-white" : "bg-surface-sunken text-text-secondary hover:bg-navy-50"}`}
            >
              All chapters
            </button>
            {moduleChapters.map(ch => (
              <button
                key={ch.id}
                onClick={() => setChapterFilter(ch.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${chapterFilter === ch.id ? "bg-navy-600 text-white" : "bg-surface-sunken text-text-secondary hover:bg-navy-50"}`}
              >
                {ch.name}
              </button>
            ))}
          </div>
          {chapterFilter && (
            <div className="mt-3">
              <label className="text-xs text-text-tertiary block mb-1">Number of questions</label>
              <input
                type="number"
                min={5}
                max={allQuestions.filter(q => q.chapterId === chapterFilter).length}
                value={questionCount}
                onChange={e => setQuestionCount(Math.max(5, parseInt(e.target.value) || 10))}
                className="w-24 px-3 py-1.5 rounded-lg border border-border text-sm"
              />
            </div>
          )}
        </div>

        {/* No negative marking reminder (#6) */}
        <div className="bg-success-50 border border-success-200 rounded-lg p-3 mb-6 flex items-start gap-2">
          <HelpCircle className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-success-800">No negative marking</p>
            <p className="text-xs text-success-700">There is no penalty for wrong answers — always answer every question. Never leave blanks!</p>
          </div>
        </div>

        {/* Start button */}
        <button onClick={startQuiz} className="w-full py-3 rounded-xl text-sm font-bold btn-primary flex items-center justify-center gap-2">
          <Play className="w-4 h-4" />
          Start {mode === "exam" ? "Exam" : "Practice"}
          {!chapterFilter && <span className="text-xs opacity-75">({MODULE_CONFIG[selectedModule]?.totalQuestions ?? 80} questions{mode === "exam" ? " • 2 hours" : ""})</span>}
        </button>

        {/* Past exam history (#9) */}
        {filteredHistory.length > 0 && (
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-text-tertiary" />
              <h3 className="text-sm font-bold text-text-primary">Your Progress</h3>
            </div>
            <div className="card p-4">
              <div className="flex items-end gap-1 h-24 mb-2">
                {filteredHistory.map((a, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className={`w-full rounded-t transition-all ${a.pct >= 70 ? "bg-success-400" : "bg-warning-400"}`}
                      style={{ height: `${Math.max(a.pct, 5)}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex gap-1">
                {filteredHistory.map((a, i) => (
                  <div key={i} className="flex-1 text-center">
                    <span className={`text-[10px] font-bold ${a.pct >= 70 ? "text-success-600" : "text-warning-600"}`}>{a.pct}%</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-text-tertiary mt-2 text-center">
                Last {filteredHistory.length} attempt{filteredHistory.length > 1 ? "s" : ""} •
                Average: {Math.round(filteredHistory.reduce((s, a) => s + a.pct, 0) / filteredHistory.length)}%
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ═══════════════════════════════════════
  // RESULTS SCREEN
  // ═══════════════════════════════════════
  if (phase === "results") {
    const pct = Math.round((score / questions.length) * 100);
    const passed = pct >= (MODULE_CONFIG[selectedModule]?.passPercent ?? 70);
    const isPerfect = score === questions.length;
    const badgeObjects = newBadges.map(bid => BADGES.find(b => b.id === bid)).filter(Boolean);

    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className={`card p-8 text-center mb-8 ${passed ? "celebrate" : ""}`}>
          {/* Header */}
          <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${passed ? "bg-success-50" : "bg-warning-50"}`}>
            {isPerfect ? <Star className="w-10 h-10 text-gold-500" /> : passed ? <Trophy className="w-10 h-10 text-gold-500" /> : <RotateCcw className="w-10 h-10 text-warning-700" />}
          </div>
          <h1 className="text-2xl font-bold text-text-primary mb-1">
            {isPerfect ? "Perfect score!" : passed ? "You passed!" : "Keep practising"}
          </h1>
          <p className="text-text-secondary mb-4">
            {score}/{questions.length} ({pct}%) in {fmtTime(timeElapsed)}
            {mode === "exam" && <span className="ml-1">• Pass mark: {MODULE_CONFIG[selectedModule]?.passPercent ?? 70}%</span>}
          </p>

          {/* XP & Badges */}
          <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-200 rounded-lg px-4 py-2 mb-4">
            <Zap className="w-5 h-5 text-gold-600" />
            <span className="text-lg font-bold text-gold-800">+{xpEarned + (isPerfect ? 50 : 0)} XP</span>
          </div>

          {badgeObjects.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-semibold text-gold-800 mb-2">New badges!</p>
              <div className="flex gap-3 justify-center flex-wrap">
                {badgeObjects.map(b => b && (
                  <div key={b.id} className="flex items-center gap-2 bg-gold-50 border border-gold-200 rounded-lg px-3 py-2">
                    <span className="text-2xl">{b.icon}</span>
                    <span className="text-sm font-semibold text-gold-800">{b.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-center gap-2 text-sm text-text-secondary">
            <Flame className="w-4 h-4 text-gold-500" /> {stats.currentStreak} day streak
          </div>
        </div>

        {/* No negative marking reminder */}
        {unansweredCount > 0 && (
          <div className="bg-warning-50 border border-warning-200 rounded-lg p-3 mb-6 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-warning-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-warning-800">You left {unansweredCount} question{unansweredCount > 1 ? "s" : ""} unanswered. Remember: no negative marking — always answer every question!</p>
          </div>
        )}

        {/* Chapter breakdown (#4) */}
        <div className="card p-5 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-4 h-4 text-navy-600" />
            <h3 className="text-sm font-bold text-text-primary">Performance by Chapter</h3>
          </div>
          <div className="space-y-2.5">
            {chapterBreakdown.map(ch => (
              <div key={ch.id}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-text-secondary font-medium">{ch.name}</span>
                  <span className={`font-bold ${ch.pct >= 70 ? "text-success-600" : "text-danger-600"}`}>{ch.correct}/{ch.total} ({ch.pct}%)</span>
                </div>
                <div className="w-full bg-surface-sunken rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${ch.pct >= 70 ? "bg-success-400" : ch.pct >= 50 ? "bg-warning-400" : "bg-danger-400"}`}
                    style={{ width: `${ch.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Confidence stats (#11) */}
        {confidence.some(c => c !== null) && (
          <div className="card p-5 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-navy-600" />
              <h3 className="text-sm font-bold text-text-primary">Confidence Calibration</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-success-50 rounded-lg p-3">
                <p className="font-bold text-success-700">{confidenceStats.sureRight}</p>
                <p className="text-xs text-success-600">Sure &amp; correct ✓</p>
              </div>
              <div className="bg-danger-50 rounded-lg p-3">
                <p className="font-bold text-danger-700">{confidenceStats.sureWrong}</p>
                <p className="text-xs text-danger-600">Sure but wrong ✗</p>
              </div>
              <div className="bg-success-50 rounded-lg p-3">
                <p className="font-bold text-success-700">{confidenceStats.unsureRight}</p>
                <p className="text-xs text-success-600">Unsure but correct ✓</p>
              </div>
              <div className="bg-warning-50 rounded-lg p-3">
                <p className="font-bold text-warning-700">{confidenceStats.unsureWrong}</p>
                <p className="text-xs text-warning-600">Unsure &amp; wrong ✗</p>
              </div>
            </div>
            {confidenceStats.sureWrong > 0 && (
              <p className="text-xs text-text-tertiary mt-2 italic">⚠ You were confident but wrong on {confidenceStats.sureWrong} question{confidenceStats.sureWrong > 1 ? "s" : ""} — focus on these topics.</p>
            )}
          </div>
        )}

        {/* Time per question stats (#12) */}
        {slowestQuestions.some(sq => sq.time > 0) && (
          <div className="card p-5 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-navy-600" />
              <h3 className="text-sm font-bold text-text-primary">Slowest Questions</h3>
            </div>
            <div className="space-y-2">
              {slowestQuestions.filter(sq => sq.time > 0).map(sq => (
                <div key={sq.idx} className="flex items-start gap-2 text-xs">
                  <span className="font-mono font-bold text-text-tertiary w-10 text-right">{Math.round(sq.time)}s</span>
                  <p className="text-text-secondary flex-1 leading-snug">{sq.q.question.slice(0, 100)}{sq.q.question.length > 100 ? "…" : ""}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-text-tertiary mt-2">Average: {Math.round(questionTimesSpent.reduce((s, t) => s + t, 0) / questions.length)}s per question</p>
          </div>
        )}

        {/* Full answer review */}
        <div className="card p-5 mb-8">
          <h3 className="text-sm font-bold text-text-primary mb-3">Review All Answers</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {questions.map((q, i) => {
              const isCorrect = answers[i] === q.correct;
              return (
                <div key={i} className={`p-3 rounded-lg text-sm ${isCorrect ? "bg-success-50 border border-success-500/20" : "bg-danger-50 border border-danger-500/20"}`}>
                  <div className="flex items-start gap-2">
                    {isCorrect ? <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" /> : <XCircle className="w-4 h-4 text-danger-600 mt-0.5 flex-shrink-0" />}
                    <div className="flex-1">
                      <p className="text-text-primary font-medium">Q{i + 1}: {q.question}</p>
                      {answers[i] !== null && !isCorrect && (
                        <p className="text-danger-600 text-xs mt-1">Your answer: {q.options[answers[i]!]}</p>
                      )}
                      {!isCorrect && <p className="text-success-600 text-xs mt-1">Correct: {q.options[q.correct]}</p>}
                      <p className="text-text-tertiary text-xs mt-1 italic">{q.explanation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          <button onClick={() => setPhase("setup")} className="px-6 py-2.5 rounded-lg text-sm font-semibold btn-secondary">
            New session
          </button>
          <Link href="/dashboard" className="px-6 py-2.5 rounded-lg text-sm font-semibold btn-primary inline-flex items-center gap-1.5">
            Dashboard <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════
  // QUIZ SCREEN (both modes)
  // ═══════════════════════════════════════
  const question = questions[currentQ];
  if (!question) return null;

  const isExam = mode === "exam";
  const globalTimeWarning = isExam && globalTimeRemaining <= 300; // 5 min warning
  const globalTimePct = isExam ? (globalTimeRemaining / ((MODULE_CONFIG[selectedModule]?.timeMinutes ?? 120) * 60)) * 100 : 100;

  // Review overlay for exam mode (#3 + #8)
  if (showReview || unansweredWarning) {
    const answeredCount = answers.filter(a => a !== null).length;
    const flaggedCount = flagged.size;

    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Unanswered warning modal (#8) */}
        {unansweredWarning && (
          <div className="card p-6 mb-6 border-warning-300 bg-warning-50">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-warning-600 flex-shrink-0" />
              <div>
                <h2 className="text-lg font-bold text-warning-800 mb-1">
                  You have {unansweredCount} unanswered question{unansweredCount > 1 ? "s" : ""}
                </h2>
                <p className="text-sm text-warning-700 mb-4">
                  There is no negative marking — you should answer every question to maximise your score.
                </p>
                <div className="flex gap-3">
                  <button onClick={() => { setUnansweredWarning(false); setShowReview(false); }} className="px-4 py-2 text-sm font-semibold btn-secondary">
                    Go back &amp; answer
                  </button>
                  <button onClick={() => { setUnansweredWarning(false); setShowReview(true); }} className="px-4 py-2 text-sm font-semibold btn-primary">
                    Review anyway
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Review screen (#3) */}
        {showReview && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-text-primary">Review Before Submission</h2>
              {isExam && (
                <span className={`text-sm font-mono font-bold ${globalTimeWarning ? "text-danger-600" : "text-text-secondary"}`}>
                  ⏱ {fmtTime(globalTimeRemaining)}
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6 text-center text-sm">
              <div className="card p-3">
                <p className="text-2xl font-bold text-success-600">{answeredCount}</p>
                <p className="text-xs text-text-tertiary">Answered</p>
              </div>
              <div className="card p-3">
                <p className="text-2xl font-bold text-danger-600">{unansweredCount}</p>
                <p className="text-xs text-text-tertiary">Unanswered</p>
              </div>
              <div className="card p-3">
                <p className="text-2xl font-bold text-warning-600">{flaggedCount}</p>
                <p className="text-xs text-text-tertiary">Flagged</p>
              </div>
            </div>

            {/* Question grid — clickable to jump back */}
            <div className="card p-4 mb-6">
              <p className="text-xs text-text-tertiary mb-3">Click any question to go back and change your answer:</p>
              <div className="grid grid-cols-10 gap-1.5">
                {questions.map((_, i) => {
                  const answered = answers[i] !== null;
                  const isFlagged = flagged.has(i);
                  return (
                    <button
                      key={i}
                      onClick={() => { setShowReview(false); jumpTo(i); }}
                      className={`w-8 h-8 rounded text-[11px] font-bold transition-colors ${
                        isFlagged
                          ? "bg-warning-100 text-warning-700 ring-2 ring-warning-400"
                          : answered
                            ? "bg-success-100 text-success-700"
                            : "bg-danger-100 text-danger-700"
                      }`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-4 mt-3 text-[10px] text-text-tertiary">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-success-100 border border-success-300" /> Answered</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-danger-100 border border-danger-300" /> Unanswered</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-warning-100 ring-2 ring-warning-400" /> Flagged</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setShowReview(false)} className="flex-1 py-3 rounded-xl text-sm font-semibold btn-secondary">
                Go back
              </button>
              <button onClick={confirmFinish} className="flex-1 py-3 rounded-xl text-sm font-bold btn-accent">
                Submit exam
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ─── Main quiz UI ───
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Screen reader announcement */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Question {currentQ + 1} of {questions.length}: {question.topic}
      </div>

      {/* Header bar */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-text-primary tabular-nums">
            {currentQ + 1}<span className="text-text-tertiary font-normal"> / {questions.length}</span>
          </span>
          <span className="badge badge-navy">{CHAPTER_CONFIG[question.chapterId]?.name ?? question.topic}</span>
          {isExam && <span className="badge badge-gold">Exam Mode</span>}
          {!isExam && <span className="badge" style={{ backgroundColor: "var(--color-success-50)", color: "var(--color-success-700)" }}>Practice</span>}
        </div>
        <div className="flex items-center gap-3">
          {/* XP (practice only) */}
          {!isExam && (
            <span className="flex items-center gap-1 text-sm font-semibold text-gold-700 tabular-nums">
              <Zap className="w-4 h-4" /> +{xpEarned} XP
            </span>
          )}
          {/* Global countdown for exam mode (#1) */}
          {isExam ? (
            <span className={`flex items-center gap-1.5 text-sm font-mono font-bold tabular-nums ${globalTimeWarning ? "text-danger-600 animate-pulse" : "text-text-secondary"}`} role="timer">
              <Clock className="w-4 h-4" /> {fmtTime(globalTimeRemaining)}
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-text-tertiary tabular-nums">
              <Clock className="w-4 h-4" /> {fmtTime(timeElapsed)}
            </span>
          )}
          {/* Flag */}
          <button
            onClick={toggleFlag}
            className={`p-2 rounded-lg transition-colors ${flagged.has(currentQ) ? "bg-warning-50 text-warning-700" : "text-text-tertiary hover:bg-surface-sunken"}`}
            aria-label={flagged.has(currentQ) ? "Unflag" : "Flag for review"}
          >
            <Flag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Global timer bar (exam mode) */}
      {isExam && (
        <div className="w-full bg-surface-sunken rounded-full h-1.5 mb-2">
          <div
            className={`h-1.5 rounded-full transition-all duration-1000 ${globalTimeWarning ? "bg-danger-500 animate-pulse" : "bg-navy-500"}`}
            style={{ width: `${globalTimePct}%` }}
          />
        </div>
      )}

      {/* Progress bar */}
      <div className="flex gap-0.5 mb-6" role="group" aria-label="Progress">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i === currentQ ? "bg-navy-600"
              : answers[i] !== null ? "bg-navy-200"
              : "bg-surface-sunken"
            }`}
          />
        ))}
      </div>

      {/* Question card */}
      <div className="card p-6 mb-5">
        {/* Confidence marker (#11) */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-medium px-2 py-0.5 rounded ${question.difficulty === "hard" ? "bg-danger-50 text-danger-600" : question.difficulty === "medium" ? "bg-warning-50 text-warning-600" : "bg-success-50 text-success-600"}`}>
            {question.difficulty}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-text-tertiary mr-1">Confidence:</span>
            <button
              onClick={() => setConfidenceForQ(confidence[currentQ] === "sure" ? null : "sure")}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${confidence[currentQ] === "sure" ? "bg-success-100 text-success-700 ring-1 ring-success-400" : "bg-surface-sunken text-text-tertiary hover:bg-success-50"}`}
            >
              Sure
            </button>
            <button
              onClick={() => setConfidenceForQ(confidence[currentQ] === "unsure" ? null : "unsure")}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${confidence[currentQ] === "unsure" ? "bg-warning-100 text-warning-700 ring-1 ring-warning-400" : "bg-surface-sunken text-text-tertiary hover:bg-warning-50"}`}
            >
              Unsure
            </button>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-text-primary mb-6 leading-relaxed">
          {question.question}
        </h2>

        <div className="space-y-3" role="radiogroup" aria-label="Options">
          {question.options.map((option, idx) => {
            const isCorrect = idx === question.correct;
            const isSelected = selected === idx;
            const isWrong = revealed && isSelected && !isCorrect;

            let classes = "w-full text-left p-4 rounded-xl border-2 transition-all text-sm font-medium ";

            if (revealed) {
              if (isCorrect) classes += "border-success-500 bg-success-50 text-success-600";
              else if (isWrong) classes += "border-danger-500 bg-danger-50 text-danger-700";
              else classes += "border-border text-text-tertiary";
            } else if (isSelected) {
              classes += "border-navy-500 bg-navy-50 text-navy-800";
            } else {
              classes += "border-border hover:border-navy-300 hover:bg-navy-50/50 text-text-secondary";
            }

            return (
              <button key={idx} onClick={() => handleSelect(idx)} className={classes} role="radio" aria-checked={isSelected}>
                <span className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    revealed && isCorrect ? "bg-success-500 text-white"
                    : isWrong ? "bg-danger-500 text-white"
                    : isSelected ? "bg-navy-600 text-white"
                    : "bg-surface-sunken text-text-secondary"
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {/* Explanation (practice mode only) */}
        {revealed && !isExam && (
          <div className="mt-6 p-4 rounded-xl bg-navy-50 border border-navy-100 fade-in">
            <div className="flex items-start gap-2.5">
              <BookOpen className="w-4 h-4 text-navy-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-navy-800 leading-relaxed">{question.explanation}</p>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={goPrev} disabled={currentQ === 0} className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-surface-sunken rounded-lg disabled:opacity-30 disabled:cursor-not-allowed">
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>

        <div className="flex gap-3">
          {/* Practice: Check answer button */}
          {!isExam && !revealed && selected !== null && (
            <button onClick={handleReveal} className="px-5 py-2.5 text-sm font-semibold text-navy-700 bg-navy-50 rounded-lg hover:bg-navy-100">
              Check answer
            </button>
          )}

          {/* Last question: Finish/Submit */}
          {currentQ === questions.length - 1 ? (
            isExam ? (
              <button onClick={handleExamFinishAttempt} className="px-5 py-2.5 text-sm font-bold rounded-lg btn-accent flex items-center gap-1.5">
                <Eye className="w-4 h-4" /> Review &amp; Submit
              </button>
            ) : (
              <button onClick={() => finishQuiz()} className="px-5 py-2.5 text-sm font-semibold rounded-lg btn-accent">
                Finish quiz
              </button>
            )
          ) : (
            // Next button
            (!isExam && revealed) || isExam ? (
              <button onClick={goNext} className="flex items-center gap-1 px-5 py-2.5 text-sm font-semibold rounded-lg btn-primary">
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : null
          )}

          {/* Exam mode: Review button (always visible) */}
          {isExam && currentQ < questions.length - 1 && (
            <button onClick={handleExamFinishAttempt} className="px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-surface-sunken rounded-lg flex items-center gap-1.5">
              <List className="w-4 h-4" /> Review
            </button>
          )}
        </div>
      </div>

      {/* Question navigator (#7) — color-coded */}
      <nav className="mt-4 overflow-x-auto rounded-xl border border-border bg-surface-sunken/30 p-3" aria-label="Question navigator">
        <div className="flex gap-1.5 flex-wrap">
          {questions.map((_, i) => {
            const answered = answers[i] !== null;
            const isFlagged = flagged.has(i);
            const isCurrent = i === currentQ;
            const conf = confidence[i];

            // Color scheme (#7): current=dark, answered=blue, flagged=gold ring, unanswered=white
            let cls = "w-7 h-7 rounded-md text-[11px] font-bold transition-colors ";
            if (isCurrent) cls += "bg-navy-800 text-white";
            else if (answered) cls += "bg-navy-100 text-navy-700";
            else cls += "bg-white text-text-tertiary hover:bg-navy-50";

            if (isFlagged) cls += " ring-2 ring-warning-400";
            if (conf === "unsure" && !isCurrent) cls += " border border-warning-300";

            return (
              <button key={i} onClick={() => jumpTo(i)} className={cls}
                aria-label={`Q${i + 1}${answered ? ", answered" : ""}${isFlagged ? ", flagged" : ""}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
        <div className="flex gap-4 mt-2 text-[10px] text-text-tertiary">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-navy-800" /> Current</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-navy-100" /> Answered</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-white border border-gray-200" /> Unanswered</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-warning-100 ring-2 ring-warning-400" /> Flagged</span>
        </div>
      </nav>
    </div>
  );
}
