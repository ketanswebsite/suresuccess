import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl font-extrabold text-navy-200 mb-4">404</div>
        <h1 className="text-xl font-bold text-text-primary mb-2">
          Page not found
        </h1>
        <p className="text-text-secondary text-sm mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg btn-primary"
          >
            Go home <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/exams"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg btn-secondary"
          >
            Browse exams
          </Link>
        </div>
      </div>
    </div>
  );
}
