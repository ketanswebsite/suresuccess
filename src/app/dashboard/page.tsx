"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Target,
  TrendingUp,
  Clock,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Play,
  Flame,
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
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const firstName = user.displayName?.split(" ")[0] || "there";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Greeting */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Welcome back, {firstName}
        </h1>
        <p className="text-slate-500 mt-1">Here&apos;s your study progress at a glance.</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Target, label: "Avg Score", value: "78%", color: "blue", sub: "+3% this week" },
          { icon: BookOpen, label: "Questions Done", value: "342", color: "emerald", sub: "75 this week" },
          { icon: Flame, label: "Day Streak", value: "7", color: "amber", sub: "Keep it going!" },
          { icon: Clock, label: "Study Time", value: "14h", color: "purple", sub: "This month" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-lg bg-${stat.color}-50 flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
            <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
            <div className="text-xs text-green-600 mt-1">{stat.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Topic Progress */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-slate-900">Topic Progress</h2>
            <Link href="/exams" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {topicProgress.map((topic) => {
              const pct = Math.round((topic.progress / topic.total) * 100);
              return (
                <div key={topic.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-slate-700">{topic.name}</span>
                    <span className="text-slate-500">
                      {topic.progress}/{topic.total} questions ({pct}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-5">Recent Sessions</h2>

          <div className="space-y-3">
            {recentActivity.map((session, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-50"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                    session.score >= 80
                      ? "bg-green-50 text-green-700"
                      : session.score >= 60
                      ? "bg-amber-50 text-amber-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {session.score}%
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">{session.exam}</p>
                  <p className="text-xs text-slate-500">
                    {session.questions} questions &middot; {session.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/practice"
            className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-white font-semibold rounded-lg btn-primary text-sm"
          >
            <Play className="w-4 h-4" /> Start Practice
          </Link>
        </div>
      </div>
    </div>
  );
}
