"use client";

import { AuthProvider } from "@/lib/auth-context";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
    </AuthProvider>
  );
}
