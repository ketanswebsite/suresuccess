"use client";

import { useState, useEffect } from "react";
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
} from "lucide-react";

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
    options: ["£10,000", "£15,000", "£20,000", "£25,000"],
    correct: 2,
    explanation: "The annual ISA subscription limit is £20,000, which can be split across Cash ISA, Stocks and Shares ISA, Innovative Finance ISA, and Lifetime ISA.",
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
    question: "Under the FCA's Conduct Rules, which of the following is a requirement for all financial services staff?",
    options: [
      "Always prioritise the firm's profits",
      "Act with integrity",
      "Guarantee investment returns to clients",
      "Only advise on products the firm manufactures",
    ],
    correct: 1,
    explanation: "Acting with integrity is one of the FCA's fundamental Conduct Rules that applies to all staff in financial services firms.",
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

  // Timer
  useEffect(() => {
    if (finished) return;
    const interval = setInterval(() => setTimeElapsed((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [finished]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
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

  if (finished) {
    const pct = Math.round((score / sampleQuestions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
          <div
            className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
              pct >= 70 ? "bg-green-50" : "bg-amber-50"
            }`}
          >
            {pct >= 70 ? (
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            ) : (
              <RotateCcw className="w-10 h-10 text-amber-600" />
            )}
          </div>

          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            {pct >= 70 ? "Well Done!" : "Keep Practising!"}
          </h1>
          <p className="text-slate-600 mb-6">
            You scored {score}/{sampleQuestions.length} ({pct}%) in {mins}m {secs}s
          </p>

          <div className="grid grid-cols-5 gap-2 mb-8 max-w-xs mx-auto">
            {sampleQuestions.map((q, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                  answers[i] === q.correct
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {i + 1}
              </div>
            ))}
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
              className="px-6 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50"
            >
              Try Again
            </button>
            <button
              onClick={() => router.push("/dashboard")}
              className="px-6 py-2.5 text-white rounded-lg btn-primary text-sm font-medium"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-500">
            Question {currentQ + 1} of {sampleQuestions.length}
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-medium">
            {question.topic}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-sm text-slate-500">
            <Clock className="w-4 h-4" />
            {mins.toString().padStart(2, "0")}:{secs.toString().padStart(2, "0")}
          </span>
          <button
            onClick={toggleFlag}
            className={`p-2 rounded-lg transition-colors ${
              flagged.has(currentQ) ? "bg-amber-50 text-amber-600" : "text-slate-400 hover:bg-slate-100"
            }`}
          >
            <Flag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex gap-1 mb-8">
        {sampleQuestions.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i === currentQ
                ? "bg-blue-500"
                : answers[i] !== null
                ? "bg-blue-200"
                : "bg-slate-200"
            }`}
          />
        ))}
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-6 leading-relaxed">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, idx) => {
            let classes =
              "w-full text-left p-4 rounded-xl border-2 transition-all text-sm font-medium ";

            if (revealed) {
              if (idx === question.correct) {
                classes += "border-green-500 bg-green-50 text-green-800";
              } else if (idx === selected && idx !== question.correct) {
                classes += "border-red-500 bg-red-50 text-red-800";
              } else {
                classes += "border-slate-200 text-slate-500";
              }
            } else if (selected === idx) {
              classes += "border-blue-500 bg-blue-50 text-blue-800";
            } else {
              classes += "border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 text-slate-700";
            }

            return (
              <button key={idx} onClick={() => handleSelect(idx)} className={classes}>
                <span className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      revealed && idx === question.correct
                        ? "bg-green-500 text-white"
                        : revealed && idx === selected && idx !== question.correct
                        ? "bg-red-500 text-white"
                        : selected === idx
                        ? "bg-blue-500 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
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
          <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100 fade-in">
            <div className="flex items-start gap-2">
              <BookOpen className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-blue-800 leading-relaxed">{question.explanation}</p>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={currentQ === 0}
          className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>

        <div className="flex gap-3">
          {!revealed && selected !== null && (
            <button
              onClick={handleReveal}
              className="px-5 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100"
            >
              Check Answer
            </button>
          )}

          {currentQ === sampleQuestions.length - 1 ? (
            <button
              onClick={handleFinish}
              className="px-5 py-2 text-sm font-medium text-white rounded-lg btn-primary"
            >
              Finish Quiz
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-1 px-5 py-2 text-sm font-medium text-white rounded-lg btn-primary"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Question navigator */}
      <div className="mt-8 flex gap-2 justify-center">
        {sampleQuestions.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentQ(i);
              setSelected(answers[i]);
              setRevealed(false);
            }}
            className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors ${
              i === currentQ
                ? "bg-blue-600 text-white"
                : answers[i] !== null
                ? "bg-blue-100 text-blue-700"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            } ${flagged.has(i) ? "ring-2 ring-amber-400" : ""}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
