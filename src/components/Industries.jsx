import React, { useState } from 'react';
import { INDUSTRIES } from '../data/content';
import { 
  ArrowRight, 
  CheckCircle2, 
  Building, 
  HeartPulse, 
  ShoppingBag, 
  Factory, 
  GraduationCap, 
  Truck, 
  Landmark, 
  Rocket,
  Plane,
  Zap,
  Tv,
  Briefcase,
  Sparkles
} from 'lucide-react';

const industryIcons = {
  banking: Landmark,
  healthcare: HeartPulse,
  retail: ShoppingBag,
  manufacturing: Factory,
  education: GraduationCap,
  logistics: Truck,
  realestate: Building,
  startups: Rocket,
  travel: Plane,
  energy: Zap,
  media: Tv,
  'services-sector': Briefcase,
};

const industryColors = {
  banking: {
    activeBadge: 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/30',
    inactiveBadge: 'bg-emerald-100 text-emerald-800 border border-emerald-300/70',
    numTag: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    cardActiveBorder: 'border-emerald-500 ring-2 ring-emerald-500/30 bg-emerald-50/40',
  },
  healthcare: {
    activeBadge: 'bg-teal-600 text-white shadow-sm shadow-teal-500/30',
    inactiveBadge: 'bg-teal-100 text-teal-800 border border-teal-300/70',
    numTag: 'text-teal-700 bg-teal-50 border-teal-200',
    cardActiveBorder: 'border-teal-500 ring-2 ring-teal-500/30 bg-teal-50/40',
  },
  retail: {
    activeBadge: 'bg-rose-600 text-white shadow-sm shadow-rose-500/30',
    inactiveBadge: 'bg-rose-100 text-rose-800 border border-rose-300/70',
    numTag: 'text-rose-700 bg-rose-50 border-rose-200',
    cardActiveBorder: 'border-rose-500 ring-2 ring-rose-500/30 bg-rose-50/40',
  },
  manufacturing: {
    activeBadge: 'bg-amber-600 text-white shadow-sm shadow-amber-500/30',
    inactiveBadge: 'bg-amber-100 text-amber-900 border border-amber-300/70',
    numTag: 'text-amber-800 bg-amber-50 border-amber-200',
    cardActiveBorder: 'border-amber-500 ring-2 ring-amber-500/30 bg-amber-50/40',
  },
  education: {
    activeBadge: 'bg-violet-600 text-white shadow-sm shadow-violet-500/30',
    inactiveBadge: 'bg-violet-100 text-violet-800 border border-violet-300/70',
    numTag: 'text-violet-700 bg-violet-50 border-violet-200',
    cardActiveBorder: 'border-violet-500 ring-2 ring-violet-500/30 bg-violet-50/40',
  },
  logistics: {
    activeBadge: 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30',
    inactiveBadge: 'bg-indigo-100 text-indigo-800 border border-indigo-300/70',
    numTag: 'text-indigo-700 bg-indigo-50 border-indigo-200',
    cardActiveBorder: 'border-indigo-500 ring-2 ring-indigo-500/30 bg-indigo-50/40',
  },
  realestate: {
    activeBadge: 'bg-sky-600 text-white shadow-sm shadow-sky-500/30',
    inactiveBadge: 'bg-sky-100 text-sky-800 border border-sky-300/70',
    numTag: 'text-sky-700 bg-sky-50 border-sky-200',
    cardActiveBorder: 'border-sky-500 ring-2 ring-sky-500/30 bg-sky-50/40',
  },
  startups: {
    activeBadge: 'bg-orange-600 text-white shadow-sm shadow-orange-500/30',
    inactiveBadge: 'bg-orange-100 text-orange-800 border border-orange-300/70',
    numTag: 'text-orange-700 bg-orange-50 border-orange-200',
    cardActiveBorder: 'border-orange-500 ring-2 ring-orange-500/30 bg-orange-50/40',
  },
  travel: {
    activeBadge: 'bg-cyan-600 text-white shadow-sm shadow-cyan-500/30',
    inactiveBadge: 'bg-cyan-100 text-cyan-800 border border-cyan-300/70',
    numTag: 'text-cyan-700 bg-cyan-50 border-cyan-200',
    cardActiveBorder: 'border-cyan-500 ring-2 ring-cyan-500/30 bg-cyan-50/40',
  },
  energy: {
    activeBadge: 'bg-yellow-500 text-white shadow-sm shadow-yellow-500/30',
    inactiveBadge: 'bg-yellow-100 text-yellow-900 border border-yellow-300/70',
    numTag: 'text-yellow-800 bg-yellow-50 border-yellow-200',
    cardActiveBorder: 'border-yellow-500 ring-2 ring-yellow-500/30 bg-yellow-50/40',
  },
  media: {
    activeBadge: 'bg-fuchsia-600 text-white shadow-sm shadow-fuchsia-500/30',
    inactiveBadge: 'bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-300/70',
    numTag: 'text-fuchsia-700 bg-fuchsia-50 border-fuchsia-200',
    cardActiveBorder: 'border-fuchsia-500 ring-2 ring-fuchsia-500/30 bg-fuchsia-50/40',
  },
  'services-sector': {
    activeBadge: 'bg-blue-600 text-white shadow-sm shadow-blue-500/30',
    inactiveBadge: 'bg-blue-100 text-blue-800 border border-blue-300/70',
    numTag: 'text-blue-700 bg-blue-50 border-blue-200',
    cardActiveBorder: 'border-blue-500 ring-2 ring-blue-500/30 bg-blue-50/40',
  },
};

export default function Industries({ onOpenConsultation }) {
  const [activeIndustryId, setActiveIndustryId] = useState(INDUSTRIES[0].id);
  const activeIndustry = INDUSTRIES.find((ind) => ind.id === activeIndustryId) || INDUSTRIES[0];

  // Split 12 industries into 2 rows for counter-moving continuous marquees
  const row1 = INDUSTRIES.slice(0, 6);
  const row2 = INDUSTRIES.slice(6, 12);

  // Duplicate each array for a seamless 50% translation infinite loop
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];

  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#FAFCFF] border-b border-[#D0E2F7] relative overflow-hidden">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#EFF6FF] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#EFF6FF] rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#0284C7]/20 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0284C7]">
              SECTOR-SPECIFIC DOMAIN EXPERTISE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0B2545] leading-tight">
            Technology Built Around <br />
            <span className="font-editorial-accent text-[#0284C7] font-extrabold">Your Industry.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#475569] font-sans max-w-2xl mx-auto">
            Explore our specialized engineering solutions across 12 key global sectors. Click any card in the marquee to view deep technical capabilities.
          </p>
        </div>

      </div>

      {/* CONTINUOUS MOVING MARQUEE CONTAINER */}
      <div className="relative w-full overflow-hidden mb-16 space-y-5">
        
        {/* Gradient Fades on Left & Right Margins for Seamless Edge Aesthetics */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAFCFF] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAFCFF] to-transparent z-20 pointer-events-none"></div>

        {/* MARQUEE ROW 1: Right to Left (Moving Left) */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee-left flex gap-4 py-2 px-2">
            {marqueeRow1.map((ind, idx) => {
              const IconComp = industryIcons[ind.id] || Building;
              const isActive = ind.id === activeIndustryId;
              const styleConfig = industryColors[ind.id] || {
                activeBadge: 'bg-[#0284C7] text-white',
                inactiveBadge: 'bg-[#EFF6FF] text-[#0284C7]',
                numTag: 'text-[#0284C7] bg-[#EFF6FF] border-[#0284C7]/20',
                cardActiveBorder: 'border-[#0284C7] ring-2 ring-[#0284C7]/30 bg-[#EFF6FF]',
              };

              return (
                <div
                  key={`r1-${ind.id}-${idx}`}
                  onClick={() => setActiveIndustryId(ind.id)}
                  className={`w-72 sm:w-80 flex-shrink-0 cursor-pointer p-5 transition-all duration-300 border rounded-xl ${
                    isActive
                      ? `${styleConfig.cardActiveBorder} shadow-lg scale-[1.02]`
                      : 'bg-transparent border-[#D0E2F7] hover:border-[#0284C7]/60 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${styleConfig.numTag}`}>
                      {ind.num}
                    </span>
                    <div className={`p-2 rounded-lg transition-all duration-300 ${isActive ? styleConfig.activeBadge : styleConfig.inactiveBadge}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-heading font-extrabold text-[#0B2545] mb-1 line-clamp-1">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-[#475569] line-clamp-2 leading-relaxed font-sans">
                    {ind.subtitle}
                  </p>
                  
                  {isActive && (
                    <div className="mt-3 pt-2 border-t border-[#0284C7]/20 flex items-center justify-between text-[11px] font-bold text-[#0284C7]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping"></span>
                        VIEWING DETAILS
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* MARQUEE ROW 2: Left to Right (Moving Right) */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee-right flex gap-4 py-2 px-2">
            {marqueeRow2.map((ind, idx) => {
              const IconComp = industryIcons[ind.id] || Building;
              const isActive = ind.id === activeIndustryId;
              const styleConfig = industryColors[ind.id] || {
                activeBadge: 'bg-[#0284C7] text-white',
                inactiveBadge: 'bg-[#EFF6FF] text-[#0284C7]',
                numTag: 'text-[#0284C7] bg-[#EFF6FF] border-[#0284C7]/20',
                cardActiveBorder: 'border-[#0284C7] ring-2 ring-[#0284C7]/30 bg-[#EFF6FF]',
              };

              return (
                <div
                  key={`r2-${ind.id}-${idx}`}
                  onClick={() => setActiveIndustryId(ind.id)}
                  className={`w-72 sm:w-80 flex-shrink-0 cursor-pointer p-5 transition-all duration-300 border rounded-xl ${
                    isActive
                      ? `${styleConfig.cardActiveBorder} shadow-lg scale-[1.02]`
                      : 'bg-white border-[#D0E2F7] hover:border-[#0284C7]/60 hover:bg-[#F0F7FF] shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${styleConfig.numTag}`}>
                      {ind.num}
                    </span>
                    <div className={`p-2 rounded-lg transition-all duration-300 ${isActive ? styleConfig.activeBadge : styleConfig.inactiveBadge}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-heading font-extrabold text-[#0B2545] mb-1 line-clamp-1">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-[#475569] line-clamp-2 leading-relaxed font-sans">
                    {ind.subtitle}
                  </p>

                  {isActive && (
                    <div className="mt-3 pt-2 border-t border-[#0284C7]/20 flex items-center justify-between text-[11px] font-bold text-[#0284C7]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping"></span>
                        VIEWING DETAILS
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* INTERACTIVE DETAIL PANEL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border border-[#D0E2F7] rounded-xl overflow-hidden shadow-xl">
          
          {/* Top Blue Accent Ribbon */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0B2545] via-[#0284C7] to-[#93C5FD]"></div>

          <div className="p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Image Column */}
              <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-lg border border-[#D0E2F7] bg-[#0B2545] group">
                <img 
                  src={activeIndustry.image} 
                  alt={activeIndustry.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/30 to-transparent"></div>
                
                <div className="absolute top-4 left-4 bg-[#0B2545]/90 backdrop-blur-md text-white text-xs font-mono font-bold px-3 py-1 rounded border border-[#0284C7]/40">
                  SECTOR {activeIndustry.num} / 12
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#93C5FD] font-semibold">
                    ENTERPRISE DIGITAL PLATFORM
                  </span>
                  <p className="text-lg font-heading font-extrabold">{activeIndustry.title}</p>
                </div>
              </div>

              {/* Detail Content Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#EFF6FF] px-3 py-1 rounded-full">
                    <span>{activeIndustry.num}</span>
                    <span>•</span>
                    <span>{activeIndustry.subtitle.split(',')[0]}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2545] leading-tight">
                    {activeIndustry.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans">
                  {activeIndustry.desc}
                </p>

                {/* Highlights Grid */}
                <div className="pt-4 border-t border-[#D0E2F7] space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">
                    Key Engineered Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeIndustry.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-[#FAFCFF] border border-[#D0E2F7] p-2.5 rounded-md">
                        <CheckCircle2 className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-[#0F172A] font-semibold">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-3 bg-[#0B2545] text-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider rounded-lg border border-[#0284C7]/40 hover:bg-[#0284C7] transition-all shadow-md group"
                  >
                    <span>BUILD FOR {activeIndustry.title.split('&')[0].toUpperCase()}</span>
                    <ArrowRight className="w-4 h-4 text-[#93C5FD] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

