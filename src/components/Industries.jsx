import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

const defaultIndustryStyle = {
  activeBadge: 'bg-[#0284C7] text-white shadow-sm',
  inactiveBadge: 'bg-transparent text-[#0284C7] border border-[#0284C7]/30',
  numTag: 'text-[#0284C7] bg-transparent border border-[#0284C7]/30',
  cardActiveBorder: 'border-[#0284C7] ring-2 ring-[#0284C7]/30 bg-transparent',
};

const industryColors = {
  banking: defaultIndustryStyle,
  healthcare: defaultIndustryStyle,
  retail: defaultIndustryStyle,
  manufacturing: defaultIndustryStyle,
  education: defaultIndustryStyle,
  logistics: defaultIndustryStyle,
  realestate: defaultIndustryStyle,
  startups: defaultIndustryStyle,
  travel: defaultIndustryStyle,
  energy: defaultIndustryStyle,
  media: defaultIndustryStyle,
  'services-sector': defaultIndustryStyle,
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
            Explore our specialized engineering solutions across 12 key global sectors.
          </p>
        </div>

      </div>

      {/* CONTINUOUS MOVING MARQUEE CONTAINER (CONTAINED BY CONTAINER MARGINS) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
        <div className="relative overflow-hidden space-y-5">
          
          {/* Gradient Fades on Left & Right Margins */}
          <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#FAFCFF] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#FAFCFF] to-transparent z-20 pointer-events-none"></div>

        {/* MARQUEE ROW 1: Right to Left (Moving Left) */}
        <div className="flex overflow-hidden select-none">
          <motion.div 
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
            className="flex gap-4 py-2 px-2"
            style={{ width: 'max-content' }}
          >
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
                  className="w-72 sm:w-80 flex-shrink-0 p-5 transition-all duration-300 border border-[#D0E2F7] hover:border-[#0284C7]/60 rounded-xl bg-transparent shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded border text-[#0284C7] bg-transparent border-[#0284C7]/30">
                      {ind.num}
                    </span>
                    <div className="p-2 rounded-lg bg-transparent text-[#0284C7] border border-[#0284C7]/30">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-heading font-extrabold text-[#0B2545] mb-1 line-clamp-1">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-[#475569] line-clamp-2 leading-relaxed font-sans">
                    {ind.subtitle}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* MARQUEE ROW 2: Left to Right (Moving Right) */}
        <div className="flex overflow-hidden select-none">
          <motion.div 
            animate={{ x: ['-50%', '0%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
            className="flex gap-4 py-2 px-2"
            style={{ width: 'max-content' }}
          >
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
                  className="w-72 sm:w-80 flex-shrink-0 p-5 transition-all duration-300 border border-[#D0E2F7] hover:border-[#0284C7]/60 rounded-xl bg-transparent shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded border text-[#0284C7] bg-transparent border-[#0284C7]/30">
                      {ind.num}
                    </span>
                    <div className="p-2 rounded-lg bg-transparent text-[#0284C7] border border-[#0284C7]/30">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-heading font-extrabold text-[#0B2545] mb-1 line-clamp-1">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-[#475569] line-clamp-2 leading-relaxed font-sans">
                    {ind.subtitle}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
        </div>
      </div>

    </section>
  );
}

