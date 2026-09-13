import React from 'react';
import { TestimonialsColumn } from './ui/testimonials-columns-1';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Anthropic Gen Digital Systems brought extraordinary clarity, technical precision, and architectural discipline to our cloud platform migration. They transformed our engineering velocity.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    name: "Vikramaditya Sharma",
    role: "Chief Technology Officer — Apex Global",
  },
  {
    text: "Working with AGDS was a seamless experience. Their business-first thinking ensured our logistics dashboard increased fleet delivery efficiency by 3.2x.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    name: "Elena Rostova",
    role: "VP of Digital Transformation — Vanguard Freight",
  },
  {
    text: "The AGDS team possesses rare depth in enterprise AI integration and quality engineering. They built our telemetry system with 100% HIPAA compliance.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    name: "Dr. Marcus Chen",
    role: "Head of Medical Systems — Nexus Health",
  },
  {
    text: "Implementing AGDS custom microservices was smooth and quick. The scalable backend interface made multi-region deployment effortless.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    name: "Briana Patton",
    role: "Operations Manager — Aero Dynamics",
  },
  {
    text: "Its robust AI process features and automated CI/CD deployment pipelines transformed our workflow, reducing infrastructure spend by 45%.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    name: "Zainab Hussain",
    role: "Project Director — Omni Retail",
  },
  {
    text: "The smooth multi-cloud migration exceeded all expectations. It streamlined core processes and improved overall system reliability.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    name: "Aliza Khan",
    role: "Principal Architect — Global Tech Pods",
  },
  {
    text: "Our business analytics improved dramatically with real-time Snowflake pipelines and automated BI executive visibility.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    name: "Farhan Siddiqui",
    role: "Marketing Director — FinTech Core",
  },
  {
    text: "They delivered a digital solution that exceeded expectations, understanding our regulatory compliance and zero-downtime cutover.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80",
    name: "Sana Sheikh",
    role: "VP Engineering — Enterprise Cloud",
  },
  {
    text: "Using AGDS headless commerce architecture, our platform loading speed hit sub-second rates with 99.99% availability.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    name: "Hassan Ali",
    role: "Head of Infrastructure — Cloud Logistics",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-[#FAFCFF] border-b border-[#D0E2F7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[580px] mx-auto text-center space-y-3.5 mb-14"
        >
          <div className="inline-flex items-center gap-2 border border-[#0284C7]/30 bg-[#EFF6FF] px-4 py-1.5 rounded-full text-xs font-bold text-[#0284C7] uppercase tracking-widest">
            TESTIMONIALS & FEEDBACK
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#0B2545] leading-tight tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed font-sans">
            See how Anthropic Gen Digital Systems empowers global business leaders.
          </p>
        </motion.div>

        {/* Animated 3-Column Infinite Marquee Stream (Medium Proportions) */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[660px] lg:max-h-[680px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </div>

      </div>
    </section>
  );
}
