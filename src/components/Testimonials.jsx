import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/content';
import { Quote, ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import { TestimonialsColumn } from './ui/testimonials-columns-1';
import { motion } from 'framer-motion';

const extendedTestimonials = [
  {
    text: "Anthropic Gen Digital Systems brought extraordinary clarity, technical precision, and architectural discipline to our cloud migration. They transformed our engineering velocity.",
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

const col1 = extendedTestimonials.slice(0, 3);
const col2 = extendedTestimonials.slice(3, 6);
const col3 = extendedTestimonials.slice(6, 9);

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAFCFF] border-b border-[#D0E2F7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border border-[#0284C7]/20">
            EXECUTIVE FEEDBACK • CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0B2545] leading-tight">
            Trusted Partnerships. <br />
            <span className="font-editorial-accent text-[#0284C7] font-extrabold">Meaningful Results.</span>
          </h2>
        </div>

        {/* Featured Editorial Quotation Banner */}
        <div className="max-w-4xl mx-auto bg-white border border-[#D0E2F7] p-8 sm:p-12 shadow-luxury rounded-3xl relative mb-16">
          <div className="absolute top-6 left-6 text-[#0284C7]/15 pointer-events-none">
            <Quote className="w-16 h-16" />
          </div>

          <div className="relative z-10 space-y-8">
            <p className="text-lg sm:text-2xl font-heading font-medium text-[#0B2545] leading-relaxed italic">
              "{current.quote}"
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#EFF6FF] border border-[#0284C7]/30 text-[#0B2545] text-xs font-bold uppercase tracking-wider rounded-lg">
              <TrendingUp className="w-4 h-4 text-[#0284C7]" />
              <span>KEY RESULT: {current.metrics}</span>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img 
                  src={current.image} 
                  alt={current.author} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#0284C7] shadow-md"
                />
                <div>
                  <h3 className="font-heading font-bold text-[#0B2545] text-base">
                    {current.author}
                  </h3>
                  <p className="text-xs text-[#475569] font-semibold">
                    {current.role} — <span className="text-[#0284C7]">{current.company}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={handlePrev}
                  className="p-3 bg-white hover:bg-[#0B2545] text-[#0B2545] hover:text-white border border-[#D0E2F7] rounded-xl transition-colors shadow-sm"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-[#475569] px-2 font-bold">
                  {currentIndex + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-3 bg-white hover:bg-[#0B2545] text-[#0B2545] hover:text-white border border-[#D0E2F7] rounded-xl transition-colors shadow-sm"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ANIMATED 3-COLUMN INFINITE MARQUEE SHOWCASE */}
        <div className="mt-8 pt-8 border-t border-[#D0E2F7]">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#0284C7] uppercase bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#0284C7]/20">
              CONTINUOUS FEEDBACK STREAM
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B2545]">
              What Enterprise Leaders Say About AGDS
            </h3>
          </div>

          <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[560px] overflow-hidden">
            <TestimonialsColumn testimonials={col1} duration={18} />
            <TestimonialsColumn testimonials={col2} className="hidden md:block" duration={22} />
            <TestimonialsColumn testimonials={col3} className="hidden lg:block" duration={20} />
          </div>
        </div>

      </div>
    </section>
  );
}
