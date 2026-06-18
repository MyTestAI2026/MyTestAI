/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FaqItem } from "../types";

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What information should I have ready when calling or messaging?",
    answer: "To help us assist you as fast as possible, please have your inquiry details, client or reservation reference (if applicable), and any specific questions written out. Having screenshots or files ready to share via WhatsApp is also highly recommended!"
  },
  {
    id: "faq-2",
    question: "When is the team available for live calls?",
    answer: "Our direct phone helpline is active Sunday to Friday from 9:00 AM to 6:00 PM (GMT+4). You can send text messages or documents on WhatsApp 24/7, and our duty agent will review and reply back to you first thing when online!"
  },
  {
    id: "faq-3",
    question: "What is the typical response time for WhatsApp messages?",
    answer: "During active business hours, our modern routing system ensures a support agent responds within 5 minutes. Messages sent after hours are answered sequentially the following morning."
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-slate-100 bg-white p-6 md:p-8 shadow-xs">
      <div className="flex items-center gap-2 mb-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
          <HelpCircle className="h-5 w-5" />
        </div>
        <h3 className="font-sans text-lg font-bold text-slate-900">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="border-b border-slate-100 pb-4 last:border-0 last:pb-0"
            >
              <button
                id={`btn-toggle-${faq.id}`}
                onClick={() => toggleFaq(faq.id)}
                className="flex w-full items-center justify-between py-2 text-left font-sans font-semibold text-slate-800 hover:text-indigo-600 transition-colors"
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-4.5 w-4.5 text-slate-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-indigo-500" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.25 }, opacity: { duration: 0.2 } } }}
                    exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.2 }, opacity: { duration: 0.15 } } }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed font-sans pb-1">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
