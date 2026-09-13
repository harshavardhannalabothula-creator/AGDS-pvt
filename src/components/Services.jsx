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
  'custom-software': 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/20',
  'web-apps': 'bg-sky-600 text-white shadow-sm shadow-sky-500/20',
  'mobile-apps': 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/20',
  'cloud-devops': 'bg-[#0B2545] text-white shadow-sm border border-[#0284C7]/40',
  'ai-automation': 'bg-violet-600 text-white shadow-sm shadow-violet-500/20',
  'data-analytics': 'bg-orange-600 text-white shadow-sm shadow-orange-500/20',
  'cybersecurity-qa': 'bg-teal-600 text-white shadow-sm shadow-teal-500/20',
  'it-consulting': 'bg-amber-600 text-white shadow-sm shadow-amber-500/20',
};

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-16 lg:py-24 bg-[#FAFCFF] border-b border-[#D0E2F7]">
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
            We provide end-to-end software engineering and technology services designed to help enterprises architect, modernize, and scale digital products.
          </p>
        </div>

        {/* ULTRA-NEAT 3-COLUMN SEAMLESS ENTERPRISE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = serviceIcons[service.id] || Code2;
            const badgeStyle = serviceBadgeColors[service.id] || 'bg-[#0284C7] text-white';
            
            return (
              <div 
                key={service.id}
                className="group flex flex-col justify-between h-full p-6 bg-white border border-[#D0E2F7] hover:border-[#0284C7] hover:bg-[#EFF6FF]/40 transition-all duration-300 rounded-2xl shadow-sm hover:shadow-luxury relative"
              >
                <div className="space-y-4">
                  {/* Top Badge & Icon Row */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#0284C7] bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-[#0284C7]/20">
                      SERVICE {service.number}
                    </span>
                    <div className={`p-2.5 rounded-xl shadow-sm ${badgeStyle}`}>
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#0B2545] group-hover:text-[#0284C7] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed font-sans line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Structured Capabilities List */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] font-mono block">
                      CORE CAPABILITIES
                    </span>
                    <div className="space-y-1.5 text-xs font-sans text-[#1E293B]">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-[#FAFCFF] p-2 rounded-lg border border-[#E2E8F0] shadow-2xs">
                          <Check className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
                          <span className="font-medium text-xs truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2 border-t border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <Cpu className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
                      {service.techStack.slice(0, 4).map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="text-[10px] font-medium bg-[#F1F5F9] text-[#334155] px-2 py-0.5 rounded border border-[#CBD5E1]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action CTA Button */}
                <div className="pt-5 mt-4 border-t border-[#E2E8F0]">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full inline-flex items-center justify-between py-2.5 px-4 bg-[#0B2545] text-white hover:bg-[#0284C7] text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm group/btn"
                  >
                    <span>Learn More & Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#93C5FD] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
