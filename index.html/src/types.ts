/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ContactChannel {
  id: string;
  type: "whatsapp" | "phone";
  title: string;
  subtitle: string;
  value: string;
  link: string;
  description: string;
  ctaText: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarColor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
