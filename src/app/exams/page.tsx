"use client";

import Link from "next/link";
import { BookOpen, Clock, FileText, Search, Lock } from "lucide-react";
import { useState } from "react";
import { CHAPTER_CONFIG, getQuestionsByModule } from "@/lib/question-bank";

// Build exam list from real data
const icwimQuestions = getQuestionsByModule("cisi-icwim");
const icwimChapters = Object.entries(CHAPTER_CONFIG).filter(
  ([, cfg]) => cfg.moduleId === "cisi-icwim"
);

const exams: {
  id: string;
  body: string;
  name: string;
  code: string;
  questions: number;
  duration: string;
  chapters: number;
  difficulty: string;
  available: boolean;
}[] = [
  {
    id: "cisi-icwim",
    body: "CISI",
    name: "Investment, Risk & Taxation (ICWIM)",
    code: "ICWIM",
    questions: icwimQuestions.length,
    duration: "120 mins",
    chapters: icwimChapters.length,
    difficulty: "Intermediate",
    available: true,
  },
  {
    id: "cisi-ioc",
    body: "CISI",
    name: "Introduction to Securities & Investment (IOC)",
    code: "IOC",
    questions: 0,
    duration: "60 mins",
    chapters: 0,
    difficulty: "Foundation",
    available: false,
  },
  {
    id: "cisi-iad",
    body: "CISI",
    name: "Investment Advice Diploma (IAD)",
    code: "IAD",
    questions: 0,
    duration: "120 mins",
    chapters: 0,
    difficulty: "Advanced",
    available: false,
  },
  {
    id: "cii-r01",
    body: "CII",
    name: "Financial Services, Regulation & Ethics",
    code: "R01",
    questions: 0,
    duration: "60 mins",
    chapters: 0,
    difficulty: "Foundation",
    available: false,
  },
  {
    id: "cii-r02",
    body: "CII",
    name: "Investment Principles & Risk",
    code: "R02",
    questions: 0,
    duration: "60 mins",
    chapters: 0,
    difficulty: "Foundation",
    available: false,
  },
  {
    id: "cii-r05",
    body: "CII",
    name: "Financial Protection",
    code: "R05",
    questions: 0,
    duration: "60 mins",
    chapters: 0,
    difficulty: "Foundation",
    available: false,
  },
  {
    id: "cii-af1",
    body: "CII",
    name: "Personal Tax & Trust Planning",
    code: "AF1",
    questions: 0,
    duration: "180 mins",
    chapters: 0,
    difficulty: "Advanced",
    available: false,
  },
  {
    id: "cii-af5",
    body: "CII",
    name: "Financial Planning Process",
    code: "AF5",
    questions: 0,
    duration: "180 mins",
    chapters: 0,
    difficulty: "Advanced",
    available: false,
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
        <div className="section-divider mb-4" />
        <h1 className="text-3xl font-bold text-text-primary mb-2 leading-tight">Exam modules</h1>
        <p className="text-base text-text-secondary leading-relaxed">
          Choose your exam to start practising. More modules coming soon.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" aria-hidden="true" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by exam name or code&hellip;"
            aria-label="Search exams by name or code"
            className="input pl-11 pr-3.5"
          />
        </div>
        <div className="flex gap-2" role="group" aria-label="Filter by exam body">
          {(["all", "CISI", "CII"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-navy-800 text-white"
                  : "bg-white border border-border text-text-secondary hover:bg-surface-sunken"
              }`}
            >
              {f === "all" ? "All exams" : f}
            </button>
          ))}
        </div>
      </div>

      {/* Exam grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((exam) =>
          exam.available ? (
            <Link
              key={exam.id}
              href={`/practice?exam=${exam.id}`}
              className="card-interactive overflow-hidden block group"
            >
              <div className={`h-1 ${exam.body === "CISI" ? "bg-navy-500" : "bg-gold-500"}`} />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`badge ${exam.body === "CISI" ? "badge-navy" : "badge-gold"}`}>
                    {exam.body}
                  </span>
                  <span className="badge bg-surface-sunken text-text-secondary">
                    {exam.difficulty}
                  </span>
                </div>

                <h3 className="font-bold text-text-primary mb-1 text-lg">{exam.code}</h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">{exam.name}</p>

                <div className="flex gap-4 text-xs text-text-tertiary mb-5">
                  <span className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" aria-hidden="true" /> {exam.questions} questions
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" /> {exam.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" aria-hidden="true" /> {exam.chapters} chapters
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 group-hover:text-navy-800 transition-colors">
                  Start practising <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </span>
              </div>
            </Link>
          ) : (
            <div
              key={exam.id}
              className="card overflow-hidden opacity-60"
            >
              <div className={`h-1 ${exam.body === "CISI" ? "bg-navy-300" : "bg-gold-300"}`} />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`badge ${exam.body === "CISI" ? "badge-navy" : "badge-gold"}`}>
                    {exam.body}
                  </span>
                  <span className="badge bg-surface-sunken text-text-secondary">
                    {exam.difficulty}
                  </span>
                </div>

                <h3 className="font-bold text-text-primary mb-1 text-lg">{exam.code}</h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">{exam.name}</p>

                <div className="flex gap-4 text-xs text-text-tertiary mb-5">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" /> {exam.duration}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-tertiary">
                  <Lock className="w-3.5 h-3.5" aria-hidden="true" /> Coming soon
                </span>
              </div>
            </div>
          )
        )}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-text-tertiary text-lg">No exams match your search.</p>
          <p className="text-text-tertiary text-sm mt-1">Try a different search term or clear your filters.</p>
        </div>
      )}
    </div>
  );
}
