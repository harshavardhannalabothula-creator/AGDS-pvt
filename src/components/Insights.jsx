import React from 'react';
import { INSIGHTS } from '../data/content';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export default function Insights({ onSelectInsight }) {
  return (
    <section id="insights" className="py-20 lg:py-28 bg-white border-b border-[#D0E2F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              THOUGHT LEADERSHIP • PERSPECTIVES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0B2545] leading-tight">
              Insights, Strategy & <br />
              <span className="font-editorial-accent text-[#0284C7] font-extrabold">Digital Perspectives.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#475569] max-w-md leading-relaxed font-sans">
            Technical analysis, software architecture strategies, and enterprise digital transformation guides written by AGDS engineers.
          </p>
        </div>

        {/* Insights 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((item) => (
            <div 
              key={item.id}
              className="editorial-card group flex flex-col h-full overflow-hidden border border-[#D0E2F7] bg-[#FAFCFF] hover:bg-[#EFF6FF] transition-all duration-300 shadow-sm"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0B2545]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/70 via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-white text-[#0B2545] font-heading text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-[#0284C7]/30">
                  {item.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex items-center gap-4 text-[11px] text-[#475569] font-mono font-semibold">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#0284C7]" />
                    {item.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#0284C7]" />
                    {item.readTime}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#0B2545] group-hover:text-[#0284C7] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed font-sans flex-grow">
                  {item.excerpt}
                </p>

                <div className="pt-4 border-t border-[#D0E2F7]">
                  <button
                    onClick={() => onSelectInsight(item)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B2545] hover:text-[#0284C7] transition-colors group/btn"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0284C7] group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
