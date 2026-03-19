"use client";

import { AuthProvider } from "@/lib/auth-context";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </AuthProvider>
  );
}
