import React, { useState, useEffect } from 'react';
import { APPROACH_STEPS } from '../data/content';
import { 
  Compass, 
  PenTool, 
  Code2, 
  ShieldCheck, 
  TrendingUp, 
  Check, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import Logo from './Logo';

const stepIcons = [Compass, PenTool, Code2, ShieldCheck, TrendingUp];

const ORBIT_SUBTITLES = [
  "Understand & define",
  "Plan & design",
  "Build & iterate",
  "Test & deploy",
  "Support & grow"
];

// Generous, non-overlapping position classes for the 5 orbital cards
const ORBIT_CARD_POSITIONS = [
  "top-[10%] right-[0%] sm:right-[4%]",         // 01 Discover & Align (Top Right)
  "top-[46%] -right-[4%] sm:-right-[6%]",        // 02 Design & UX Strategy (Middle Right)
  "bottom-[12%] right-[0%] sm:right-[4%]",       // 03 Agile Development (Bottom Right)
  "bottom-[2%] left-[12%] sm:left-[18%]",        // 04 QA, Security & Launch (Bottom / Left)
  "top-[44%] -left-[4%] sm:-left-[6%]"          // 05 Evolve & Scale (Middle Left)
];

export default function Approach({ onOpenConsultation }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Auto-rotation timer ("rotate avvalii circle gaa")
  useEffect(() => {
    if (!isAutoRotating) return;
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % APPROACH_STEPS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoRotating]);

  const currentStep = APPROACH_STEPS[activeStepIndex];

  return (
    <section id="approach" className="py-20 lg:py-32 bg-[#FAFCFF] border-b border-[#D0E2F7] relative overflow-hidden">
      
      {/* Background Grid & Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-radial-gradient-blue opacity-30 pointer-events-none blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title & Subtitle */}
        <div className="max-w-3xl mb-12 space-y-4">
          
          {/* Category Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border border-[#0284C7]/30 text-[#0B2545] text-xs font-bold uppercase tracking-[0.2em] shadow-sm rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse"></span>
            <span>OUR APPROACH • ENGINEERING LIFECYCLE</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0B2545] leading-[1.2]">
            A Smarter Way to <br />
            <span className="font-editorial-accent text-[#0284C7] font-normal italic">Build Digital Products.</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg text-[#475569] font-sans max-w-2xl leading-relaxed">
            Our structured engineering lifecycle balances rapid momentum with rigorous architectural security.
          </p>
        </div>

        {/* 5 Horizontal Tab Selectors */}
        <div className="mb-12 overflow-x-auto no-scrollbar pb-2">
          <div className="flex sm:grid sm:grid-cols-5 gap-3 min-w-[720px] sm:min-w-0">
            {APPROACH_STEPS.map((stepItem, idx) => {
              const IconComponent = stepIcons[idx] || Compass;
              const isActive = idx === activeStepIndex;

              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveStepIndex(idx);
                    setIsAutoRotating(false);
                  }}
                  className={`px-4 py-3.5 rounded-xl border flex items-center justify-between text-left transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-[#0B2545] text-white border-[#0284C7] shadow-luxury ring-2 ring-[#0284C7]/30 scale-[1.02]' 
                      : 'bg-white text-[#475569] hover:text-[#0B2545] border-[#D0E2F7] hover:border-[#0284C7]/50 hover:bg-[#EFF6FF]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                      isActive ? 'bg-[#0284C7] text-white' : 'bg-[#EFF6FF] text-[#0284C7]'
                    }`}>
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <span className={`block font-mono text-[10px] font-bold ${isActive ? 'text-[#93C5FD]' : 'text-[#0284C7]'}`}>
                        0{idx + 1}
                      </span>
                      <span className="block font-heading font-bold text-xs truncate">
                        {stepItem.shortTitle}
                      </span>
                    </div>
                  </div>

                  {isActive && (
                    <ChevronRight className="w-4 h-4 text-[#93C5FD] flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN BODY: Left Phase Details + Right Airy Non-Overlapping Orbit Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center bg-white border border-[#D0E2F7] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-luxury">
          
          {/* LEFT COLUMN: Phase Details & Key Deliverables */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Phase Indicator */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0284C7] bg-[#EFF6FF] px-3.5 py-1 border border-[#0284C7]/30 rounded-md">
                PHASE 0{activeStepIndex + 1}
              </span>
              <div className="h-0.5 w-12 bg-[#0284C7]/40"></div>
            </div>

            {/* Phase Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#0B2545] leading-tight">
              {currentStep.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans">
              {currentStep.desc}
            </p>

            {/* Key Deliverables Checklist */}
            <div className="pt-4 border-t border-[#D0E2F7] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0B2545] font-mono">
                KEY DELIVERABLES
              </h4>
              <div className="space-y-2.5">
                {currentStep.deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#0F172A] font-semibold">
                    <div className="w-5 h-5 rounded-full bg-[#0284C7] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-3 bg-[#0B2545] hover:bg-[#0284C7] text-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl border border-[#0284C7]/40 hover:border-[#0284C7] transition-all shadow-md group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-[#93C5FD] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: SPACIOUS, NON-OVERLAPPING ROTATING CIRCULAR ORBIT visual */}
          <div 
            className="lg:col-span-6 relative flex items-center justify-center py-8"
            onMouseEnter={() => setIsAutoRotating(false)}
            onMouseLeave={() => setIsAutoRotating(true)}
          >
            
            {/* Wide Canvas Container with Ample Margin */}
            <div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center p-4 sm:p-6 my-6">
              
              {/* Outer Subtle Light Blue Backdrop Glow */}
              <div className="absolute inset-0 bg-radial-gradient-blue opacity-30 rounded-full blur-3xl pointer-events-none"></div>

              {/* HANDWRITTEN ANNOTATIONS — PLACED SAFELY OUTSIDE ORBIT BOUNDARY */}
              {/* Top Right Handwritten Note: "Systems engineered for enterprise scale ↙" */}
              <div className="absolute -top-8 right-0 sm:right-2 text-right font-handwriting text-base sm:text-lg text-[#0284C7] font-semibold italic rotate-[-4deg] pointer-events-none select-none z-40 leading-tight">
                Systems engineered<br />for enterprise scale
                <span className="block text-xl font-normal translate-y-0.5 text-[#0284C7]">↙</span>
              </div>

              {/* Bottom Left Handwritten Note: "↗ People Process Possibility" */}
              <div className="absolute -bottom-8 left-0 sm:left-2 text-left font-handwriting text-base sm:text-lg text-[#0284C7] font-semibold italic rotate-[3deg] pointer-events-none select-none z-40 flex items-center gap-1.5 leading-tight">
                <span className="text-xl font-normal text-[#0284C7]">↗</span>
                <div>
                  People<br />Process<br />Possibility
                </div>
              </div>

              {/* ROTATING CIRCULAR ORBIT PATH (SVG Continuous Rotation) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none p-6" viewBox="0 0 500 500">
                {/* Main Dashed Orbit Ring */}
                <circle 
                  cx="250" 
                  cy="250" 
                  r="190" 
                  fill="none" 
                  stroke="#0284C7" 
                  strokeWidth="1.5" 
                  strokeDasharray="6 6" 
                  className="opacity-40 animate-spin-slow origin-center"
                />

                {/* Inner Accent Ring */}
                <circle 
                  cx="250" 
                  cy="250" 
                  r="120" 
                  fill="none" 
                  stroke="#D0E2F7" 
                  strokeWidth="1" 
                  className="opacity-50"
                />

                {/* Animated Revolving Dots along Orbit */}
                <g className="animate-spin-slow origin-center" style={{ animationDuration: '25s' }}>
                  <circle cx="250" cy="60" r="4" fill="#0284C7" className="animate-pulse" />
                  <circle cx="440" cy="250" r="4" fill="#0284C7" className="animate-pulse" />
                  <circle cx="250" cy="440" r="4" fill="#0284C7" className="animate-pulse" />
                  <circle cx="60" cy="250" r="4" fill="#0284C7" className="animate-pulse" />
                </g>
              </svg>

              {/* CENTER HUB: Clean Circular Disc with AGDS Hexagon Logo */}
              <div className="relative z-20 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white border-2 border-[#D0E2F7] shadow-luxury flex flex-col items-center justify-center p-3 text-center transition-all duration-500 hover:border-[#0284C7] hover:shadow-blue-glow">
                
                {/* Hub Inner Backdrop Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#EFF6FF] to-white opacity-80 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center">
                  {/* Hexagon Logo Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mb-1 flex items-center justify-center">
                    <Logo className="w-full h-full" showText={false} />
                  </div>

                  {/* Brand Typography */}
                  <span className="font-heading font-black text-[11px] sm:text-xs text-[#0B2545] tracking-wider leading-tight uppercase">
                    ANTHROPIC GEN
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-mono text-[#0284C7] font-bold tracking-widest uppercase mt-0.5">
                    DIGITAL SYSTEMS
                  </span>
                </div>

                {/* Active Halo Pulse */}
                <div className="absolute inset-[-6px] rounded-full border border-[#0284C7]/30 pointer-events-none animate-pulse"></div>
              </div>

              {/* 5 FLOATING STEP CARDS WITH CLEAN SPACING & ZERO OVERLAP */}
              {APPROACH_STEPS.map((stepItem, idx) => {
                const IconComponent = stepIcons[idx] || Compass;
                const isActive = idx === activeStepIndex;
                const posClass = ORBIT_CARD_POSITIONS[idx];
                const subtitle = ORBIT_SUBTITLES[idx];

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveStepIndex(idx);
                      setIsAutoRotating(false);
                    }}
                    className={`absolute ${posClass} transition-all duration-300 cursor-pointer z-30`}
                  >
                    <div className={`flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl transition-all duration-300 border shadow-md backdrop-blur-sm max-w-[180px] sm:max-w-[200px] ${
                      isActive 
                        ? 'bg-white border-[#0284C7] ring-4 ring-[#0284C7]/15 shadow-luxury scale-105 z-40' 
                        : 'bg-white/95 hover:bg-white border-[#D0E2F7] hover:border-[#0284C7]/60 opacity-90 hover:opacity-100 hover:scale-102'
                    }`}>
                      
                      {/* Left Icon Badge */}
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive ? 'bg-[#0284C7] text-white shadow-sm' : 'bg-[#EFF6FF] text-[#0284C7]'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>

                      {/* Right Title & Subtitle */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="font-mono text-[9px] font-bold text-[#0284C7]">
                            0{idx + 1}
                          </span>
                          <p className="font-heading font-extrabold text-[11px] sm:text-xs text-[#0B2545] truncate">
                            {stepItem.shortTitle}
                          </p>
                        </div>
                        <p className="text-[9px] sm:text-[10px] text-[#475569] font-medium truncate mt-0.5">
                          {subtitle}
                        </p>
                      </div>

                    </div>
                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
