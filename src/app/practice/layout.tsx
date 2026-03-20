import { Suspense } from "react";

export default function PracticeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading practice session">
          <div className="w-8 h-8 border-[3px] border-navy-600 border-t-transparent rounded-full animate-spin" aria-hidden="true" />
          <span className="sr-only">Loading practice session</span>
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
