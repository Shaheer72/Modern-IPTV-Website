"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is IPTV and how does it work?",
    a: "IPTV is digital television streamed over the internet, offering live channels and VOD services.",
  },
  {
    q: "Do I need a smart TV for IPTV?",
    a: "No, you can use IPTV on smart TVs, streaming devices, computers, or smartphones with the right app.",
  },
  {
    q: "Can I watch live sports on IPTV?",
    a: "Yes, Our IPTV services offer live sports channels and many more",
  },
  {
    q: "How many devices can I use with one subscription?",
    a: "You can connect 5 different devices at a same time with one subscription including Netflix and Amazon Prime as well.",
  },
  {
    q: "Can I get Refferal Bonus?",
    a: "Yes, you can get 1 year free IPTV for every successful refferal.",
  },
  {
    q: "Do I need special equipment or Box for IPTV?",
    a: "No, you just need to download our app on your device and start streaming.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">FAQs</h2>
      <div className="mt-10 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        {faqs.map(({ q, a }, idx) => (
          <Accordion key={idx} question={q} answer={a} />
        ))}
      </div>
    </section>
  );
}

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-white/5"
      >
        <span className="font-medium text-white">{question}</span>
        <span className="text-slate-400">{open ? "–" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-slate-300">{answer}</div>
      )}
      
    </div>
  );
} 