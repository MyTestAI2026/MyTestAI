/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Users, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function TeamHighlights() {
  const highlights = [
    {
      icon: <Users className="h-5 w-5 text-indigo-650" />,
      title: "Real Professionals",
      description: "Get direct assistance from our accredited local specialists, not automated chat bots.",
      bgColor: "bg-indigo-50"
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-650" />,
      title: "Secure Verification",
      description: "All client transactions, documents, coordinates, and details are encrypted and private.",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Zap className="h-5 w-5 text-amber-650" />,
      title: "Priority Reply Flow",
      description: "Our dedicated lines automatically triage critical issues with instant fallback support.",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-sans text-xs font-semibold text-slate-700">
          <Sparkles className="h-3.5 w-3.5 text-indigo-500 fill-indigo-500/20" />
          Why Connect With Us
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((h, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all duration-300 hover:border-slate-200 hover:bg-white hover:shadow-xs"
          >
            <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${h.bgColor}`}>
              {h.icon}
            </div>
            <h4 className="font-sans text-base font-bold text-slate-900">
              {h.title}
            </h4>
            <p className="mt-2 font-sans text-sm text-slate-500 leading-relaxed">
              {h.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
