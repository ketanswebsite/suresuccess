"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/lib/auth-context";
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
} from "lucide-react";
import Link from "next/link";

// Sample questions — these will come from Firestore
const sampleQuestions = [
  {
    id: 1,
    topic: "Regulation & Compliance",
    question: "Which regulatory body is responsible for the prudential regulation of banks, building societies, and insurance companies in the UK?",
    options: [
      "Financial Conduct Authority (FCA)",
      "Prudential Regulation Authority (PRA)",
      "Bank of England",
      "Financial Ombudsman Service (FOS)",
    ],
    correct: 1,
    explanation: "The Prudential Regulation Authority (PRA) is responsible for the prudential regulation and supervision of banks, building societies, credit unions, insurers, and major investment firms.",
  },
  {
    id: 2,
    topic: "Investment Products",
    question: "What is the maximum annual subscription limit for a Stocks and Shares ISA in the current tax year?",
    options: ["\u00a310,000", "\u00a315,000", "\u00a320,000", "\u00a325,000"],
    correct: 2,
    explanation: "The annual ISA subscription limit is \u00a320,000, which can be split across Cash ISA, Stocks and Shares ISA, Innovative Finance ISA, and Lifetime ISA.",
  },
  {
    id: 3,
    topic: "Tax & Wrappers",
    question: "Which of the following is NOT a characteristic of a unit trust?",
    options: [
      "Open-ended investment",
      "Managed by a fund manager",
      "Shares traded on a stock exchange",
      "Investors hold units in the trust",
    ],
    correct: 2,
    explanation: "Unit trusts are open-ended funds where investors buy and sell units directly from the fund manager, not on a stock exchange. Investment trusts, in contrast, are traded on exchanges.",
  },
  {
    id: 4,
    topic: "Ethics & Integrity",
    question: "Under the FCA\u2019s Conduct Rules, which of the following is a requirement for all financial services staff?",
    options: [
      "Always prioritise the firm\u2019s profits",
      "Act with integrity",
      "Guarantee investment returns to clients",
      "Only advise on products the firm manufactures",
    ],
    correct: 1,
    explanation: "Acting with integrity is one of the FCA\u2019s fundamental Conduct Rules that applies to all staff in financial services firms.",
  },
  {
    id: 5,
    topic: "Risk Management",
    question: "Systematic risk is best described as:",
    options: [
      "Risk specific to a single company",
      "Risk that can be eliminated through diversification",
      "Risk that affects the entire market",
      "Risk from poor management decisions",
    ],
    correct: 2,
    explanation: "Systematic risk (also called market risk) affects the entire market and cannot be diversified away. Examples include interest rate changes, inflation, and geopolitical events.",
  },
];

export default function PracticePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const examId = searchParams.get("exam");

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(sampleQuestions.length).fill(null)
  );
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [finished, setFinished] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Timer — pauses when tab is hidden
  useEffect(() => {
    if (finished) return;

    let interval: ReturnType<typeof setInterval>;

    const startTimer = () => {
      interval = setInterval(() => setTimeElapsed((t) => t + 1), 1000);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        startTimer();
      }
    };

    startTimer();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [finished]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (finished) return;
    if (e.key === "ArrowRight" && currentQ < sampleQuestions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(answers[currentQ + 1]);
      setRevealed(false);
    } else if (e.key === "ArrowLeft" && currentQ > 0) {
      setCurrentQ((q) => q - 1);
      setSelected(answers[currentQ - 1]);
      setRevealed(false);
    }
  }, [finished, currentQ, answers]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (loading || !user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading">
        <div className="w-8 h-8 border-[3px] border-navy-600 border-t-transparent rounded-full animate-spin" aria-hidden="true" />
        <span className="sr-only">Loading practice session</span>
      </div>
    );
  }

  const question = sampleQuestions[currentQ];
  const mins = Math.floor(timeElapsed / 60);
  const secs = timeElapsed % 60;

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    const newAnswers = [...answers];
    newAnswers[currentQ] = idx;
    setAnswers(newAnswers);
  };

  const handleReveal = () => setRevealed(true);

  const handleNext = () => {
    if (currentQ < sampleQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(answers[currentQ + 1]);
      setRevealed(false);
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setSelected(answers[currentQ - 1]);
      setRevealed(false);
    }
  };

  const toggleFlag = () => {
    const next = new Set(flagged);
    if (next.has(currentQ)) next.delete(currentQ);
    else next.add(currentQ);
    setFlagged(next);
  };

  const handleFinish = () => {
    setFinished(true);
    setRevealed(true);
  };

  const score = answers.reduce<number>(
    (acc, ans, i) => (acc ?? 0) + (ans === sampleQuestions[i].correct ? 1 : 0),
    0
  );

  // Results Screen
  if (finished) {
    const pct = Math.round((score / sampleQuestions.length) * 100);
    const passed = pct >= 70;

    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className={`card p-8 text-center ${passed ? "celebrate" : ""}`}>
          <div
            className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
              passed ? "bg-success-50" : "bg-warning-50"
            }`}
          >
            {passed ? (
              <Trophy className="w-10 h-10 text-gold-500" aria-hidden="true" />
            ) : (
              <RotateCcw className="w-10 h-10 text-warning-600" aria-hidden="true" />
            )}
          </div>

          <h1 className="text-2xl font-bold text-text-primary mb-2">
            {passed ? "Excellent work!" : "Keep practising \u2014 you\u2019re getting there"}
          </h1>
          <p className="text-text-secondary mb-8">
            You scored {score}/{sampleQuestions.length} ({pct}%) in{" "}
            {mins}m {secs}s
          </p>

          {/* Answer summary */}
          <div className="grid grid-cols-5 gap-2 mb-8 max-w-xs mx-auto" role="list" aria-label="Answer summary">
            {sampleQuestions.map((q, i) => {
              const correct = answers[i] === q.correct;
              return (
                <div
                  key={i}
                  role="listitem"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                    correct
                      ? "bg-success-50 text-success-600"
                      : "bg-danger-50 text-danger-600"
                  }`}
                  aria-label={`Question ${i + 1}: ${correct ? "correct" : "incorrect"}`}
                >
                  {correct ? (
                    <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <XCircle className="w-5 h-5" aria-hidden="true" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => {
                setCurrentQ(0);
                setAnswers(new Array(sampleQuestions.length).fill(null));
                setSelected(null);
                setRevealed(false);
                setFlagged(new Set());
                setFinished(false);
                setTimeElapsed(0);
              }}
              className="px-6 py-2.5 rounded-lg text-sm font-semibold btn-secondary"
            >
              Try again
            </button>
            <Link
              href="/dashboard"
              className="px-6 py-2.5 rounded-lg text-sm font-semibold btn-primary inline-flex items-center gap-1.5"
            >
              Back to dashboard <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Screen
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-text-primary tabular-nums">
            {currentQ + 1}
            <span className="text-text-tertiary font-normal"> / {sampleQuestions.length}</span>
          </span>
          <span className="badge badge-navy">{question.topic}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-sm text-text-tertiary tabular-nums" role="timer" aria-label={`Time elapsed: ${mins} minutes ${secs} seconds`}>
            <Clock className="w-4 h-4" aria-hidden="true" />
            {mins.toString().padStart(2, "0")}:{secs.toString().padStart(2, "0")}
          </span>
          <button
            onClick={toggleFlag}
            className={`p-2.5 rounded-lg transition-colors ${
              flagged.has(currentQ)
                ? "bg-warning-50 text-warning-600"
                : "text-text-tertiary hover:bg-surface-sunken"
            }`}
            aria-label={flagged.has(currentQ) ? "Unflag this question" : "Flag for review"}
            aria-pressed={flagged.has(currentQ)}
          >
            <Flag className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex gap-1 mb-8" role="group" aria-label="Question progress">
        {sampleQuestions.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i === currentQ
                ? "bg-navy-600"
                : answers[i] !== null
                ? "bg-navy-200"
                : "bg-surface-sunken"
            }`}
            aria-label={`Question ${i + 1}: ${i === currentQ ? "current" : answers[i] !== null ? "answered" : "unanswered"}`}
          />
        ))}
      </div>

      {/* Question */}
      <div className="card p-8 mb-6">
        <h2 className="text-lg font-semibold text-text-primary mb-6 leading-relaxed">
          {question.question}
        </h2>

        <div className="space-y-3" role="radiogroup" aria-label="Answer options">
          {question.options.map((option, idx) => {
            const isCorrect = idx === question.correct;
            const isSelected = selected === idx;
            const isWrong = revealed && isSelected && !isCorrect;

            let classes =
              "w-full text-left p-4 rounded-xl border-2 transition-all text-sm font-medium ";

            if (revealed) {
              if (isCorrect) {
                classes += "border-success-500 bg-success-50 text-success-600";
              } else if (isWrong) {
                classes += "border-danger-500 bg-danger-50 text-danger-600";
              } else {
                classes += "border-border text-text-tertiary";
              }
            } else if (isSelected) {
              classes += "border-navy-500 bg-navy-50 text-navy-800";
            } else {
              classes +=
                "border-border hover:border-navy-300 hover:bg-navy-50/50 text-text-secondary";
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={classes}
                role="radio"
                aria-checked={isSelected}
                aria-disabled={revealed}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      revealed && isCorrect
                        ? "bg-success-500 text-white"
                        : isWrong
                        ? "bg-danger-500 text-white"
                        : isSelected
                        ? "bg-navy-600 text-white"
                        : "bg-surface-sunken text-text-secondary"
                    }`}
                    aria-hidden="true"
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {revealed && (
          <div className="mt-6 p-4 rounded-xl bg-navy-50 border border-navy-100 fade-in" role="status">
            <div className="flex items-start gap-2.5">
              <BookOpen className="w-4 h-4 text-navy-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-navy-800 leading-relaxed">{question.explanation}</p>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={currentQ === 0}
          className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-surface-sunken rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" aria-hidden="true" /> Previous
        </button>

        <div className="flex gap-3">
          {!revealed && selected !== null && (
            <button
              onClick={handleReveal}
              className="px-5 py-2.5 text-sm font-semibold text-navy-700 bg-navy-50 rounded-lg hover:bg-navy-100 transition-colors"
            >
              Check answer
            </button>
          )}

          {currentQ === sampleQuestions.length - 1 ? (
            <button
              onClick={handleFinish}
              className="px-5 py-2.5 text-sm font-semibold rounded-lg btn-accent"
            >
              Finish quiz
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-1 px-5 py-2.5 text-sm font-semibold rounded-lg btn-primary"
            >
              Next <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* Question navigator */}
      <nav className="mt-8 flex gap-2 justify-center" aria-label="Question navigator">
        {sampleQuestions.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentQ(i);
              setSelected(answers[i]);
              setRevealed(false);
            }}
            aria-label={`Question ${i + 1}${answers[i] !== null ? ", answered" : ""}${flagged.has(i) ? ", flagged" : ""}${i === currentQ ? ", current" : ""}`}
            aria-current={i === currentQ ? "step" : undefined}
            className={`w-10 h-10 rounded-lg text-xs font-bold transition-colors ${
              i === currentQ
                ? "bg-navy-800 text-white"
                : answers[i] !== null
                ? "bg-navy-100 text-navy-700"
                : "bg-surface-sunken text-text-tertiary hover:bg-navy-50"
            } ${flagged.has(i) ? "ring-2 ring-gold-400" : ""}`}
          >
            {i + 1}
          </button>
        ))}
      </nav>
    </div>
  );
}
