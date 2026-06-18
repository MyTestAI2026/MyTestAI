/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Users,
  Compass,
  ArrowRight,
  Clock,
  ExternalLink,
  MessageSquare,
  PhoneCall,
  Calendar,
  Sparkles,
  MapPin,
  Share2,
  Check
} from "lucide-react";
import { ContactChannel } from "./types";
import ContactCard from "./components/ContactCard";
import FaqSection from "./components/FaqSection";
import TeamHighlights from "./components/TeamHighlights";

// Contact details specified in the request
const CHANNELS: ContactChannel[] = [
  {
    id: "whatsapp",
    type: "whatsapp",
    title: "WhatsApp Messenger",
    subtitle: "Quick message or voice note",
    value: "+1 (555) 668-0236",
    link: "https://wa.me/+1(555)6680236",
    description: "Start a real-time WhatsApp conversation with our operators. Ideal for sending attachments, quick documents, and text inquiries. Available 24/7 with rapid team responses during shift hours.",
    ctaText: "Open WhatsApp Chat"
  },
  {
    id: "phone",
    type: "phone",
    title: "Direct Voice Call",
    subtitle: "Speak directly with our team",
    value: "+971 58 826 7710",
    link: "tel:+971588267710",
    description: "Dial our dedicated phone helpline instantly. Perfect for urgent matters, immediate schedule coordination, or speaking directly to a senior consultant on duty near our EMEA hub.",
    ctaText: "Initiate Phone Call"
  }
];

export default function App() {
  const [timeStr, setTimeStr] = useState("");
  const [shareCopied, setShareCopied] = useState(false);

  // Simple live clock for user feedback & showing high craftsmanship
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSharePage = () => {
    if (navigator.share) {
      navigator.share({
        title: "Contact Our Team",
        text: "Quick access links to message us on WhatsApp or call our support line directly.",
        url: window.location.href
      }).catch((err) => console.log(err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Decorative background grid and organic colors */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[640px] w-full max-w-7xl opacity-50 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute top-20 left-10 h-80 w-80 rounded-full bg-indigo-200/10 blur-3xl" />
        <div className="absolute top-40 right-10 h-80 w-80 rounded-full bg-emerald-200/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Header Segment with Live Status Bar */}
        <header className="mb-12 text-center">
          <div className="mx-auto mb-8 flex max-w-fit items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-4 py-1.5 shadow-xs backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-sans text-xs font-semibold text-slate-600">
              Support Active
            </span>
            <span className="h-3 w-px bg-slate-200" />
            <div className="flex items-center gap-1 font-mono text-xs font-semibold text-slate-500">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              <span>{timeStr || "09:00 AM"}</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="font-sans text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Get in Touch <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                With Our Team
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-sans text-base text-slate-500 leading-relaxed sm:text-lg">
              We look forward to collaborating with you. Use the direct response buttons below to start messaging or call us instantly on your mobile device.
            </p>
          </motion.div>

          <div className="mt-6 flex justify-center gap-3">
            <button
              id="btn-share-page"
              onClick={handleSharePage}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 font-sans text-sm font-semibold text-slate-650 shadow-xs hover:bg-slate-50 hover:text-slate-800 transition-all cursor-pointer"
            >
              {shareCopied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4" />
                  <span>Share Gateway</span>
                </>
              )}
            </button>
            <a
              id="badge-location"
              href="#faqs"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 font-sans text-sm font-semibold text-slate-650 shadow-xs hover:bg-slate-50 hover:text-slate-800 transition-all"
            >
              <MapPin className="h-4 w-4 text-slate-400" />
              <span>EMEA Operations</span>
            </a>
          </div>
        </header>

        {/* Primary Call to Action Cards Layout */}
        <main className="space-y-16">
          <section className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {CHANNELS.map((channel) => (
              <ContactCard key={channel.id} channel={channel} />
            ))}
          </section>

          {/* Value Highlights Feature Row */}
          <section className="border-t border-slate-200/50 pt-12">
            <TeamHighlights />
          </section>

          {/* FAQ Accordions Section */}
          <section id="faqs" className="border-t border-slate-200/50 pt-12">
            <FaqSection />
          </section>
        </main>

        {/* Beautiful Footer Segment */}
        <footer className="mt-20 border-t border-slate-250/30 pt-8 text-center">
          <p className="font-sans text-xs text-slate-400">
            For emergency consultations outside standard shift hours, please submit a voicemail via the Direct Helpline.
          </p>
          <div className="mt-4 flex items-center justify-center gap-1.5 font-sans text-xs font-semibold text-slate-500">
            <span>© {new Date().getFullYear()} Operations Support Portal.</span>
            <span>•</span>
            <span className="text-indigo-650 hover:underline cursor-pointer">Privacy Statement</span>
            <span>•</span>
            <span className="text-indigo-650 hover:underline cursor-pointer">Terms of Service</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
