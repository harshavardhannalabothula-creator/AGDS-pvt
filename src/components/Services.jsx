import React from 'react';
import { SERVICES } from '../data/content';
import { ArrowRight, Code2, Layout, Smartphone, Cloud, Bot, BarChart3, ShieldCheck, Compass, Check } from 'lucide-react';

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
  'custom-software': 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30',
  'web-apps': 'bg-sky-600 text-white shadow-sm shadow-sky-500/30',
  'mobile-apps': 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/30',
  'cloud-devops': 'bg-[#0B2545] text-white shadow-sm border border-[#0284C7]/40',
  'ai-automation': 'bg-violet-600 text-white shadow-sm shadow-violet-500/30',
  'data-analytics': 'bg-orange-600 text-white shadow-sm shadow-orange-500/30',
  'cybersecurity-qa': 'bg-teal-600 text-white shadow-sm shadow-teal-500/30',
  'it-consulting': 'bg-amber-600 text-white shadow-sm shadow-amber-500/30',
};

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-[#D0E2F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              WHAT WE DO • ENTERPRISE SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0B2545] leading-tight">
              From Strategic Vision to <br />
              <span className="font-editorial-accent text-[#0284C7] font-extrabold">Intelligent Business Systems.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#475569] max-w-md leading-relaxed font-sans">
            We provide end-to-end software engineering and technology services designed to help businesses build, modernize, and scale digital products.
          </p>
        </div>

        {/* Services Grid (8 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {SERVICES.map((service) => {
            const IconComponent = serviceIcons[service.id] || Code2;
            const badgeColor = serviceBadgeColors[service.id] || 'bg-[#0284C7] text-white';
            
            return (
              <div 
                key={service.id}
                className="editorial-card group flex flex-col h-full overflow-hidden border border-[#D0E2F7] bg-white hover:bg-[#EFF6FF] hover:border-[#0284C7] transition-all duration-300 shadow-sm hover:shadow-luxury rounded-xl"
              >
                {/* Service Image Preview with Number Tag & Dark Fallback */}
                <div className="relative aspect-[16/10] min-h-[160px] overflow-hidden bg-gradient-to-br from-[#0B2545] via-[#06182E] to-[#0284C7]/40 border-b border-[#D0E2F7]">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 block relative z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/85 via-[#0B2545]/20 to-transparent z-20 pointer-events-none"></div>
                  
                  {/* Number Badge */}
                  <span className="absolute top-3 left-3 z-30 bg-[#0B2545]/90 backdrop-blur-sm text-[#93C5FD] font-heading font-extrabold text-xs px-2.5 py-1 border border-[#0284C7]/40 rounded-md shadow-sm">
                    SERVICE {service.number}
                  </span>

                  {/* Icon Badge */}
                  <div className={`absolute bottom-3 right-3 z-30 p-2 rounded-lg shadow-md transition-transform group-hover:scale-110 ${badgeColor}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <h3 className="font-heading font-bold text-lg text-[#0B2545] group-hover:text-[#0284C7] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed font-sans line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Top Features List */}
                  <ul className="space-y-1.5 pt-2 border-t border-[#D0E2F7] text-[11px] text-[#0F172A] font-sans flex-grow">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-[#0284C7] flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <div className="pt-3">
                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B2545] hover:text-[#0284C7] transition-colors group/btn"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#0284C7] group-hover/btn:translate-x-1.5 transition-transform" />
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
