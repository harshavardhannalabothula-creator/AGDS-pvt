import React, { useState } from 'react';
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
  Layers,
  Cpu,
  CheckCircle2
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
  'custom-software': 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20',
  'web-apps': 'bg-sky-600 text-white shadow-md shadow-sky-500/20',
  'mobile-apps': 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20',
  'cloud-devops': 'bg-[#0B2545] text-white shadow-md border border-[#0284C7]/40',
  'ai-automation': 'bg-violet-600 text-white shadow-md shadow-violet-500/20',
  'data-analytics': 'bg-orange-600 text-white shadow-md shadow-orange-500/20',
  'cybersecurity-qa': 'bg-teal-600 text-white shadow-md shadow-teal-500/20',
  'it-consulting': 'bg-amber-600 text-white shadow-md shadow-amber-500/20',
};

export default function Services({ onSelectService }) {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);

  const activeService = SERVICES.find(s => s.id === activeServiceId) || SERVICES[0];
  const ActiveIcon = serviceIcons[activeService.id] || Code2;

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAFCFF] border-b border-[#D0E2F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#0284C7]/20">
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

        {/* 1. INTERACTIVE SERVICE TABS SELECTOR */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mb-8 bg-white p-2 rounded-2xl border border-[#D0E2F7] shadow-sm">
          {SERVICES.map((s) => {
            const Icon = serviceIcons[s.id] || Code2;
            const isActive = s.id === activeServiceId;

            return (
              <button
                key={s.id}
                onClick={() => setActiveServiceId(s.id)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 text-center relative group ${
                  isActive 
                    ? 'bg-[#0B2545] text-white shadow-md' 
                    : 'bg-transparent text-[#475569] hover:bg-[#EFF6FF] hover:text-[#0B2545]'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-[#0284C7] text-white' : 'bg-[#EFF6FF] text-[#0284C7]'
                  }`}>
                    {s.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#93C5FD]' : 'text-[#0284C7]'}`} />
                </div>
                <span className="text-xs font-heading font-bold leading-snug line-clamp-1">
                  {s.title.split(' ')[0]} {s.title.split(' ')[1] || ''}
                </span>
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#0284C7] rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* 2. DYNAMIC INTERACTIVE SHOWCASE STAGE */}
        <div className="bg-white rounded-3xl border border-[#D0E2F7] p-6 sm:p-8 lg:p-10 shadow-luxury mb-16 relative overflow-hidden">
          {/* Subtle Stage Background Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-radial-gradient-blue opacity-25 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            
            {/* Left Showcase Column (Overview & Business Impact) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl ${serviceBadgeColors[activeService.id]}`}>
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0284C7]">
                    PRACTICE AREA {activeService.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2545]">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-[#334155] leading-relaxed font-sans">
                {activeService.longDesc}
              </p>

              {/* Business Outcome Impact Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0B2545] via-[#06182E] to-[#0B2545] text-white border border-[#0284C7]/30 shadow-md">
                <div className="flex items-center gap-2 text-[#93C5FD] text-xs font-mono font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4 text-[#0284C7]" />
                  KEY BUSINESS OUTCOME & ROI
                </div>
                <p className="text-sm font-medium text-slate-200 leading-snug">
                  "{activeService.outcomes}"
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onSelectService(activeService)}
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#0284C7] transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <span>Explore Practice Details</span>
                  <ArrowRight className="w-4 h-4 text-[#93C5FD] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Showcase Column (Features & Tech Stack) */}
            <div className="lg:col-span-5 bg-[#FAFCFF] rounded-2xl p-6 border border-[#D0E2F7] space-y-6">
              
              {/* Capabilities List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                  Core Practice Capabilities
                </h4>
                <ul className="space-y-2.5 text-xs text-[#1E293B] font-sans">
                  {activeService.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-white p-2.5 rounded-lg border border-[#E2E8F0] shadow-2xs">
                      <Check className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Matrix */}
              <div className="pt-4 border-t border-[#D0E2F7]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#0284C7]" />
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] font-medium bg-white text-[#0B2545] px-3 py-1.5 rounded-lg border border-[#CBD5E1] shadow-2xs hover:border-[#0284C7] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 3. CLEAN 8-CARD COMPACT GRID BELOW FOR EASY EXPLORATION */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-heading font-extrabold text-[#0B2545]">
              All Practice Areas & Services
            </h3>
            <span className="text-xs text-[#64748B] font-medium">
              Click any card to select practice area
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const IconComponent = serviceIcons[service.id] || Code2;
              const isCurrent = service.id === activeServiceId;
              
              return (
                <div 
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`cursor-pointer group flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 shadow-sm ${
                    isCurrent 
                      ? 'bg-[#EFF6FF] border-[#0284C7] ring-2 ring-[#0284C7]/20 shadow-md' 
                      : 'bg-white border-[#D0E2F7] hover:border-[#0284C7] hover:bg-[#FAFCFF] hover:shadow-luxury'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#0284C7] bg-white px-2.5 py-1 rounded-md border border-[#D0E2F7]">
                        SERVICE {service.number}
                      </span>
                      <div className={`p-2 rounded-xl ${serviceBadgeColors[service.id]}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title & Short Description */}
                    <div>
                      <h4 className="font-heading font-bold text-base text-[#0B2545] group-hover:text-[#0284C7] transition-colors leading-snug mb-1.5">
                        {service.title}
                      </h4>
                      <p className="text-xs text-[#64748B] leading-relaxed font-sans line-clamp-3">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Tech Badges Preview */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E2E8F0]">
                      {service.techStack.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[10px] font-medium bg-[#F1F5F9] text-[#334155] px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                      {service.techStack.length > 3 && (
                        <span className="text-[10px] font-medium text-[#0284C7] px-1 py-0.5">
                          +{service.techStack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0B2545] group-hover:text-[#0284C7] transition-colors">
                      {isCurrent ? 'Currently Viewing' : 'Select Practice'}
                    </span>
                    <ArrowRight className={`w-4 h-4 text-[#0284C7] transition-transform ${isCurrent ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
