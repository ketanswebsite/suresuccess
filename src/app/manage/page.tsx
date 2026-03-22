"use client";

import { useState, useCallback } from "react";
import { useAuth } from "@/lib/auth-context";
import { isAdmin } from "@/lib/admin";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  CheckCircle2,
  ChevronDown,
  X,
  Save,
} from "lucide-react";

// ─── Types ───

interface ManagedQuestion {
  id: string;
  moduleId: string;
  chapterId: string;
  topicId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: string;
}

// ─── Categories / Modules (matches your Firestore schema) ───

const MODULES = [
  { id: "cisi-ioc", body: "CISI", name: "Introduction to Securities & Investment (IOC)" },
  { id: "cisi-reg", body: "CISI", name: "UK Regulation & Professional Integrity (REG)" },
  { id: "cisi-icwim", body: "CISI", name: "Investment, Risk & Taxation (ICWIM)" },
  { id: "cisi-fpa", body: "CISI", name: "Financial Planning & Advice (FPA)" },
  { id: "cisi-iad", body: "CISI", name: "Investment Advice Diploma (IAD)" },
  { id: "cii-r01", body: "CII", name: "Financial Services, Regulation & Ethics (R01)" },
  { id: "cii-r02", body: "CII", name: "Investment Principles & Risk (R02)" },
  { id: "cii-r05", body: "CII", name: "Financial Protection (R05)" },
  { id: "cii-af1", body: "CII", name: "Personal Tax & Trust Planning (AF1)" },
  { id: "cii-af5", body: "CII", name: "Financial Planning Process (AF5)" },
];

const DIFFICULTIES = ["easy", "medium", "hard"];

// ─── Full question bank from CISI textbook ───

import { getManagedQuestions } from "@/lib/question-bank";
const INITIAL_QUESTIONS: ManagedQuestion[] = getManagedQuestions();

// ─── Page Component ───

export default function ManageQuestionsPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  const [questions, setQuestions] = useState<ManagedQuestion[]>(INITIAL_QUESTIONS);
  const [filterBody, setFilterBody] = useState("ALL");
  const [filterModule, setFilterModule] = useState("ALL");
  const [filterDifficulty, setFilterDifficulty] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) router.push("/login");
    if (!authLoading && user && !isAdmin(user.email)) router.push("/dashboard");
  }, [user, authLoading, router]);

  if (authLoading || !user || !isAdmin(user.email)) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center" role="status">
        <div className="w-8 h-8 border-[3px] border-navy-600 border-t-transparent rounded-full animate-spin" aria-hidden="true" />
        <span className="sr-only">Loading</span>
      </div>
    );
  }

  // Filtering
  const filteredModules = filterBody === "ALL" ? MODULES : MODULES.filter((m) => m.body === filterBody);
  const filtered = questions.filter((q) => {
    if (filterBody !== "ALL") {
      const mod = MODULES.find((m) => m.id === q.moduleId);
      if (!mod || mod.body !== filterBody) return false;
    }
    if (filterModule !== "ALL" && q.moduleId !== filterModule) return false;
    if (filterDifficulty !== "ALL" && q.difficulty !== filterDifficulty) return false;
    if (searchTerm && !q.question.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const handleSave = (q: ManagedQuestion) => {
    if (questions.find((existing) => existing.id === q.id)) {
      setQuestions((prev) => prev.map((existing) => (existing.id === q.id ? q : existing)));
    } else {
      setQuestions((prev) => [...prev, q]);
    }
    setEditingId(null);
    setShowAddForm(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this question?")) {
      setQuestions((prev) => prev.filter((q) => q.id !== id));
    }
  };

  const diffBadge = (d: string) =>
    d === "easy" ? "badge-success" : d === "medium" ? "badge-warning" : "badge-danger";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <div className="section-divider mb-4" />
          <h1 className="text-3xl font-bold text-text-primary">Question Bank</h1>
          <p className="text-base text-text-secondary mt-1">{questions.length} questions total</p>
        </div>
        <button
          onClick={() => { setShowAddForm(true); setEditingId(null); }}
          className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold inline-flex items-center gap-2"
        >
          <Plus className="w-4 h-4" aria-hidden="true" /> Add Question
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={filterBody}
          onChange={(e) => { setFilterBody(e.target.value); setFilterModule("ALL"); }}
          className="input max-w-[160px] px-3"
          aria-label="Filter by exam body"
        >
          <option value="ALL">All bodies</option>
          <option value="CISI">CISI</option>
          <option value="CII">CII</option>
        </select>

        <select
          value={filterModule}
          onChange={(e) => setFilterModule(e.target.value)}
          className="input max-w-[280px] px-3"
          aria-label="Filter by module"
        >
          <option value="ALL">All modules</option>
          {filteredModules.map((m) => (
            <option key={m.id} value={m.id}>{m.name}</option>
          ))}
        </select>

        <select
          value={filterDifficulty}
          onChange={(e) => setFilterDifficulty(e.target.value)}
          className="input max-w-[140px] px-3"
          aria-label="Filter by difficulty"
        >
          <option value="ALL">All levels</option>
          {DIFFICULTIES.map((d) => (
            <option key={d} value={d}>{d.charAt(0).toUpperCase() + d.slice(1)}</option>
          ))}
        </select>

        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" aria-hidden="true" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions..."
            className="input pl-10 pr-3"
            aria-label="Search questions"
          />
        </div>
      </div>

      {/* Add/Edit Form */}
      {(showAddForm || editingId) && (
        <QuestionForm
          initial={editingId ? questions.find((q) => q.id === editingId) || null : null}
          modules={MODULES}
          onSave={handleSave}
          onCancel={() => { setShowAddForm(false); setEditingId(null); }}
        />
      )}

      {/* Question List */}
      <div className="space-y-3">
        {filtered.map((q) => {
          const mod = MODULES.find((m) => m.id === q.moduleId);
          return (
            <div key={q.id} className="card p-5 group hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`badge ${mod?.body === "CISI" ? "badge-navy" : "badge-gold"}`}>
                      {mod?.body || "—"}
                    </span>
                    <span className={`badge ${diffBadge(q.difficulty)}`}>
                      {q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}
                    </span>
                    <span className="text-xs text-text-tertiary">{mod?.name || q.moduleId}</span>
                  </div>
                  <p className="text-sm font-medium text-text-primary leading-relaxed">{q.question}</p>
                  <p className="text-xs text-success-600 mt-1.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                    {q.options[q.correctAnswer]}
                  </p>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  <button
                    onClick={() => { setEditingId(q.id); setShowAddForm(false); }}
                    className="p-2 rounded-lg bg-navy-50 text-navy-600 hover:bg-navy-100 transition-colors"
                    aria-label={`Edit question: ${q.question.slice(0, 30)}`}
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(q.id)}
                    className="p-2 rounded-lg bg-danger-50 text-danger-600 hover:bg-danger-50/80 transition-colors"
                    aria-label={`Delete question: ${q.question.slice(0, 30)}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-tertiary text-lg">No questions match your filters.</p>
            <p className="text-text-tertiary text-sm mt-1">Try different filters or add new questions.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Question Form Component ───

function QuestionForm({
  initial,
  modules,
  onSave,
  onCancel,
}: {
  initial: ManagedQuestion | null;
  modules: { id: string; body: string; name: string }[];
  onSave: (q: ManagedQuestion) => void;
  onCancel: () => void;
}) {
  const isEditing = !!initial;
  const [form, setForm] = useState<ManagedQuestion>(
    initial || {
      id: `q_${Date.now()}`,
      moduleId: modules[0]?.id || "",
      chapterId: "",
      topicId: "",
      question: "",
      options: ["", "", "", ""],
      correctAnswer: 0,
      explanation: "",
      difficulty: "medium",
    }
  );

  const setOption = (idx: number, val: string) => {
    const opts = [...form.options];
    opts[idx] = val;
    setForm({ ...form, options: opts });
  };

  const handleSubmit = () => {
    if (!form.question.trim()) return alert("Question text is required.");
    if (form.options.some((o) => !o.trim())) return alert("All 4 options must be filled in.");
    if (!form.explanation.trim()) return alert("Explanation is required \u2014 it\u2019s essential for learning.");
    onSave(form);
  };

  return (
    <div className="card p-6 mb-6 border-navy-200 bg-navy-50/30 fade-in">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-text-primary">
          {isEditing ? "Edit Question" : "Add New Question"}
        </h3>
        <button onClick={onCancel} className="p-2 rounded-lg hover:bg-surface-sunken text-text-tertiary" aria-label="Cancel">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {/* Module & Difficulty */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-text-secondary mb-1 block">Module</label>
            <select
              value={form.moduleId}
              onChange={(e) => setForm({ ...form, moduleId: e.target.value })}
              className="input px-3"
            >
              {modules.map((m) => (
                <option key={m.id} value={m.id}>[{m.body}] {m.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-text-secondary mb-1 block">Difficulty</label>
            <select
              value={form.difficulty}
              onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
              className="input px-3"
            >
              {DIFFICULTIES.map((d) => (
                <option key={d} value={d}>{d.charAt(0).toUpperCase() + d.slice(1)}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Chapter & Topic IDs */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-text-secondary mb-1 block">Chapter ID</label>
            <input
              type="text"
              value={form.chapterId}
              onChange={(e) => setForm({ ...form, chapterId: e.target.value })}
              placeholder="e.g. ch1"
              className="input px-3"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-text-secondary mb-1 block">Topic ID</label>
            <input
              type="text"
              value={form.topicId}
              onChange={(e) => setForm({ ...form, topicId: e.target.value })}
              placeholder="e.g. t1"
              className="input px-3"
            />
          </div>
        </div>

        {/* Question text */}
        <div>
          <label className="text-sm font-medium text-text-secondary mb-1 block">Question</label>
          <textarea
            value={form.question}
            onChange={(e) => setForm({ ...form, question: e.target.value })}
            rows={3}
            className="input px-3 resize-none"
            placeholder="Enter the question text..."
          />
        </div>

        {/* Options with correct answer selection */}
        <div>
          <label className="text-sm font-medium text-text-secondary mb-2 block">
            Options (click the letter to mark as correct)
          </label>
          <div className="space-y-2">
            {form.options.map((opt, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, correctAnswer: idx })}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${
                    form.correctAnswer === idx
                      ? "bg-success-500 text-white"
                      : "bg-surface-sunken text-text-secondary hover:bg-navy-100"
                  }`}
                  aria-label={`Mark option ${String.fromCharCode(65 + idx)} as correct`}
                  aria-pressed={form.correctAnswer === idx}
                >
                  {String.fromCharCode(65 + idx)}
                </button>
                <input
                  type="text"
                  value={opt}
                  onChange={(e) => setOption(idx, e.target.value)}
                  placeholder={`Option ${String.fromCharCode(65 + idx)}`}
                  className="input px-3 flex-1"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Explanation */}
        <div>
          <label className="text-sm font-medium text-text-secondary mb-1 block">
            Explanation (shown after answering)
          </label>
          <textarea
            value={form.explanation}
            onChange={(e) => setForm({ ...form, explanation: e.target.value })}
            rows={3}
            className="input px-3 resize-none"
            placeholder="Explain why the correct answer is right..."
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button onClick={onCancel} className="flex-1 py-2.5 rounded-lg text-sm font-semibold btn-secondary">
            Cancel
          </button>
          <button onClick={handleSubmit} className="flex-1 py-2.5 rounded-lg text-sm font-semibold btn-primary inline-flex items-center justify-center gap-2">
            <Save className="w-4 h-4" aria-hidden="true" />
            {isEditing ? "Save Changes" : "Add Question"}
          </button>
        </div>
      </div>
    </div>
  );
}
