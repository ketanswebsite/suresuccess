"use client";

import { useAuth } from "@/lib/auth-context";
import { useGamification, BADGES, xpForLevel } from "@/lib/gamification-context";
import { CHAPTER_CONFIG } from "@/lib/question-bank";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Target,
  ArrowRight,
  Play,
  Flame,
  Zap,
  Trophy,
  Medal,
  Info,
} from "lucide-react";

// Read per-question history from localStorage to compute chapter-level stats
const HISTORY_KEY = "suresuccess_question_history";

interface QuestionHistory {
  attempts: number;
  wrong: number;
}

function getQuestionHistory(): Record<string, QuestionHistory> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "{}");
  } catch {
    return {};
  }
}

function getChapterStats() {
  const history = getQuestionHistory();
  const chapterStats: Record<string, { answered: number; correct: number }> = {};

  for (const [qId, h] of Object.entries(history)) {
    // Question IDs start with the chapter prefix, e.g. "ch1-cash-1" → "ch1"
    const chMatch = qId.match(/^((?:ch|reg-ch|fpa-ch)\d+)/);
    if (!chMatch) continue;
    const chId = chMatch[1];
    const prev = chapterStats[chId] || { answered: 0, correct: 0 };
    prev.answered += h.attempts;
    prev.correct += h.attempts - h.wrong;
    chapterStats[chId] = prev;
  }

  return chapterStats;
}

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const { stats, loading: gamLoading } = useGamification();
  const router = useRouter();
  const [chapterStats, setChapterStats] = useState<Record<string, { answered: number; correct: number }>>({});

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    setChapterStats(getChapterStats());
  }, []);

  if (authLoading || gamLoading || !user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading dashboard">
        <div className="w-8 h-8 border-[3px] border-navy-600 border-t-transparent rounded-full animate-spin" aria-hidden="true" />
        <span className="sr-only">Loading dashboard</span>
      </div>
    );
  }

  const firstName = user.displayName?.split(" ")[0] || "there";
  const accuracy = stats.totalAnswered > 0 ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) : 0;

  // XP progress
  const currentLevelXP = xpForLevel(stats.level);
  const nextLevelXP = xpForLevel(stats.level + 1);
  const xpProgress = stats.totalXP - currentLevelXP;
  const xpNeeded = nextLevelXP - currentLevelXP;
  const progressPct = Math.min(100, Math.max(0, (xpProgress / xpNeeded) * 100));

  const recentBadges = stats.earnedBadges
    .slice(-4)
    .map((bid) => BADGES.find((b) => b.id === bid))
    .filter(Boolean);

  // Build chapter progress from real localStorage history
  const chapters = Object.entries(CHAPTER_CONFIG).map(([id, cfg]) => {
    const s = chapterStats[id];
    const answered = s?.answered || 0;
    const correct = s?.correct || 0;
    const pct = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    return { id, name: cfg.name, weight: cfg.weight, answered, correct, pct };
  });

  // Only show chapters that belong to the ICWIM module (the one with questions)
  const icwimChapters = chapters.filter(
    (ch) => CHAPTER_CONFIG[ch.id]?.moduleId === "cisi-icwim"
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Getting started notice */}
      {stats.totalAnswered === 0 && (
        <div className="mb-6 flex items-start gap-2.5 rounded-lg bg-navy-50 border border-navy-100 px-4 py-3" role="status">
          <Info className="w-4 h-4 text-navy-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
          <p className="text-sm text-navy-800">
            Start a{" "}
            <Link href="/practice" className="font-semibold underline underline-offset-2 hover:text-navy-600">
              practice session
            </Link>{" "}
            to begin earning XP and unlocking badges.
          </p>
        </div>
      )}

      {/* Greeting */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary truncate">
          Welcome back, {firstName}
        </h1>
        <p className="text-base text-text-secondary mt-1">Here&apos;s how your exam preparation is going.</p>
      </div>

      {/* XP & Level Bar */}
      <div className="card p-6 mb-6 bg-gradient-to-r from-navy-800 to-navy-700 border-0 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-gold-400" aria-hidden="true" />
              <h2 className="text-xl font-bold">Level {stats.level}</h2>
            </div>
            <p className="text-navy-300 text-sm mt-0.5">{stats.totalXP.toLocaleString()} XP total</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1.5 text-gold-400 font-bold pulse-glow rounded-lg px-3 py-1.5">
              <Flame className="w-5 h-5" aria-hidden="true" />
              <span>{stats.currentStreak} day streak</span>
            </div>
            <p className="text-navy-400 text-xs mt-1">Best: {stats.longestStreak} days</p>
          </div>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3 mb-1.5" role="progressbar" aria-valuenow={Math.round(progressPct)} aria-valuemin={0} aria-valuemax={100} aria-label={`Level progress: ${Math.round(progressPct)}%`}>
          <div className="bg-gold-400 rounded-full h-3 transition-all duration-500" style={{ width: `${progressPct}%` }} />
        </div>
        <p className="text-navy-300 text-xs">{Math.round(xpNeeded - xpProgress)} XP to Level {stats.level + 1}</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="card p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center">
              <Target className="w-5 h-5 text-navy-600" aria-hidden="true" />
            </div>
          </div>
          <div className="text-2xl font-bold text-text-primary tabular-nums">{accuracy}%</div>
          <div className="text-xs text-text-tertiary mt-0.5">Accuracy</div>
          <div className={`text-xs mt-1 font-medium ${accuracy >= 70 ? "text-success-600" : "text-warning-700"}`}>
            {accuracy >= 70 ? "Exam ready" : "Keep practising"}
          </div>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-navy-600" aria-hidden="true" />
            </div>
          </div>
          <div className="text-2xl font-bold text-text-primary tabular-nums">{stats.totalAnswered}</div>
          <div className="text-xs text-text-tertiary mt-0.5">Questions Done</div>
          <div className="text-xs mt-1 font-medium text-text-tertiary">{stats.totalCorrect} correct</div>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center">
              <Zap className="w-5 h-5 text-navy-600" aria-hidden="true" />
            </div>
          </div>
          <div className="text-2xl font-bold text-text-primary tabular-nums">{stats.totalQuizzesCompleted}</div>
          <div className="text-xs text-text-tertiary mt-0.5">Quizzes Completed</div>
          <div className="text-xs mt-1 font-medium text-text-tertiary">{stats.perfectQuizzes} perfect</div>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center">
              <Medal className="w-5 h-5 text-navy-600" aria-hidden="true" />
            </div>
          </div>
          <div className="text-2xl font-bold text-text-primary tabular-nums">{stats.earnedBadges.length}/{BADGES.length}</div>
          <div className="text-xs text-text-tertiary mt-0.5">Badges Earned</div>
          <div className="text-xs mt-1 font-medium text-gold-700">
            <Link href="/badges" className="hover:underline">View all &rarr;</Link>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Link href="/practice" className="card-interactive overflow-hidden block group">
          <div className="h-1 bg-success-500" />
          <div className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-text-primary">Start a Quiz</h3>
              <p className="text-sm text-text-secondary mt-1">80 weighted questions, just like the real exam</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-success-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-success-600" aria-hidden="true" />
            </div>
          </div>
        </Link>

        <Link href="/practice?mode=speed" className="card-interactive overflow-hidden block group">
          <div className="h-1 bg-gold-500" />
          <div className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-text-primary">Speed Challenge</h3>
              <p className="text-sm text-text-secondary mt-1">5 questions, 30 seconds each &mdash; bonus XP</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-gold-600" aria-hidden="true" />
            </div>
          </div>
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chapter Progress */}
        <div className="lg:col-span-2 card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-text-primary">Chapter progress</h2>
            <span className="text-xs text-text-tertiary">Investment, Risk &amp; Taxation</span>
          </div>

          <div className="space-y-5">
            {icwimChapters.map((ch) => (
              <div key={ch.id}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-text-primary flex items-center gap-2">
                    <span className="badge badge-navy">{ch.weight} Qs</span>
                    {ch.name}
                  </span>
                  <span className="text-text-tertiary tabular-nums">
                    {ch.answered > 0 ? `${ch.pct}% (${ch.answered} attempts)` : "Not started"}
                  </span>
                </div>
                <div
                  className="progress-track"
                  role="progressbar"
                  aria-valuenow={ch.pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${ch.name}: ${ch.pct}% accuracy`}
                >
                  <div className="progress-fill" style={{ width: `${ch.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges & Streak */}
        <div className="space-y-6">
          {/* Recent Badges */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-text-primary">Recent badges</h2>
              <Link href="/badges" className="text-sm text-navy-600 hover:text-navy-800 font-medium">
                All &rarr;
              </Link>
            </div>

            {recentBadges.length > 0 ? (
              <div className="space-y-3">
                {recentBadges.map((badge) => badge && (
                  <div key={badge.id} className="flex items-center gap-3 p-3 rounded-lg bg-gold-50 border border-gold-100">
                    <span className="text-2xl">{badge.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-gold-800">{badge.name}</p>
                      <p className="text-xs text-gold-700">{badge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-text-tertiary">Complete quizzes to unlock badges!</p>
            )}
          </div>

          {/* Leaderboard teaser */}
          <div className="card p-6">
            <h2 className="text-lg font-bold text-text-primary mb-3">Your rank</h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-navy-800 flex items-center justify-center text-gold-400 text-xl font-bold">
                {user.displayName?.charAt(0) || "U"}
              </div>
              <div>
                <p className="font-bold text-text-primary">{user.displayName || "You"}</p>
                <p className="text-sm text-text-secondary">Level {stats.level} &middot; {stats.totalXP.toLocaleString()} XP</p>
              </div>
            </div>
            <Link href="/leaderboard" className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 font-semibold rounded-lg btn-secondary text-sm">
              View Leaderboard <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
