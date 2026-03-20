"use client";

import { useAuth } from "@/lib/auth-context";
import { useGamification } from "@/lib/gamification-context";
import { getLeaderboard } from "@/lib/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Flame, Users } from "lucide-react";

interface Player {
  displayName: string;
  totalXP: number;
  level: number;
  currentStreak: number;
  isPlayer: boolean;
  rank: number;
}

export default function LeaderboardPage() {
  const { user, loading: authLoading } = useAuth();
  const { stats, loading: gamLoading } = useGamification();
  const router = useRouter();
  const [players, setPlayers] = useState<Player[]>([]);
  const [loadingBoard, setLoadingBoard] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) router.push("/login");
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!user) return;

    async function load() {
      try {
        const entries = await getLeaderboard(50);
        const mapped = entries.map((e) => ({
          displayName: e.displayName || "Anonymous",
          totalXP: e.totalXP,
          level: e.level,
          currentStreak: e.currentStreak,
          isPlayer: e.userId === user!.uid,
        }));

        // If the current user isn't in the leaderboard, add them
        const userInList = mapped.some((p) => p.isPlayer);
        if (!userInList) {
          mapped.push({
            displayName: user!.displayName || "You",
            totalXP: stats.totalXP,
            level: stats.level,
            currentStreak: stats.currentStreak,
            isPlayer: true,
          });
        }

        const ranked = mapped
          .sort((a, b) => b.totalXP - a.totalXP)
          .map((p, i) => ({ ...p, rank: i + 1 }));

        setPlayers(ranked);
      } catch {
        // Firestore not configured — show just the current user
        setPlayers([
          {
            displayName: user!.displayName || "You",
            totalXP: stats.totalXP,
            level: stats.level,
            currentStreak: stats.currentStreak,
            isPlayer: true,
            rank: 1,
          },
        ]);
      }
      setLoadingBoard(false);
    }

    if (!gamLoading) load();
  }, [user, stats, gamLoading]);

  if (authLoading || gamLoading || !user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center" role="status">
        <div className="w-8 h-8 border-[3px] border-navy-600 border-t-transparent rounded-full animate-spin" aria-hidden="true" />
        <span className="sr-only">Loading leaderboard</span>
      </div>
    );
  }

  const medals = ["\u{1F947}", "\u{1F948}", "\u{1F949}"];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="section-divider mb-4" />
        <h1 className="text-3xl font-bold text-text-primary mb-2">Leaderboard</h1>
        <p className="text-base text-text-secondary">
          See how you stack up against other learners.
        </p>
      </div>

      {loadingBoard ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-[3px] border-navy-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : players.length <= 1 ? (
        <div className="card p-12 text-center">
          <Users className="w-12 h-12 text-text-tertiary mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-lg font-bold text-text-primary mb-2">You&apos;re the first one here!</h2>
          <p className="text-sm text-text-secondary max-w-sm mx-auto">
            The leaderboard will populate as more people join and complete quizzes.
            Keep practising to secure the top spot.
          </p>
        </div>
      ) : (
        <div className="card overflow-hidden">
          {players.map((player) => (
            <div
              key={`${player.displayName}-${player.rank}`}
              className={`flex items-center gap-4 px-6 py-4 border-b border-border-light last:border-0 transition-colors ${
                player.isPlayer ? "bg-navy-50" : ""
              }`}
            >
              <span className="text-lg font-bold w-10 text-center text-text-tertiary tabular-nums">
                {player.rank <= 3 ? medals[player.rank - 1] : `#${player.rank}`}
              </span>

              <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-gold-400 text-sm font-bold flex-shrink-0">
                {player.displayName.charAt(0)}
              </div>

              <div className="flex-1 min-w-0">
                <p className={`font-medium truncate ${player.isPlayer ? "text-navy-700" : "text-text-primary"}`}>
                  {player.displayName}
                  {player.isPlayer && <span className="badge badge-navy ml-2 text-xs">YOU</span>}
                </p>
                <p className="text-xs text-text-tertiary flex items-center gap-2">
                  Level {player.level}
                  {player.currentStreak > 0 && (
                    <span className="flex items-center gap-0.5">
                      <Flame className="w-3 h-3 text-gold-500" aria-hidden="true" />
                      {player.currentStreak}d
                    </span>
                  )}
                </p>
              </div>

              <p className="text-text-primary font-bold tabular-nums">{player.totalXP.toLocaleString()} XP</p>
            </div>
          ))}
        </div>
      )}

      <p className="text-center text-xs text-text-tertiary mt-6">
        Leaderboard updates as you complete quizzes.
      </p>
    </div>
  );
}
