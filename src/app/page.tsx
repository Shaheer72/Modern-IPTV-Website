'use client'

import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import LiveDemo from "../components/Channels";
import Showcase from "../components/Downloads";
import Pricing from "../components/Pricing";
import Testimonials from "../components/RefferMsg";
import FAQ from "../components/FAQ";
import CTA from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="min-h-svh bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15),_transparent_55%)]">
      <Header />
      <Hero />
      <Features />
      <LiveDemo />
      <Showcase />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
