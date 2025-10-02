"use client";

import { motion } from "framer-motion";

const referralDetails = [
  {
    description:
      "Refer a friend and get 1 year of free IPTV service. Share the love and enjoy the benefits of free entertainment.",
    benefit: "1 Year Free",
    action: "Refer Now",
    link: "https://wa.me/+19296526799?text=Hello", // Link to the referral program page (update as needed)
  },
  {
    description:
      "Earn exclusive rewards for every successful referral. The more you refer, the more you earn.",
    benefit: "Exclusive Rewards",
    action: "Start Referring",
    link: "https://wa.me/+19296526799?text=Hello", // Link to the referral program page (update as needed)
  },
  {
    description:
      "Unlock special discounts and offers when you refer friends to join the IPTV experience. Don't miss out!",
    benefit: "Special Discounts",
    action: "Get Started",
    link: "https://wa.me/+19296526799?text=Hello", // Link to the referral program page (update as needed)
  },
];

export default function Referral() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 " id="reffers">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-white">Refer & Earn Free IPTV</h2>
        <p className="mt-4 text-slate-300">
          Share the love! Refer your friends and unlock exciting rewards and discounts.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {referralDetails.map((item, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
                        className={`flex flex-col rounded-2xl border p-6 ring-1 ${
              referralDetails
                ?"border-white/10 bg-white/5 ring-white/10":
                "border-indigo-400/30 bg-indigo-500/10 ring-indigo-400/30"
            }`}
          >
            <blockquote className="text-lg  ">{item.description}</blockquote>
            <div className="mt-4 text-xl font-bold text-indigo-400">{item.benefit}</div>
            <a
              href={item.link}
              target="_blank"
              className="text-center mt-6 inline-block px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-400"
            >
              {item.action}
            </a>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
