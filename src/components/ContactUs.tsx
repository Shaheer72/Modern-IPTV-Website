"use client";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons

export default function ContactUs() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20" id="contact">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/15 via-fuchsia-500/10 to-emerald-500/15 p-10 ring-1 ring-white/10">
        <div className="absolute -inset-12 -z-10 bg-[radial-gradient(ellipse_at_top,_#6366f1_0%,_transparent_60%)] opacity-30" />
        <h3 className="text-center text-3xl font-semibold tracking-tight text-white">
          Contact Us
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          Feel free to keep in touch with us!
        </p>

        <div className="mt-6 space-y-4 text-slate-300">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-indigo-500" />
            <span>
              Email:{" "}
              <a href="mailto:skyiptv.321@gmail.com" className="text-white">
                skyiptv.321@gmail.com
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-indigo-500" />
            <span>
              Phone:{" "}
              <a href="tel:+19296526799" className="text-white">
                +1 (929) 652-6799
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-indigo-500" />
            <span>Available in: USA, UAE, UK, Canada & India</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <a
            href="mailto:skyiptv.321@gmail.com"
            className="rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400"
          >
            Email Us
          </a>
          <a
            href="https://wa.me/+19296526799?text=Hello%20Sky%20IPTV,%20I%20want%20IPTV%20services%20please."
            target="_blank"
            className="rounded-md px-5 py-3 text-sm font-semibold text-slate-300 ring-1 ring-inset ring-slate-700 hover:text-white hover:ring-slate-500"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
