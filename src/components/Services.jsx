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

const serviceGradients = {
  'custom-software': 'from-indigo-500 to-indigo-600',
  'web-apps': 'from-sky-500 to-sky-600',
  'mobile-apps': 'from-emerald-500 to-emerald-600',
  'cloud-devops': 'from-[#0B2545] to-[#0284C7]',
  'ai-automation': 'from-violet-500 to-violet-600',
  'data-analytics': 'from-orange-500 to-orange-600',
  'cybersecurity-qa': 'from-teal-500 to-teal-600',
  'it-consulting': 'from-amber-500 to-amber-600',
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
    <section id="services" className="py-20 lg:py-28 bg-[#FAFCFF] border-b border-[#D0E2F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
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

        {/* ULTRA-NEAT 8-CARD EXECUTIVE MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = serviceIcons[service.id] || Code2;
            const gradientStyle = serviceGradients[service.id] || 'from-[#0B2545] to-[#0284C7]';
            const badgeStyle = serviceBadgeColors[service.id] || 'bg-[#0284C7] text-white';
            
            return (
              <div 
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group cursor-pointer flex flex-col justify-between h-full bg-white border border-[#D0E2F7] hover:border-[#0284C7] transition-all duration-300 rounded-2xl shadow-sm hover:shadow-luxury overflow-hidden relative"
              >
                {/* Top Colored Gradient Accent Line */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${gradientStyle}`}></div>

                {/* Card Inner Content */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-5">
                  
                  <div className="space-y-4">
                    {/* Top Tag & Glowing Icon Row */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#0284C7] bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-[#0284C7]/20">
                        SERVICE {service.number}
                      </span>
                      <div className={`p-2.5 rounded-xl shadow-sm transition-transform group-hover:scale-110 ${badgeStyle}`}>
                        <IconComponent className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    {/* Title & Short Description */}
                    <div className="space-y-1.5">
                      <h3 className="font-heading font-extrabold text-lg text-[#0B2545] group-hover:text-[#0284C7] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#475569] leading-relaxed font-sans line-clamp-2">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Borderless Capabilities Checklist */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] font-mono block">
                        CORE CAPABILITIES
                      </span>
                      <div className="space-y-1 text-xs font-sans text-[#1E293B]">
                        {service.features.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#1E293B] py-0.5">
                            <Check className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rounded Tech Stack Badges */}
                    <div className="pt-2 border-t border-[#E2E8F0]">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {service.techStack.slice(0, 3).map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="text-[10px] font-semibold bg-[#EFF6FF] text-[#0284C7] px-2.5 py-0.5 rounded-full border border-[#0284C7]/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sleek Circular Hover Arrow CTA Row */}
                  <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B2545] group-hover:text-[#0284C7] transition-colors">
                      Explore Specs
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
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
