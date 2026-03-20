import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-gold-400" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">SureSuccess</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md text-navy-400">
              The exam preparation platform trusted by UK financial professionals.
              Expertly crafted questions for CISI and CII certifications, backed by
              adaptive learning that focuses your study time where it counts.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-navy-200 uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/exams" className="hover:text-white transition-colors">Browse Exams</Link></li>
              <li><Link href="/practice" className="hover:text-white transition-colors">Practice Questions</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Your Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-navy-200 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><span className="text-navy-500 cursor-default">Contact Support</span></li>
              <li><span className="text-navy-500 cursor-default">Privacy Policy</span></li>
              <li><span className="text-navy-500 cursor-default">Terms of Service</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-navy-500">
            &copy; 2026 SureSuccess Ltd. All rights reserved.
          </p>
          <p className="text-xs text-navy-500">
            Preparing professionals for CISI &amp; CII exams since 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
