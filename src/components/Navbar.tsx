"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import {
  BookOpen,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
  User,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="glass sticky top-0 z-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">SureSuccess</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {user ? (
              <>
                <NavLink href="/dashboard" icon={<LayoutDashboard className="w-4 h-4" />}>
                  Dashboard
                </NavLink>
                <NavLink href="/exams" icon={<BookOpen className="w-4 h-4" />}>
                  Exams
                </NavLink>
                <NavLink href="/practice" icon={<GraduationCap className="w-4 h-4" />}>
                  Practice
                </NavLink>

                {/* Profile dropdown */}
                <div className="relative ml-3">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold">
                      {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
                    </div>
                    <span className="hidden lg:block">{user.displayName || "Account"}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-lg border border-slate-200 py-1 fade-in">
                      <div className="px-4 py-2 border-b border-slate-100">
                        <p className="text-sm font-medium text-slate-900">{user.displayName}</p>
                        <p className="text-xs text-slate-500 truncate">{user.email}</p>
                      </div>
                      <button
                        onClick={() => { logout(); setProfileOpen(false); }}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                      >
                        <LogOut className="w-4 h-4" /> Sign out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <NavLink href="/exams" icon={<BookOpen className="w-4 h-4" />}>
                  Exams
                </NavLink>
                <Link
                  href="/login"
                  className="ml-2 px-5 py-2 text-sm font-medium text-white rounded-lg btn-primary"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white fade-in">
          <div className="px-4 py-3 space-y-1">
            {user ? (
              <>
                <MobileNavLink href="/dashboard" onClick={() => setMobileOpen(false)}>
                  Dashboard
                </MobileNavLink>
                <MobileNavLink href="/exams" onClick={() => setMobileOpen(false)}>
                  Exams
                </MobileNavLink>
                <MobileNavLink href="/practice" onClick={() => setMobileOpen(false)}>
                  Practice
                </MobileNavLink>
                <button
                  onClick={() => { logout(); setMobileOpen(false); }}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <MobileNavLink href="/exams" onClick={() => setMobileOpen(false)}>
                  Exams
                </MobileNavLink>
                <MobileNavLink href="/login" onClick={() => setMobileOpen(false)}>
                  Sign In
                </MobileNavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
    >
      {icon}
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg"
    >
      {children}
    </Link>
  );
}
