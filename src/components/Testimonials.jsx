import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/content';
import { Quote, ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';

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
    <section id="testimonials" className="py-20 lg:py-28 bg-white border-b border-[#D0E2F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7]">
            EXECUTIVE FEEDBACK • CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0B2545] leading-tight">
            Trusted Partnerships. <br />
            <span className="font-editorial-accent text-[#0284C7] font-extrabold">Meaningful Results.</span>
          </h2>
        </div>

        {/* Soft Light Blue Editorial Quotation Card */}
        <div className="max-w-4xl mx-auto bg-[#EFF6FF] border border-[#0284C7]/30 p-8 sm:p-12 shadow-luxury relative">
          
          {/* Large Blue Quote Icon */}
          <div className="absolute top-6 left-6 text-[#0284C7]/20 pointer-events-none">
            <Quote className="w-16 h-16" />
          </div>

          <div className="relative z-10 space-y-8">
            
            {/* Quote Body */}
            <p className="text-lg sm:text-2xl font-heading font-medium text-[#0B2545] leading-relaxed italic">
              "{current.quote}"
            </p>

            {/* Metric Banner */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#0284C7]/40 text-[#0B2545] text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-4 h-4 text-[#0284C7]" />
              <span>KEY RESULT: {current.metrics}</span>
            </div>

            {/* Executive Profile Info & Controls */}
            <div className="pt-6 border-t border-[#0284C7]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              
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

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={handlePrev}
                  className="p-3 bg-white hover:bg-[#0B2545] text-[#0B2545] hover:text-white border border-[#D0E2F7] transition-colors shadow-sm"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-[#475569] px-2 font-bold">
                  {currentIndex + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-3 bg-white hover:bg-[#0B2545] text-[#0B2545] hover:text-white border border-[#D0E2F7] transition-colors shadow-sm"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
