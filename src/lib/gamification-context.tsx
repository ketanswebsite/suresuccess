"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { useAuth } from "./auth-context";
import {
  getUserGamification,
  upsertUserGamification,
  type UserGamification,
} from "./firestore";

// ─── Badge Definitions ───

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  check: (stats: GamificationStats) => boolean;
}

export const BADGES: Badge[] = [
  { id: "first_quiz", name: "First Steps", icon: "🎯", description: "Complete your first quiz", check: (s) => s.totalQuizzesCompleted >= 1 },
  { id: "streak_3", name: "On Fire", icon: "🔥", description: "3-day study streak", check: (s) => s.currentStreak >= 3 },
  { id: "streak_7", name: "Week Warrior", icon: "⚔️", description: "7-day study streak", check: (s) => s.currentStreak >= 7 },
  { id: "streak_30", name: "Monthly Master", icon: "👑", description: "30-day study streak", check: (s) => s.currentStreak >= 30 },
  { id: "perfect", name: "Perfectionist", icon: "💎", description: "Score 100% on a quiz", check: (s) => s.perfectQuizzes >= 1 },
  { id: "speed_10", name: "Speed Demon", icon: "⚡", description: "10 fast correct answers", check: (s) => s.fastAnswers >= 10 },
  { id: "century", name: "Centurion", icon: "🏛️", description: "100 correct answers", check: (s) => s.totalCorrect >= 100 },
  { id: "scholar", name: "Scholar", icon: "📚", description: "500 correct answers", check: (s) => s.totalCorrect >= 500 },
  { id: "quiz_10", name: "Dedicated", icon: "🎓", description: "Complete 10 quizzes", check: (s) => s.totalQuizzesCompleted >= 10 },
  { id: "quiz_50", name: "Exam Ready", icon: "🏆", description: "Complete 50 quizzes", check: (s) => s.totalQuizzesCompleted >= 50 },
];

// ─── XP Levelling ───

export function xpForLevel(level: number): number {
  return Math.floor(100 * Math.pow(1.5, level - 1));
}

export function levelFromXP(totalXP: number): number {
  let level = 1;
  while (totalXP >= xpForLevel(level + 1)) level++;
  return level;
}

// ─── XP Rewards ───

export function calculateXP(difficulty: string, timeTaken: number, isCorrect: boolean, timed: boolean): number {
  if (!isCorrect) return 0;
  let xp = difficulty === "easy" ? 10 : difficulty === "medium" ? 20 : 35;
  if (timed && timeTaken < 10) xp += 5;   // speed bonus
  if (timed && timeTaken < 20) xp += 3;   // time bonus
  return xp;
}

// ─── Stats type (mirrors UserGamification but without Firestore fields) ───

export interface GamificationStats {
  totalXP: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string;
  totalCorrect: number;
  totalAnswered: number;
  totalQuizzesCompleted: number;
  perfectQuizzes: number;
  fastAnswers: number;
  earnedBadges: string[];
  categoryStats: Record<string, { answered: number; correct: number }>;
}

const DEFAULT_STATS: GamificationStats = {
  totalXP: 0,
  level: 1,
  currentStreak: 0,
  longestStreak: 0,
  lastStudyDate: "",
  totalCorrect: 0,
  totalAnswered: 0,
  totalQuizzesCompleted: 0,
  perfectQuizzes: 0,
  fastAnswers: 0,
  earnedBadges: [],
  categoryStats: {},
};

// ─── Context ───

interface GamificationContextType {
  stats: GamificationStats;
  loading: boolean;
  /** Record a completed quiz and persist to Firestore */
  recordQuizResult: (result: QuizResult) => Promise<string[]>; // returns newly earned badge IDs
  /** Refresh stats from Firestore */
  refresh: () => Promise<void>;
}

export interface QuizResult {
  score: number;
  total: number;
  xpEarned: number;
  fastAnswerCount: number;
  isPerfect: boolean;
  categoryId?: string;
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export function GamificationProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [stats, setStats] = useState<GamificationStats>(DEFAULT_STATS);
  const [loading, setLoading] = useState(true);

  const loadStats = useCallback(async () => {
    if (!user) {
      setStats(DEFAULT_STATS);
      setLoading(false);
      return;
    }
    try {
      const data = await getUserGamification(user.uid);
      if (data) {
        setStats({
          totalXP: data.totalXP,
          level: data.level,
          currentStreak: data.currentStreak,
          longestStreak: data.longestStreak,
          lastStudyDate: data.lastStudyDate,
          totalCorrect: data.totalCorrect,
          totalAnswered: data.totalAnswered,
          totalQuizzesCompleted: data.totalQuizzesCompleted,
          perfectQuizzes: data.perfectQuizzes,
          fastAnswers: data.fastAnswers,
          earnedBadges: data.earnedBadges,
          categoryStats: data.categoryStats,
        });
      }
    } catch {
      // Firestore might not be configured yet — use defaults
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    loadStats();
  }, [loadStats]);

  const recordQuizResult = useCallback(async (result: QuizResult): Promise<string[]> => {
    const today = new Date().toISOString().split("T")[0];

    const newStats: GamificationStats = { ...stats };
    newStats.totalXP += result.xpEarned + (result.isPerfect ? 50 : 0);
    newStats.totalCorrect += result.score;
    newStats.totalAnswered += result.total;
    newStats.totalQuizzesCompleted += 1;
    newStats.fastAnswers += result.fastAnswerCount;
    if (result.isPerfect) newStats.perfectQuizzes += 1;

    // Streak logic
    if (stats.lastStudyDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];

      if (stats.lastStudyDate === yesterdayStr) {
        newStats.currentStreak = stats.currentStreak + 1;
      } else if (stats.lastStudyDate === today) {
        // same day, keep streak
      } else {
        newStats.currentStreak = 1;
      }
      newStats.lastStudyDate = today;
    }
    newStats.longestStreak = Math.max(newStats.longestStreak, newStats.currentStreak);

    // Category stats
    if (result.categoryId) {
      const prev = newStats.categoryStats[result.categoryId] || { answered: 0, correct: 0 };
      newStats.categoryStats[result.categoryId] = {
        answered: prev.answered + result.total,
        correct: prev.correct + result.score,
      };
    }

    // Level
    newStats.level = levelFromXP(newStats.totalXP);

    // Check for new badges
    const newBadges = BADGES
      .filter((b) => b.check(newStats) && !stats.earnedBadges.includes(b.id))
      .map((b) => b.id);
    newStats.earnedBadges = [...newStats.earnedBadges, ...newBadges];

    setStats(newStats);

    // Persist to Firestore
    if (user) {
      try {
        await upsertUserGamification(user.uid, newStats);
      } catch {
        // offline or not configured — local state is fine
      }
    }

    return newBadges;
  }, [stats, user]);

  return (
    <GamificationContext.Provider value={{ stats, loading, recordQuizResult, refresh: loadStats }}>
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error("useGamification must be used within a GamificationProvider");
  }
  return context;
}
