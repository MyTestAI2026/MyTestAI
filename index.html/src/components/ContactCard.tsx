/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Phone, MessageCircle, ExternalLink } from "lucide-react";
import { ContactChannel } from "../types";

export default function ContactCard({ channel }: { channel: ContactChannel; key?: any }) {
  const isWhatsApp = channel.type === "whatsapp";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 md:p-8 ${
        isWhatsApp
          ? "border-emerald-100 bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/20 shadow-xs hover:border-emerald-200 hover:shadow-md"
          : "border-sky-100 bg-gradient-to-br from-sky-50/70 via-white to-sky-50/20 shadow-xs hover:border-sky-200 hover:shadow-md"
      }`}
    >
      {/* Decorative Blur Background Graphic */}
      <div
        className={`absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl opacity-40 transition-all ${
          isWhatsApp ? "bg-emerald-200" : "bg-sky-200"
        }`}
      />

      <div className="relative flex flex-col justify-between h-full space-y-6">
        <div>
          {/* Header row with Icon Badge */}
          <div className="flex items-center justify-between">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                isWhatsApp
                  ? "bg-emerald-500 text-white"
                  : "bg-sky-500 text-white"
              }`}
            >
              {isWhatsApp ? (
                <MessageCircle className="h-6 w-6 stroke-[2.25]" />
              ) : (
                <Phone className="h-5 w-5 stroke-[2.25]" />
              )}
            </div>
          </div>

          {/* Core Text Section */}
          <div className="mt-5 space-y-2">
            <h3 className="font-sans text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              {channel.title}
            </h3>
            <p className="font-sans text-sm font-medium text-slate-500">
              {channel.subtitle}
            </p>
          </div>

          <p className="mt-4 font-sans text-sm text-slate-600 leading-relaxed">
            {channel.description}
          </p>
        </div>

        {/* Primary Interactive Direct Link Touch Target (Min 48px) */}
        <motion.a
          id={`btn-link-${channel.id}`}
          href={channel.link}
          whileTap={{ scale: 0.98 }}
          className={`flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 font-sans text-base font-bold shadow-xs transition-all ${
            isWhatsApp
              ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-650/10 hover:shadow-lg"
              : "bg-sky-600 text-white hover:bg-sky-700 shadow-sky-600/10 hover:shadow-lg"
          }`}
        >
          <span>{channel.ctaText}</span>
          <ExternalLink className="h-4 w-4 stroke-[2.5]" />
        </motion.a>
      </div>
    </motion.div>
  );
}
