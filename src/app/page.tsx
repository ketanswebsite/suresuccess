"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Brain,
  BarChart3,
  Clock,
  ArrowRight,
  Star,
  Trophy,
  Shield,
  CheckCircle2,
} from "lucide-react";

const examBodies = [
  {
    name: "CISI",
    fullName: "Chartered Institute for Securities & Investment",
    exams: "IOC, ICWIM, IAD, L3 & L6 Diplomas",
    badge: "badge-navy",
    accent: "bg-navy-50 border-navy-100",
    icon: "text-navy-600",
  },
  {
    name: "CII",
    fullName: "Chartered Insurance Institute",
    exams: "R01, R02, R05, AF1, AF5 & more",
    badge: "badge-gold",
    accent: "bg-gold-50 border-gold-100",
    icon: "text-gold-600",
  },
];

const features = [
  {
    icon: Brain,
    title: "Adaptive Learning",
    description:
      "Our algorithm identifies your weak areas and surfaces questions that close knowledge gaps — fast.",
  },
  {
    icon: BookOpen,
    title: "Expert Question Banks",
    description:
      "Thousands of questions written by qualified professionals and aligned to the latest syllabuses.",
  },
  {
    icon: BarChart3,
    title: "Performance Insights",
    description:
      "See exactly where you stand by topic and track your readiness over time with detailed analytics.",
  },
  {
    icon: Clock,
    title: "Exam Simulations",
    description:
      "Practise under timed conditions that mirror the real exam — build confidence before exam day.",
  },
];

const stats = [
  { value: "5,000+", label: "Practice Questions" },
  { value: "92%", label: "First-Time Pass Rate" },
  { value: "2,500+", label: "Professionals Trained" },
  { value: "15+", label: "Exam Modules" },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Financial Adviser",
    text: "SureSuccess helped me pass my CISI IOC on the first attempt. The practice questions were remarkably close to the real exam.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Trainee Wealth Manager",
    text: "The progress tracking made all the difference. I could see exactly which topics needed more work and didn't waste time on what I already knew.",
    rating: 5,
  },
  {
    name: "Emily R.",
    role: "Insurance Broker",
    text: "Passed my R01 with flying colours. The timed practice exams meant I felt completely prepared walking into the exam centre.",
    rating: 5,
  },
];

export default function Home() {
  // Scroll-triggered reveal animation
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal, .reveal-stagger");
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} aria-hidden="true" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy-800 rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/4" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="text-center max-w-3xl mx-auto slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800/60 border border-navy-700 text-navy-200 text-sm font-medium mb-8">
              <Shield className="w-4 h-4 text-gold-400" aria-hidden="true" />
              Trusted by 2,500+ UK financial professionals
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Pass your financial exams{" "}
              <span className="text-gold-400">with confidence</span>
            </h1>

            <p className="text-lg sm:text-xl text-navy-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Expertly crafted practice questions and adaptive learning for CISI and CII
              certification exams. Study what matters, skip what you already know.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl btn-accent text-base"
              >
                Start Free Trial <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="/exams"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl bg-navy-800/60 border border-navy-700 text-white hover:bg-navy-800 transition-colors text-base"
              >
                Browse Exams
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto" role="list" aria-label="Platform statistics">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center reveal-stagger" style={{ "--stagger-index": i } as React.CSSProperties} role="listitem">
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">{stat.value}</div>
                <div className="text-sm text-navy-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Bodies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Covering the UK&apos;s leading exam bodies
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Comprehensive preparation materials mapped to the latest syllabuses,
              written and reviewed by qualified professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {examBodies.map((body, i) => (
              <div
                key={body.name}
                className={`card-interactive rounded-2xl p-8 border ${body.accent} reveal-stagger`}
                style={{ "--stagger-index": i } as React.CSSProperties}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-border shadow-sm">
                    <Trophy className={`w-6 h-6 ${body.icon}`} aria-hidden="true" />
                  </div>
                  <div>
                    <span className={`badge ${body.badge}`}>{body.name}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-1">{body.fullName}</h3>
                <p className="text-sm text-text-secondary mb-3">{body.exams}</p>
                <Link
                  href="/exams"
                  className="inline-flex items-center gap-1 text-sm font-medium text-navy-600 hover:text-navy-800 transition-colors"
                >
                  View modules <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-surface-raised">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Built to get you exam-ready
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Every feature exists for one reason — to maximise your chances of
              passing first time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="card p-6 reveal-stagger"
                style={{ "--stagger-index": i } as React.CSSProperties}
              >
                <div className="w-11 h-11 rounded-lg bg-navy-50 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-navy-600" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Hear from those who passed
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((review, i) => (
              <div
                key={review.name}
                className="card p-6 reveal-stagger"
                style={{ "--stagger-index": i } as React.CSSProperties}
              >
                <div className="flex gap-0.5 mb-4" role="img" aria-label={`${review.rating} out of 5 stars`}>
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold-500 fill-gold-500" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-navy-800 flex items-center justify-center text-gold-400 text-xs font-bold" aria-hidden="true">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{review.name}</p>
                    <p className="text-xs text-text-tertiary">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-surface-raised">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Three steps to exam success
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Choose your exam", desc: "Select your CISI or CII module and we'll build a personalised study plan." },
              { step: "02", title: "Practise daily", desc: "Work through adaptive questions that target your weakest topics first." },
              { step: "03", title: "Pass with confidence", desc: "Track your readiness score — when you're consistently above 80%, you're ready." },
            ].map((item, i) => (
              <div key={item.step} className="text-center reveal-stagger" style={{ "--stagger-index": i } as React.CSSProperties}>
                <div className="w-12 h-12 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-gold-600">{item.step}</span>
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 text-center reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your exam date is set. Are you ready?
          </h2>
          <p className="text-navy-300 text-lg mb-10 max-w-xl mx-auto">
            Join thousands of professionals who passed their CISI and CII exams
            first time with SureSuccess.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl btn-accent text-base"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-navy-400">
            {["No credit card required", "Cancel anytime", "Full access for 7 days"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
