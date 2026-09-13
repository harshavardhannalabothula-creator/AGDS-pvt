import React from 'react';
import { SERVICES } from '../data/content';
import { 
  ArrowRight, 
  Code2, 
  Layout, 
  Smartphone, 
  Cloud, 
  Bot, 
  BarChart3, 
  ShieldCheck, 
  Compass, 
  Check, 
  Sparkles, 
  Cpu, 
  Layers 
} from 'lucide-react';

const serviceIcons = {
  'custom-software': Code2,
  'web-apps': Layout,
  'mobile-apps': Smartphone,
  'cloud-devops': Cloud,
  'ai-automation': Bot,
  'data-analytics': BarChart3,
  'cybersecurity-qa': ShieldCheck,
  'it-consulting': Compass,
};

const serviceBadgeColors = {
  'custom-software': 'bg-indigo-600/90 text-white border border-indigo-400/40 shadow-sm shadow-indigo-500/10',
  'web-apps': 'bg-sky-600/90 text-white border border-sky-400/40 shadow-sm shadow-sky-500/10',
  'mobile-apps': 'bg-emerald-600/90 text-white border border-emerald-400/40 shadow-sm shadow-emerald-500/10',
  'cloud-devops': 'bg-[#0284C7]/90 text-white border border-[#93C5FD]/40 shadow-sm shadow-[#0284C7]/10',
  'ai-automation': 'bg-violet-600/90 text-white border border-violet-400/40 shadow-sm shadow-violet-500/10',
  'data-analytics': 'bg-orange-600/90 text-white border border-orange-400/40 shadow-sm shadow-orange-500/10',
  'cybersecurity-qa': 'bg-teal-600/90 text-white border border-teal-400/40 shadow-sm shadow-teal-500/10',
  'it-consulting': 'bg-amber-600/90 text-white border border-amber-400/40 shadow-sm shadow-amber-500/10',
};

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-14 lg:py-20 bg-[#FAFCFF] border-b border-[#D0E2F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl space-y-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0284C7] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#0284C7]/20">
              <Layers className="w-3 h-3" />
              WHAT WE DO • ENTERPRISE CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#0B2545] leading-tight">
              From Strategic Vision to <br />
              <span className="font-editorial-accent text-[#0284C7] font-extrabold">Intelligent Business Systems.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#475569] max-w-md leading-relaxed font-sans">
            We provide end-to-end software engineering and technology services designed to help enterprises architect, modernize, and scale mission-critical digital systems.
          </p>
        </div>

        {/* ULTRA-COMPACT SLEEK PRACTICE MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {SERVICES.map((service) => {
            const IconComponent = serviceIcons[service.id] || Code2;
            const badgeStyle = serviceBadgeColors[service.id] || 'bg-[#0284C7] text-white';
            
            return (
              <div 
                key={service.id}
                className="group flex flex-col justify-between overflow-hidden bg-white border border-[#D0E2F7] hover:border-[#0284C7] transition-all duration-300 rounded-xl shadow-2xs hover:shadow-md relative"
              >
                {/* 1. EXECUTIVE NAVY HEADER BANNER */}
                <div className="bg-gradient-to-r from-[#0B2545] via-[#06182E] to-[#0B2545] p-3.5 sm:p-4 border-b border-[#0284C7]/30 text-white relative overflow-hidden">
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-radial-gradient-blue opacity-15 rounded-full blur-2xl pointer-events-none"></div>

                  <div className="flex items-start justify-between gap-2.5 relative z-10">
                    <div className="space-y-1">
                      <span className="inline-block text-[10px] font-mono font-bold tracking-widest text-[#93C5FD] bg-[#0284C7]/20 border border-[#0284C7]/40 px-2 py-0.5 rounded">
                        PRACTICE {service.number}
                      </span>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-[#93C5FD] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <div className={`p-2 rounded-lg flex-shrink-0 ${badgeStyle}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-300 leading-snug font-sans pt-1.5 relative z-10 line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>

                {/* 2. CARD CONTENT BODY */}
                <div className="p-3.5 sm:p-4 flex flex-col flex-grow justify-between space-y-3.5">
                  
                  {/* Capabilities List (2-Column Grid) */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] font-mono block">
                      KEY ENTERPRISE CAPABILITIES
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] font-sans text-[#1E293B]">
                      {service.features.slice(0, 4).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 bg-[#FAFCFF] p-1.5 px-2 rounded-md border border-[#E2E8F0]">
                          <Check className="w-3 h-3 text-[#0284C7] flex-shrink-0" />
                          <span className="font-medium truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills & ROI Outcome Tag */}
                  <div className="space-y-2 pt-2.5 border-t border-[#E2E8F0]">
                    {/* Tech Stack */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <Cpu className="w-3 h-3 text-[#0284C7] flex-shrink-0" />
                      {service.techStack.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="text-[10px] font-medium bg-[#F1F5F9] text-[#334155] px-2 py-0.5 rounded border border-[#CBD5E1]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Business ROI Callout Badge */}
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#0B2545] bg-[#EFF6FF] px-2.5 py-1.5 rounded-md border border-[#0284C7]/20">
                      <Sparkles className="w-3 h-3 text-[#0284C7] flex-shrink-0" />
                      <span className="truncate">{service.outcomes}</span>
                    </div>
                  </div>

                  {/* Action CTA Button */}
                  <div className="pt-0.5">
                    <button
                      onClick={() => onSelectService(service)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-[#0B2545] text-white hover:bg-[#0284C7] text-[11px] font-bold uppercase tracking-wider rounded-md transition-all duration-300 shadow-xs group/btn"
                    >
                      <span>Explore Practice Architecture</span>
                      <ArrowRight className="w-3 h-3 text-[#93C5FD] group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
