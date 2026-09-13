import React from 'react';
import { INSIGHTS } from '../data/content';
import { ArrowRight, Calendar, Clock, BookOpen, Check, Sparkles, Cpu, Layers } from 'lucide-react';

export default function Insights({ onSelectInsight }) {
  const featured = INSIGHTS[0];
  const sideInsights = INSIGHTS.slice(1);

  return (
    <section id="insights" className="py-10 lg:py-14 bg-[#FAFCFF] border-b border-[#D0E2F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border border-[#0284C7]/20">
              <BookOpen className="w-3.5 h-3.5" />
              THOUGHT LEADERSHIP • PERSPECTIVES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#0B2545] leading-tight">
              Insights & Strategy
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#475569] max-w-md leading-relaxed font-sans">
            Technical analysis, software architecture strategies, and enterprise digital transformation guides written by AGDS senior engineers.
          </p>
        </div>

        {/* 7:5 SPLIT EXECUTIVE THOUGHT LEADERSHIP HUB */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT 7-COLUMN: FEATURED EXECUTIVE SPOTLIGHT */}
          {featured && (
            <div 
              className="lg:col-span-7 group flex flex-col justify-between overflow-hidden bg-transparent border border-[#D0E2F7] hover:border-[#0284C7] transition-all duration-300 rounded-3xl shadow-sm hover:shadow-luxury relative"
            >
              {/* Top Dark Navy Header Banner */}
              <div className="bg-gradient-to-r from-[#0B2545] via-[#06182E] to-[#0B2545] p-7 sm:p-9 border-b border-[#0284C7]/30 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-radial-gradient-blue opacity-25 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-block text-[11px] font-mono font-bold tracking-widest text-[#93C5FD] bg-[#0284C7]/20 border border-[#0284C7]/40 px-3 py-1 rounded-md">
                      FEATURED BRIEFING • {featured.category.toUpperCase()}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-slate-300 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                        {featured.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
                        {featured.readTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#93C5FD] transition-colors leading-snug">
                    {featured.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {featured.excerpt}
                  </p>
                </div>
              </div>

              {/* Body: Key Architectural Takeaways & CTA */}
              <div className="p-7 sm:p-9 flex flex-col flex-grow justify-between space-y-6">
                
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] font-mono block">
                    KEY ARCHITECTURAL TAKEAWAYS
                  </span>
                  <div className="space-y-2 text-xs font-sans text-[#1E293B]">
                    <div className="flex items-center gap-2.5 bg-transparent p-2.5 rounded-xl border border-[#E2E8F0]">
                      <Check className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                      <span className="font-semibold">Circuit Breaker Resilience & Cascading Failure Mitigation</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-transparent p-2.5 rounded-xl border border-[#E2E8F0]">
                      <Check className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                      <span className="font-semibold">Distributed Read-Heavy Redis Caching Layers</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-transparent p-2.5 rounded-xl border border-[#E2E8F0]">
                      <Check className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                      <span className="font-semibold">Database Sharding & Geographic Read Replicas</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0]">
                  <button
                    onClick={() => onSelectInsight(featured)}
                    className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 bg-[#0B2545] text-white hover:bg-[#0284C7] text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md group/btn"
                  >
                    <span>Read Full Architecture Briefing</span>
                    <ArrowRight className="w-4 h-4 text-[#93C5FD] group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* RIGHT 5-COLUMN: 2 VERTICALLY STACKED BRIEFING CARDS */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {sideInsights.map((item) => (
              <div 
                key={item.id}
                className="group flex flex-col justify-between p-6 sm:p-7 bg-transparent border border-[#D0E2F7] hover:border-[#0284C7] transition-all duration-300 rounded-3xl shadow-sm hover:shadow-luxury relative flex-grow"
              >

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold text-[#0284C7] bg-transparent px-2.5 py-1 rounded-md border border-[#0284C7]/30 uppercase">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2 text-[11px] text-[#475569] font-mono font-semibold">
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
                  </div>

                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#0B2545] group-hover:text-[#0284C7] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>

                {/* Bottom Action CTA */}
                <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <button
                    onClick={() => onSelectInsight(item)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B2545] group-hover:text-[#0284C7] transition-colors group/btn"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0284C7] group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                  <div className="w-7 h-7 rounded-full bg-[#EFF6FF] text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
