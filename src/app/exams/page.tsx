"use client";

import Link from "next/link";
import { BookOpen, Clock, FileText, ArrowRight, Search } from "lucide-react";
import { useState } from "react";

const exams = [
  {
    id: "cisi-ioc",
    body: "CISI",
    name: "Introduction to Securities & Investment (IOC)",
    code: "IOC",
    questions: 450,
    duration: "60 mins",
    topics: 8,
    difficulty: "Foundation",
    color: "blue",
  },
  {
    id: "cisi-icwim",
    body: "CISI",
    name: "Investment, Risk & Taxation (ICWIM)",
    code: "ICWIM",
    questions: 380,
    duration: "120 mins",
    topics: 10,
    difficulty: "Intermediate",
    color: "blue",
  },
  {
    id: "cisi-iad",
    body: "CISI",
    name: "Investment Advice Diploma (IAD)",
    code: "IAD",
    questions: 520,
    duration: "120 mins",
    topics: 12,
    difficulty: "Advanced",
    color: "blue",
  },
  {
    id: "cii-r01",
    body: "CII",
    name: "Financial Services, Regulation & Ethics",
    code: "R01",
    questions: 400,
    duration: "60 mins",
    topics: 7,
    difficulty: "Foundation",
    color: "emerald",
  },
  {
    id: "cii-r02",
    body: "CII",
    name: "Investment Principles & Risk",
    code: "R02",
    questions: 350,
    duration: "60 mins",
    topics: 8,
    difficulty: "Foundation",
    color: "emerald",
  },
  {
    id: "cii-r05",
    body: "CII",
    name: "Financial Protection",
    code: "R05",
    questions: 320,
    duration: "60 mins",
    topics: 6,
    difficulty: "Foundation",
    color: "emerald",
  },
  {
    id: "cii-af1",
    body: "CII",
    name: "Personal Tax & Trust Planning",
    code: "AF1",
    questions: 280,
    duration: "180 mins",
    topics: 9,
    difficulty: "Advanced",
    color: "emerald",
  },
  {
    id: "cii-af5",
    body: "CII",
    name: "Financial Planning Process",
    code: "AF5",
    questions: 300,
    duration: "180 mins",
    topics: 8,
    difficulty: "Advanced",
    color: "emerald",
  },
];

export default function ExamsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "CISI" | "CII">("all");

  const filtered = exams.filter((e) => {
    const matchesSearch =
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.code.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || e.body === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Exam Modules</h1>
        <p className="text-slate-600">Choose an exam to start practising. All modules are updated for 2026 syllabuses.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search exams..."
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2">
          {(["all", "CISI", "CII"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {f === "all" ? "All" : f}
            </button>
          ))}
        </div>
      </div>

      {/* Exam grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((exam) => (
          <div
            key={exam.id}
            className="card-hover bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
          >
            <div className={`h-1.5 ${exam.body === "CISI" ? "bg-blue-500" : "bg-emerald-500"}`} />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    exam.body === "CISI"
                      ? "bg-blue-50 text-blue-700"
                      : "bg-emerald-50 text-emerald-700"
                  }`}
                >
                  {exam.body}
                </span>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  {exam.difficulty}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 mb-1">{exam.code}</h3>
              <p className="text-sm text-slate-600 mb-4">{exam.name}</p>

              <div className="flex gap-4 text-xs text-slate-500 mb-5">
                <span className="flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" /> {exam.questions} Qs
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {exam.duration}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> {exam.topics} topics
                </span>
              </div>

              <Link
                href={`/practice?exam=${exam.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                Start Practising <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-slate-500">No exams found matching your search.</p>
        </div>
      )}
    </div>
  );
}
