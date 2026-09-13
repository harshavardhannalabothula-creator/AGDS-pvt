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
  'custom-software': 'bg-indigo-600/90 text-white border border-indigo-400/40 shadow-md shadow-indigo-500/10',
  'web-apps': 'bg-sky-600/90 text-white border border-sky-400/40 shadow-md shadow-sky-500/10',
  'mobile-apps': 'bg-emerald-600/90 text-white border border-emerald-400/40 shadow-md shadow-emerald-500/10',
  'cloud-devops': 'bg-[#0284C7]/90 text-white border border-[#93C5FD]/40 shadow-md shadow-[#0284C7]/10',
  'ai-automation': 'bg-violet-600/90 text-white border border-violet-400/40 shadow-md shadow-violet-500/10',
  'data-analytics': 'bg-orange-600/90 text-white border border-orange-400/40 shadow-md shadow-orange-500/10',
  'cybersecurity-qa': 'bg-teal-600/90 text-white border border-teal-400/40 shadow-md shadow-teal-500/10',
  'it-consulting': 'bg-amber-600/90 text-white border border-amber-400/40 shadow-md shadow-amber-500/10',
};

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAFCFF] border-b border-[#D0E2F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border border-[#0284C7]/20">
              <Layers className="w-3.5 h-3.5" />
              WHAT WE DO • ENTERPRISE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0B2545] leading-tight">
              From Strategic Vision to <br />
              <span className="font-editorial-accent text-[#0284C7] font-extrabold">Intelligent Business Systems.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#475569] max-w-md leading-relaxed font-sans">
            We provide end-to-end software engineering and technology services designed to help enterprises architect, modernize, and scale mission-critical digital systems.
          </p>
        </div>

        {/* NEAT & COMPACT 2-COLUMN EXECUTIVE PRACTICE MATRIX */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const IconComponent = serviceIcons[service.id] || Code2;
            const badgeStyle = serviceBadgeColors[service.id] || 'bg-[#0284C7] text-white';
            
            return (
              <div 
                key={service.id}
                className="group flex flex-col justify-between overflow-hidden bg-white border border-[#D0E2F7] hover:border-[#0284C7] transition-all duration-300 rounded-2xl shadow-xs hover:shadow-luxury relative"
              >
                {/* 1. EXECUTIVE NAVY HEADER BANNER */}
                <div className="bg-gradient-to-r from-[#0B2545] via-[#06182E] to-[#0B2545] p-5 sm:p-6 border-b border-[#0284C7]/30 text-white relative overflow-hidden">
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 w-56 h-56 bg-radial-gradient-blue opacity-20 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="flex items-start justify-between gap-3 relative z-10">
                    <div className="space-y-1.5">
                      <span className="inline-block text-[11px] font-mono font-bold tracking-widest text-[#93C5FD] bg-[#0284C7]/20 border border-[#0284C7]/40 px-2.5 py-0.5 rounded-md">
                        PRACTICE {service.number}
                      </span>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-[#93C5FD] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <div className={`p-2.5 rounded-xl flex-shrink-0 ${badgeStyle}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-2.5 relative z-10 line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>

                {/* 2. CARD CONTENT BODY */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-5">
                  
                  {/* Capabilities List (2-Column Grid) */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7] font-mono block">
                      KEY ENTERPRISE CAPABILITIES
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#1E293B]">
                      {service.features.slice(0, 4).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-[#FAFCFF] p-2 sm:p-2.5 rounded-lg border border-[#E2E8F0]">
                          <Check className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0 mt-0.5" />
                          <span className="font-medium text-xs truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills & ROI Outcome Tag */}
                  <div className="space-y-3 pt-4 border-t border-[#E2E8F0]">
                    {/* Tech Stack */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <Cpu className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
                      {service.techStack.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="text-[11px] font-medium bg-[#F1F5F9] text-[#334155] px-2.5 py-1 rounded-md border border-[#CBD5E1]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Business ROI Callout Badge */}
                    <div className="flex items-center gap-2 text-xs font-medium text-[#0B2545] bg-[#EFF6FF] px-3 py-2 rounded-lg border border-[#0284C7]/20">
                      <Sparkles className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
                      <span className="truncate">{service.outcomes}</span>
                    </div>
                  </div>

                  {/* Action CTA Button */}
                  <div className="pt-1">
                    <button
                      onClick={() => onSelectService(service)}
                      className="w-full inline-flex items-center justify-center gap-2.5 py-2.5 px-4 bg-[#0B2545] text-white hover:bg-[#0284C7] text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 shadow-sm group/btn"
                    >
                      <span>Explore Practice Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#93C5FD] group-hover/btn:translate-x-1.5 transition-transform" />
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
