import React from 'react';
import { WHY_CHOOSE_US } from '../data/content';
import { Target, Layers, ShieldCheck, Eye, Cpu, HeartHandshake } from 'lucide-react';

const icons = [Target, Layers, ShieldCheck, Eye, Cpu, HeartHandshake];

const whyUsBadgeColors = [
  'bg-[#0284C7] text-white shadow-sm shadow-sky-500/30',
  'bg-[#0284C7] text-white shadow-sm shadow-sky-500/30',
  'bg-[#0284C7] text-white shadow-sm shadow-sky-500/30',
  'bg-[#0284C7] text-white shadow-sm shadow-sky-500/30',
  'bg-[#0284C7] text-white shadow-sm shadow-sky-500/30',
  'bg-[#0284C7] text-white shadow-sm shadow-sky-500/30',
];

export default function WhyChooseUs({ onOpenConsultation }) {
  return (
    <section id="why-us" className="py-10 lg:py-14 bg-white border-b border-[#D0E2F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7]">
            STRATEGIC VALUE DRIVERS • WHY CHOOSE US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0B2545] leading-tight">
            Built on Expertise. <br />
            <span className="font-editorial-accent text-[#0284C7] font-normal">Driven by Outcomes.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#475569] font-sans max-w-xl">
            We operate with enterprise discipline, pairing senior software engineering talent with transparent execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 6 Benefit Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => {
              const IconComp = icons[idx] || Target;
              const badgeStyle = whyUsBadgeColors[idx % whyUsBadgeColors.length];
              
              return (
                <div 
                  key={idx}
                  className="bg-transparent border border-[#D0E2F7] p-6 space-y-3 hover:border-[#0284C7] transition-all duration-300 shadow-sm hover:shadow-luxury group rounded-2xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-extrabold text-xs text-[#0284C7] tracking-wider">
                      REASON {item.number}
                    </span>
                    <div className={`p-2.5 rounded-xl transition-transform group-hover:scale-110 ${badgeStyle}`}>
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#0B2545] group-hover:text-[#0284C7] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: High Quality Enterprise Image & Metric Overlay */}
          <div className="lg:col-span-4 relative">
            <div className="border border-[#D0E2F7] bg-white p-2.5 shadow-luxury">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0B2545]">
                <img 
                  src="/images/global_network.jpg" 
                  alt="Global Intelligent Digital Systems Ecosystem" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/20 to-transparent"></div>
                
                {/* Metric Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0B2545]/90 backdrop-blur-md border border-[#0284C7]/40 text-white space-y-2">
                  <span className="text-[10px] font-mono text-[#93C5FD] uppercase tracking-widest">
                    SYSTEM COMMITMENT
                  </span>
                  <p className="font-heading text-lg font-bold">100% Codebase Ownership</p>
                  <p className="text-[11px] text-[#EFF6FF] font-sans leading-tight">
                    Zero vendor lock-in. Full source code, documentation, and cloud environment access delivered to your team.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Blue Line */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#0284C7]/20 z-0 pointer-events-none hidden sm:block"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
