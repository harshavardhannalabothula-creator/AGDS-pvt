import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function CTASection({ onOpenConsultation }) {
  return (
    <section className="bg-[#0B2545] text-white py-20 lg:py-28 relative overflow-hidden border-b border-[#0284C7]/30">
      
      {/* Background Subtle Blue Radial & Architectural System Grid */}
      <div className="absolute inset-0 bg-dark-green-grid opacity-30 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-radial-gradient-blue pointer-events-none blur-3xl opacity-40"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-radial-gradient-blue pointer-events-none blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0284C7]/20 border border-[#0284C7]/40 text-[#93C5FD] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#93C5FD]"></span>
            <span>NEXT-GEN ENTERPRISE PARTNERSHIP</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight tracking-tight">
            Have a Digital Challenge? <br />
            <span className="font-editorial-accent text-[#93C5FD] font-normal">Let's Build the Solution.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#EFF6FF] font-sans max-w-2xl mx-auto leading-relaxed">
            Whether you're building a new digital product, modernizing an existing system, or exploring the next stage of your technology journey, our team is ready to help.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-[#EFF6FF] text-[#0B2545] px-8 py-4 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-luxury group"
            >
              <span>START A CONVERSATION</span>
              <ArrowRight className="w-4 h-4 text-[#0B2545] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#0284C7]/20 text-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors border border-white"
            >
              <span>EXPLORE OUR SERVICES</span>
            </a>
          </div>

          {/* Direct Line Shortcut */}
          <div className="pt-8 border-t border-[#0284C7]/30 flex flex-wrap justify-center items-center gap-8 text-xs text-[#EFF6FF] font-mono">
            <span>Direct Advisory: <a href={`tel:${COMPANY_INFO.phone}`} className="text-[#93C5FD] hover:underline font-bold">{COMPANY_INFO.phone}</a></span>
            <span>•</span>
            <span>Response Guarantee: &lt; 24 Hours</span>
          </div>

        </div>
      </div>
    </section>
  );
}
