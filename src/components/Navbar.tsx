"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import {
  BookOpen,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
  GraduationCap,
  ChevronDown,
  PenTool,
} from "lucide-react";

function useFocusTrap(active: boolean, containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!active || !containerRef.current) return;

    const container = containerRef.current;
    const focusable = container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function handleTab(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    container.addEventListener("keydown", handleTab);
    first.focus();

    return () => container.removeEventListener("keydown", handleTab);
  }, [active, containerRef]);
}

export default function Navbar() {
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const profileButtonRef = useRef<HTMLButtonElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close profile dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close dropdowns on Escape and return focus
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (profileOpen) {
        setProfileOpen(false);
        profileButtonRef.current?.focus();
      }
      if (mobileOpen) {
        setMobileOpen(false);
      }
    }
  }, [profileOpen, mobileOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Arrow key navigation in profile dropdown
  useEffect(() => {
    if (!profileOpen || !profileMenuRef.current) return;

    const menu = profileMenuRef.current;
    const items = menu.querySelectorAll<HTMLElement>('[role="menuitem"]');
    if (items.length === 0) return;

    function handleArrows(e: KeyboardEvent) {
      const currentIndex = Array.from(items).indexOf(document.activeElement as HTMLElement);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        items[next].focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        items[prev].focus();
      }
    }

    menu.addEventListener("keydown", handleArrows);
    // Focus first menu item on open
    items[0].focus();

    return () => menu.removeEventListener("keydown", handleArrows);
  }, [profileOpen]);

  // Focus trap for mobile menu
  useFocusTrap(mobileOpen, mobileMenuRef);

  return (
    <nav className="glass-nav sticky top-0 z-50" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-navy-900 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-gold-400" aria-hidden="true" />
            </div>
            <span className="text-lg font-bold text-navy-900 tracking-tight">
              SureSuccess
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {user ? (
              <>
                <NavLink href="/dashboard" icon={<LayoutDashboard className="w-4 h-4" aria-hidden="true" />}>
                  Dashboard
                </NavLink>
                <NavLink href="/exams" icon={<BookOpen className="w-4 h-4" aria-hidden="true" />}>
                  Exams
                </NavLink>
                <NavLink href="/practice" icon={<PenTool className="w-4 h-4" aria-hidden="true" />}>
                  Practice
                </NavLink>

                {/* Profile dropdown */}
                <div className="relative ml-3" ref={profileRef}>
                  <button
                    ref={profileButtonRef}
                    onClick={() => setProfileOpen(!profileOpen)}
                    aria-expanded={profileOpen}
                    aria-haspopup="true"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-text-secondary hover:bg-surface-sunken transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center text-gold-400 text-xs font-bold" aria-hidden="true">
                      {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
                    </div>
                    <span className="hidden lg:block text-text-primary font-medium max-w-[120px] truncate">
                      {user.displayName || "Account"}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 text-text-tertiary transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>

                  {profileOpen && (
                    <div ref={profileMenuRef} className="absolute right-0 mt-2 w-52 rounded-xl bg-white shadow-lg border border-border py-1 fade-in" role="menu" aria-label="Account menu">
                      <div className="px-4 py-3 border-b border-border-light">
                        <p className="text-sm font-semibold text-text-primary truncate">{user.displayName}</p>
                        <p className="text-xs text-text-tertiary truncate mt-0.5">{user.email}</p>
                      </div>
                      <button
                        onClick={() => { logout(); setProfileOpen(false); }}
                        role="menuitem"
                        tabIndex={0}
                        className="w-full text-left px-4 py-2.5 text-sm text-danger-600 hover:bg-danger-50 flex items-center gap-2 transition-colors"
                      >
                        <LogOut className="w-4 h-4" aria-hidden="true" /> Sign out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <NavLink href="/exams" icon={<BookOpen className="w-4 h-4" aria-hidden="true" />}>
                  Exams
                </NavLink>
                <Link
                  href="/login"
                  className="ml-2 px-5 py-2 text-sm font-semibold rounded-lg btn-secondary"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="ml-1 px-5 py-2 text-sm font-semibold rounded-lg btn-primary"
                >
                  Start Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2.5 rounded-lg hover:bg-surface-sunken transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5 text-text-primary" aria-hidden="true" /> : <Menu className="w-5 h-5 text-text-primary" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" ref={mobileMenuRef} className="md:hidden border-t border-border bg-white fade-in" role="navigation" aria-label="Mobile navigation">
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
                <div className="pt-2 mt-2 border-t border-border-light">
                  <button
                    onClick={() => { logout(); setMobileOpen(false); }}
                    className="w-full text-left px-3 py-3 text-sm font-medium text-danger-600 hover:bg-danger-50 rounded-lg transition-colors"
                  >
                    Sign out
                  </button>
                </div>
              </>
            ) : (
              <>
                <MobileNavLink href="/exams" onClick={() => setMobileOpen(false)}>
                  Exams
                </MobileNavLink>
                <MobileNavLink href="/login" onClick={() => setMobileOpen(false)}>
                  Sign In
                </MobileNavLink>
                <div className="pt-2">
                  <Link
                    href="/register"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center px-3 py-3 text-sm font-semibold rounded-lg btn-primary"
                  >
                    Start Free
                  </Link>
                </div>
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
      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-text-secondary hover:bg-surface-sunken hover:text-text-primary transition-colors"
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
      className="block px-3 py-3 text-sm font-medium text-text-secondary hover:bg-surface-sunken hover:text-text-primary rounded-lg transition-colors"
    >
      {children}
    </Link>
  );
}
