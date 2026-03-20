"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Target,
  Clock,
  ArrowRight,
  Play,
  Flame,
  CheckCircle2,
  XCircle,
} from "lucide-react";

// Demo data — this will come from Firestore once connected
const recentActivity = [
  { exam: "CISI IOC", score: 78, questions: 25, date: "Today" },
  { exam: "CII R01", score: 85, questions: 30, date: "Yesterday" },
  { exam: "CISI IOC", score: 72, questions: 20, date: "2 days ago" },
];

const topicProgress = [
  { name: "Regulation & Compliance", progress: 85, total: 120 },
  { name: "Investment Products", progress: 62, total: 100 },
  { name: "Tax & Wrappers", progress: 45, total: 80 },
  { name: "Ethics & Integrity", progress: 90, total: 60 },
  { name: "Risk Management", progress: 30, total: 90 },
];

const statCards = [
  { icon: Target, label: "Avg Score", value: "78%", sub: "+3% this week", subColor: "text-success-600" },
  { icon: BookOpen, label: "Questions Done", value: "342", sub: "75 this week", subColor: "text-success-600" },
  { icon: Flame, label: "Day Streak", value: "7", sub: "Keep it going!", subColor: "text-gold-600", glow: true },
  { icon: Clock, label: "Study Time", value: "14h", sub: "This month", subColor: "text-text-tertiary" },
];

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading dashboard">
        <div className="w-8 h-8 border-[3px] border-navy-600 border-t-transparent rounded-full animate-spin" aria-hidden="true" />
        <span className="sr-only">Loading dashboard</span>
      </div>
    );
  }

  const firstName = user.displayName?.split(" ")[0] || "there";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Greeting */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary">
          Welcome back, {firstName}
        </h1>
        <p className="text-text-secondary mt-1">Here&apos;s how your exam preparation is going.</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((stat) => (
          <div key={stat.label} className={`card p-5 ${stat.glow ? "pulse-glow" : ""}`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-navy-600" aria-hidden="true" />
              </div>
            </div>
            <div className="text-2xl font-bold text-text-primary tabular-nums">{stat.value}</div>
            <div className="text-xs text-text-tertiary mt-0.5">{stat.label}</div>
            <div className={`text-xs mt-1 font-medium ${stat.subColor}`}>{stat.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Topic Progress */}
        <div className="lg:col-span-2 card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-text-primary">Topic progress</h2>
            <Link href="/exams" className="text-sm text-navy-600 hover:text-navy-800 font-medium flex items-center gap-1 transition-colors">
              View all <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-5">
            {topicProgress.map((topic) => {
              const pct = Math.round((topic.progress / topic.total) * 100);
              return (
                <div key={topic.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-text-primary">{topic.name}</span>
                    <span className="text-text-tertiary tabular-nums">
                      {topic.progress}/{topic.total} ({pct}%)
                    </span>
                  </div>
                  <div
                    className="progress-track"
                    role="progressbar"
                    aria-valuenow={pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${topic.name}: ${pct}% complete`}
                  >
                    <div
                      className="progress-fill"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-text-primary mb-6">Recent sessions</h2>

          <div className="space-y-3">
            {recentActivity.map((session, i) => {
              const passed = session.score >= 80;
              const mid = session.score >= 60 && session.score < 80;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-surface-raised"
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                      passed
                        ? "bg-success-50 text-success-600"
                        : mid
                        ? "bg-warning-50 text-warning-600"
                        : "bg-danger-50 text-danger-600"
                    }`}
                  >
                    {passed ? (
                      <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                    ) : mid ? (
                      <span>{session.score}%</span>
                    ) : (
                      <XCircle className="w-5 h-5" aria-hidden="true" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary truncate">
                      {session.exam}
                      <span className="sr-only"> — {session.score}%{passed ? ", passed" : ""}</span>
                    </p>
                    <p className="text-xs text-text-tertiary">
                      {session.score}% &middot; {session.questions} questions &middot; {session.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            href="/practice"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 font-semibold rounded-lg btn-primary text-sm"
          >
            <Play className="w-4 h-4" aria-hidden="true" /> Start practice session
          </Link>
        </div>
      </div>
    </div>
  );
}
