"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const tiers = [
  {
    name: "1 Year",
    price: "$130",
    tagline: "24/7 Support",
    features: [" Live Channel 10k+", "Amazon Prime & Netflix Inclusive", "HD & 4K Quality", "Up to 3 Devices", "All Indian, Tamil & Telugu Content"],
    cta: "Get Started",
  },
  {
    name: "3 Years",
    price: "$200",
    tagline: "Instant Activation",
    features: [" Live Channel 10k+", "Amazon Prime & Netflix Inclusive", "HD & 4K Quality", "Up to 4 Devices", "All Indian, Tamil & Telugu Content"],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "5 Years",
    price: "$300",
    tagline: " Lifetime Support",
    features: [" Live Channel 10k+", "Amazon Prime & Netflix Inclusive", "HD & 4K Quality", "Up to 5 Devices", "All Indian, Tamil & Telugu Content"],
    cta: "Get Started",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Choose Your Plan</h2>
        <p className="mt-4 text-slate-300">Pay only for what you need. Scale your entertainment when you’re ready.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className={`flex flex-col rounded-2xl border p-6 ring-1 ${
              tier.highlight
                ? "border-indigo-400/30 bg-indigo-500/10 ring-indigo-400/30"
                : "border-white/10 bg-white/5 ring-white/10"
            }`}
          >
            <div className="text-sm text-slate-300">{tier.name}</div>
            <div className="mt-1 text-3xl font-semibold text-white">{tier.price}</div>
            <div className="mt-1 text-sm text-slate-400">{tier.tagline}</div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="https://wa.me/+19296526799?text=Hi%20SKY%20IPTV!%20I%20want%20IPTV%20please."
                target="_blank"
                className={`block rounded-md px-4 py-2 text-center text-sm font-semibold shadow-sm ${
                  tier.highlight
                    ? "bg-indigo-500 text-white hover:bg-indigo-400"
                    : "bg-white/10 text-white hover:bg-white/15"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 