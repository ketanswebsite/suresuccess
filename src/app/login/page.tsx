"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { GraduationCap, Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [resetting, setResetting] = useState(false);
  const { login, resetPassword } = useAuth();
  const router = useRouter();

  const clearError = () => {
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResetSent(false);
    setLoading(true);

    try {
      await login(email.trim(), password);
      router.push("/dashboard");
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (code === "auth/invalid-credential") {
        setError("That email and password combination doesn't match our records. Please check and try again.");
      } else if (code === "auth/too-many-requests") {
        setError("Too many sign-in attempts. Please wait a few minutes before trying again.");
      } else {
        setError("Something went wrong on our end. Please try again in a moment.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    if (!email) {
      setError("Enter your email address above, then click 'Forgot password?' again.");
      return;
    }
    setResetting(true);
    try {
      await resetPassword(email.trim());
      setResetSent(true);
      setError("");
    } catch {
      setError("We couldn't send a reset email to that address. Please check it and try again.");
    } finally {
      setResetting(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-navy-900 flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-7 h-7 text-gold-400" aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-bold text-text-primary">Welcome back</h1>
          <p className="text-base text-text-secondary mt-1">Sign in to continue your exam preparation</p>
        </div>

        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div role="alert" aria-live="assertive" className="bg-danger-50 text-danger-700 text-sm px-4 py-3 rounded-lg border border-danger-500/20">
                {error}
              </div>
            )}

            {resetSent && (
              <div role="status" aria-live="polite" className="bg-success-50 text-success-600 text-sm px-4 py-3 rounded-lg border border-success-500/20">
                Password reset email sent — check your inbox and spam folder.
              </div>
            )}

            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-text-primary mb-1.5">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" aria-hidden="true" />
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); clearError(); }}
                  className="input pl-11 pr-3.5"
                  placeholder="you@example.com"
                  required
                  maxLength={254}
                  autoComplete="email"
                  enterKeyHint="next"
                />
              </div>
            </div>

            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-text-primary mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" aria-hidden="true" />
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); clearError(); }}
                  className="input pl-11 pr-12"
                  placeholder="Enter your password"
                  required
                  maxLength={128}
                  autoComplete="current-password"
                  enterKeyHint="done"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-secondary transition-colors p-2 rounded-md"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" aria-hidden="true" /> : <Eye className="w-4 h-4" aria-hidden="true" />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleReset}
                disabled={resetting}
                className="text-sm text-navy-600 hover:text-navy-800 font-medium transition-colors py-1 px-1 -mr-1 rounded disabled:opacity-50"
              >
                {resetting ? "Sending\u2026" : "Forgot password?"}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 font-semibold rounded-lg btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
              {loading ? "Signing in\u2026" : "Sign in"}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-text-secondary mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-navy-600 font-semibold hover:text-navy-800 transition-colors">
            Create one free
          </Link>
        </p>
      </div>
    </div>
  );
}
