"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { GraduationCap, Mail, Lock, User, Eye, EyeOff, Loader2, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Your password needs to be at least 6 characters long.");
      return;
    }

    setLoading(true);
    try {
      await register(email, password, name);
      router.push("/dashboard");
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (code === "auth/email-already-in-use") {
        setError("An account with this email already exists. Try signing in instead.");
      } else {
        setError("Something went wrong on our end. Please try again in a moment.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-navy-900 flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-7 h-7 text-gold-400" aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-bold text-text-primary">Create your account</h1>
          <p className="text-text-secondary mt-1">Start preparing for your exam today</p>
        </div>

        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div role="alert" aria-live="assertive" className="bg-danger-50 text-danger-600 text-sm px-4 py-3 rounded-lg border border-danger-500/20">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="register-name" className="block text-sm font-medium text-text-primary mb-1.5">
                Full name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" aria-hidden="true" />
                <input
                  id="register-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input pl-10"
                  placeholder="Your full name"
                  required
                  autoComplete="name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="register-email" className="block text-sm font-medium text-text-primary mb-1.5">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" aria-hidden="true" />
                <input
                  id="register-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input pl-10"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="register-password" className="block text-sm font-medium text-text-primary mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" aria-hidden="true" />
                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input pl-10 pr-10"
                  placeholder="At least 6 characters"
                  required
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-secondary transition-colors p-0.5"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" aria-hidden="true" /> : <Eye className="w-4 h-4" aria-hidden="true" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 font-semibold rounded-lg btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
              {loading ? "Creating your account\u2026" : "Create account"}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-border-light space-y-2.5">
            {[
              "7-day free trial with full access",
              "5,000+ practice questions across 15+ modules",
              "Cancel anytime — no commitment",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-success-500 flex-shrink-0" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-text-secondary mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-navy-600 font-semibold hover:text-navy-800 transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
