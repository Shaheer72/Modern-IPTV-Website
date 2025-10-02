"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-500/20 ring-1 ring-inset ring-indigo-400/30">
          <Sparkles className="h-5 w-5 text-indigo-400" />
        </div>
        <span className="text-lg font-semibold tracking-tight">SKY IPTV</span>
      </div>

      <nav className="hidden items-center gap-8 md:flex">
        <a className="text-sm text-slate-300 hover:text-white" href="#features">Features</a>
        <a className="text-sm text-slate-300 hover:text-white" href="#live">Channels</a>
        <a className="text-sm text-slate-300 hover:text-white" href="#downloads">Downloads</a>
        <a className="text-sm text-slate-300 hover:text-white" href="#pricing">Pricing</a>
        <a className="text-sm text-slate-300 hover:text-white" href="#reffers">Reffers</a>
        <a className="text-sm text-slate-300 hover:text-white" href="#faq">FAQ</a>
      </nav>

      <div className="flex items-center gap-3">
        <Link
          href="#contact"
          className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
} 