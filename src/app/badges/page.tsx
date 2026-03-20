"use client";

import { useAuth } from "@/lib/auth-context";
import { useGamification, BADGES } from "@/lib/gamification-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BadgesPage() {
  const { user, loading: authLoading } = useAuth();
  const { stats, loading: gamLoading } = useGamification();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) router.push("/login");
  }, [user, authLoading, router]);

  if (authLoading || gamLoading || !user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center" role="status">
        <div className="w-8 h-8 border-[3px] border-navy-600 border-t-transparent rounded-full animate-spin" aria-hidden="true" />
        <span className="sr-only">Loading badges</span>
      </div>
    );
  }

  const earned = stats.earnedBadges;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="section-divider mb-4" />
        <h1 className="text-3xl font-bold text-text-primary mb-2">Badges &amp; Achievements</h1>
        <p className="text-base text-text-secondary">
          {earned.length}/{BADGES.length} unlocked &mdash; keep studying to earn them all.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {BADGES.map((badge) => {
          const isEarned = earned.includes(badge.id);
          return (
            <div
              key={badge.id}
              className={`card p-6 transition-all ${isEarned ? "border-gold-200 bg-gold-50/50" : "opacity-50 grayscale"}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{badge.icon}</span>
                <div>
                  <p className={`font-bold ${isEarned ? "text-gold-800" : "text-text-tertiary"}`}>
                    {badge.name}
                  </p>
                  <p className="text-sm text-text-secondary mt-0.5">{badge.description}</p>
                  {isEarned && (
                    <span className="badge badge-success mt-2">Unlocked</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
