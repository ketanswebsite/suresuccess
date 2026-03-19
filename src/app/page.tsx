"use client";

import Link from "next/link";
import {
  BookOpen,
  Brain,
  BarChart3,
  Clock,
  ArrowRight,
  Star,
  Trophy,
  Zap,
} from "lucide-react";

const examBodies = [
  { name: "CISI", description: "Chartered Institute for Securities & Investment", exams: "IOC, ICWIM, IAD, CISI L3 & L6" },
  { name: "CII", description: "Chartered Insurance Institute", exams: "R01, R02, R05, AF series" },
];

const features = [
  {
    icon: Brain,
    title: "Smart Learning",
    description: "AI-powered spaced repetition adapts to your strengths and weaknesses, focusing your study time where it matters most.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Question Banks",
    description: "Thousands of practice questions covering every topic, regularly updated to match the latest syllabus.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Detailed insights into your performance by topic, helping you track improvement and identify gaps.",
  },
  {
    icon: Clock,
    title: "Timed Exam Practice",
    description: "Simulate real exam conditions with timed practice sessions to build confidence and improve speed.",
  },
];

const stats = [
  { value: "5,000+", label: "Practice Questions" },
  { value: "92%", label: "Pass Rate" },
  { value: "2,500+", label: "Students" },
  { value: "15+", label: "Exam Modules" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50/30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28">
          <div className="text-center max-w-3xl mx-auto slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" /> AI-Powered Exam Preparation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              Pass Your{" "}
              <span className="gradient-text">Financial Exams</span>{" "}
              First Time
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
              Smart practice questions, adaptive learning, and detailed analytics for
              CISI and CII certification exams. Study smarter, not harder.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-white font-semibold rounded-xl btn-primary text-base"
              >
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/exams"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-slate-700 font-semibold rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors text-base"
              >
                Browse Exams
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center fade-in">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Bodies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Exams We Cover</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive preparation materials for the UK&apos;s leading financial certification bodies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {examBodies.map((body) => (
              <div
                key={body.name}
                className="card-hover bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Trophy className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{body.name}</h3>
                <p className="text-slate-600 text-sm mb-3">{body.description}</p>
                <p className="text-sm text-blue-600 font-medium">{body.exams}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything You Need to Pass</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our platform combines smart technology with expertly crafted content to give you
              the best chance of success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-hover bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by Professionals</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah M.",
                role: "Financial Adviser",
                text: "SureSuccess helped me pass my CISI IOC on the first attempt. The practice questions were spot on.",
              },
              {
                name: "James K.",
                role: "Trainee Wealth Manager",
                text: "The progress tracking feature is brilliant. I could see exactly which topics needed more work.",
              },
              {
                name: "Emily R.",
                role: "Insurance Broker",
                text: "Passed my R01 with flying colours. The timed practice exams really prepared me for the real thing.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="card-hover bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{review.name}</p>
                    <p className="text-xs text-slate-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Exam Prep?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Join thousands of professionals who passed their exams with SureSuccess.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-base shadow-lg"
          >
            Get Started Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
