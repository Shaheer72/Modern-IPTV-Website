"use client";

import { motion } from "framer-motion";
import { Brush, Layers, Sparkles, Zap, Shield, Globe } from "lucide-react";

const features = [
  {
    title: "Crystal-Clear 4K Quality",
    description: "Enjoy live TV, movies, and sports in HD & 4K resolution with smooth, buffer-free streaming.",
    Icon: Brush,
  },
  {
    title: "Massive Channel Lineup",
    description: "Access 10,000+ channels worldwide — sports, news, movies, kids, and premium entertainment.",
    Icon: Layers,
  },
  {
    title: "Smart EPG & Catch-Up",
    description: "Access a smart Electronic Program Guide with 7-day catch-up. Never miss your favorite show again.",
    Icon: Zap,
  },
  {
    title: "Multi-Device Support",
    description: "You can connect 5 different devices at a same time & Works on Smart TVs, Android, iOS, Firestick, MAG, and PCs — watch anywhere, anytime.",
    Icon: Sparkles,
  },
  {
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance so you never miss a moment of entertainment.",
    Icon: Shield,
  },
  {
    title: "Global Access",
    description: "Watch from anywhere in the world with fast, smooth streaming — no matter where you are.",
    Icon: Globe,
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything you need to watch</h2>
        <p className="mt-4 text-slate-300">Powerful IPTV features that give you the best TV experience.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, Icon }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group rounded-xl border border-white/10 bg-white/5 p-5 ring-1 ring-inset ring-white/10 hover:border-white/20"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500/15 ring-1 ring-inset ring-indigo-400/20">
              <Icon className="h-5 w-5 text-indigo-400" />
            </div>
            <div className="text-lg font-semibold text-white">{title}</div>
            <div className="mt-1 text-sm text-slate-300">{description}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 