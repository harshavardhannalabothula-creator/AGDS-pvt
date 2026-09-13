import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Cpu, 
  Code2,
  Rocket, 
  Briefcase, 
  Cloud, 
  Users, 
  MessageSquare 
} from 'lucide-react';
import Logo from './Logo';

const HERO_ORBIT_SERVICES = [
  {
    id: 'ai-software',
    title: 'Software & AI',
    subtitle: 'Enterprise-grade intelligence',
    icon: Code2,
    pos: 'top-[-2%] left-1/2 -translate-x-1/2',
    activeBadge: 'bg-[#0284C7] text-white shadow-sm shadow-sky-500/30',
    inactiveBadge: 'bg-[#0284C7]/90 text-white shadow-sm',
    activeCard: 'border-[#0284C7] ring-4 ring-[#0284C7]/20 shadow-luxury scale-105 z-40',
  },
  {
    id: 'product-dev',
    title: 'Product Development',
    subtitle: 'Scalable digital products',
    icon: Rocket,
    pos: 'top-[22%] -right-[4%] sm:-right-[6%]',
    activeBadge: 'bg-[#0284C7] text-white shadow-sm shadow-sky-500/30',
    inactiveBadge: 'bg-[#0284C7]/90 text-white shadow-sm',
    activeCard: 'border-[#0284C7] ring-4 ring-[#0284C7]/20 shadow-luxury scale-105 z-40',
  },
  {
    id: 'on-demand',
    title: 'Engineering Pods',
    subtitle: 'On-demand expertise',
    icon: Briefcase,
    pos: 'bottom-[22%] -right-[4%] sm:-right-[6%]',
    activeBadge: 'bg-[#0284C7] text-white shadow-sm shadow-sky-500/30',
    inactiveBadge: 'bg-[#0284C7]/90 text-white shadow-sm',
    activeCard: 'border-[#0284C7] ring-4 ring-[#0284C7]/20 shadow-luxury scale-105 z-40',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    subtitle: 'Build. Deploy. Scale.',
    icon: Cloud,
    pos: 'bottom-[-2%] left-1/2 -translate-x-1/2',
    activeBadge: 'bg-[#0284C7] text-white shadow-sm shadow-sky-500/30',
    inactiveBadge: 'bg-[#0284C7]/90 text-white shadow-sm',
    activeCard: 'border-[#0284C7] ring-4 ring-[#0284C7]/20 shadow-luxury scale-105 z-40',
  },
  {
    id: 'dedicated-teams',
    title: 'Dedicated Teams',
    subtitle: 'Your extended engineering squad',
    icon: Users,
    pos: 'bottom-[22%] -left-[4%] sm:-left-[6%]',
    activeBadge: 'bg-[#0284C7] text-white shadow-sm shadow-sky-500/30',
    inactiveBadge: 'bg-[#0284C7]/90 text-white shadow-sm',
    activeCard: 'border-[#0284C7] ring-4 ring-[#0284C7]/20 shadow-luxury scale-105 z-40',
  },
  {
    id: 'consulting',
    title: 'Consulting',
    subtitle: 'From strategy to execution',
    icon: MessageSquare,
    pos: 'top-[22%] -left-[4%] sm:-left-[6%]',
    activeBadge: 'bg-[#0284C7] text-white shadow-sm shadow-sky-500/30',
    inactiveBadge: 'bg-[#0284C7]/90 text-white shadow-sm',
    activeCard: 'border-[#0284C7] ring-4 ring-[#0284C7]/20 shadow-luxury scale-105 z-40',
  },
];

export default function Hero({ onOpenConsultation }) {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Smooth continuous auto-advancing highlight around the 6 orbital cards
  useEffect(() => {
    if (!isAutoRotating) return;
    const timer = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % HERO_ORBIT_SERVICES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoRotating]);

  return (
    <section id="hero" className="relative pt-3 sm:pt-4 lg:pt-6 pb-8 lg:pb-10 bg-[#FAFCFF] overflow-hidden border-b border-[#D0E2F7]">
      
      {/* Subtle Background Lighting & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-radial-gradient-blue pointer-events-none blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#EFF6FF] pointer-events-none blur-3xl opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Spacious 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Airy Headline, Copy, Rounded Pill Buttons & Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
            
            {/* Category Mono Tag */}
            <div>
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#0284C7] bg-[#EFF6FF] px-3.5 py-1.5 border border-[#0284C7]/25 rounded-md">
                TAKING NEW ENGAGEMENTS FOR 2026
              </span>
            </div>

            {/* Main Headline (Airy & Un-cramped) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0B2545] leading-[1.15] tracking-tight">
              We build software <br />
              that moves you <br />
              <span className="font-editorial-accent text-[#0284C7] font-extrabold">forward.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#475569] leading-[1.8] font-sans font-normal max-w-lg">
              From strategy and architecture to applied AI, product design and dedicated engineering squads — one senior team, from first sketch to production.
            </p>

            {/* Rounded Pill CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0284C7] hover:bg-[#0B2545] text-white px-8 py-4 rounded-full text-sm font-bold transition-all duration-300 shadow-luxury hover:shadow-blue-glow group"
              >
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#EFF6FF] text-[#0B2545] px-8 py-4 rounded-full text-sm font-bold transition-colors border border-[#D0E2F7] shadow-sm"
              >
                <span>Explore services</span>
                <ArrowRight className="w-4 h-4 text-[#0B2545]" />
              </a>
            </div>

            {/* Clean Corporate Metrics Bar */}
            <div className="pt-5 border-t border-[#D0E2F7] grid grid-cols-3 gap-6 max-w-md">
              <div>
                <p className="font-heading text-2xl lg:text-3xl font-extrabold text-[#0B2545]">100+</p>
                <p className="text-xs text-[#475569] font-medium mt-1">Projects delivered</p>
              </div>
              <div>
                <p className="font-heading text-2xl lg:text-3xl font-extrabold text-[#0B2545]">95%</p>
                <p className="text-xs text-[#475569] font-medium mt-1">Client retention</p>
              </div>
              <div>
                <p className="font-heading text-2xl lg:text-3xl font-extrabold text-[#0B2545]">40+</p>
                <p className="text-xs text-[#475569] font-medium mt-1">Senior engineers</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: ELEGANT 6-CARD CIRCULAR ORBIT PROCESS GRAPHIC */}
          <div 
            className="lg:col-span-6 relative flex items-center justify-center py-6 w-full"
            onMouseEnter={() => setIsAutoRotating(false)}
            onMouseLeave={() => setIsAutoRotating(true)}
          >
            
            {/* Spacious Canvas Container */}
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 sm:p-6 my-4 mx-auto">
              
              {/* Outer Radial Glow */}
              <div className="absolute inset-0 bg-radial-gradient-blue opacity-35 rounded-full blur-3xl pointer-events-none"></div>

              {/* HANDWRITTEN SCRIPT ANNOTATIONS */}
              {/* Top Right Note: "Systems engineered for enterprise scale ↙" */}
              <div className="absolute -top-6 right-0 sm:right-2 text-right font-handwriting text-base sm:text-lg text-[#0284C7] font-semibold italic rotate-[-5deg] pointer-events-none select-none z-40 leading-tight">
                Systems engineered<br />for enterprise scale
                <span className="block text-xl font-normal translate-y-0.5 text-[#0284C7]">↙</span>
              </div>

              {/* Bottom Left Note: "↗ People Process Possibility" */}
              <div className="absolute -bottom-6 left-0 sm:left-2 text-left font-handwriting text-base sm:text-lg text-[#0284C7] font-semibold italic rotate-[3deg] pointer-events-none select-none z-40 flex items-center gap-1.5 leading-tight">
                <span className="text-xl font-normal text-[#0284C7]">↗</span>
                <div>
                  People<br />Process<br />Possibility
                </div>
              </div>

              {/* ROTATING CIRCULAR ORBIT SVG PATH */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none p-6" viewBox="0 0 500 500">
                {/* Main Dashed Orbit Ring */}
                <circle 
                  cx="250" 
                  cy="250" 
                  r="185" 
                  fill="none" 
                  stroke="#0284C7" 
                  strokeWidth="1.5" 
                  strokeDasharray="6 6" 
                  className="opacity-45 animate-spin-slow origin-center"
                />

                {/* Inner Accent Ring */}
                <circle 
                  cx="250" 
                  cy="250" 
                  r="115" 
                  fill="none" 
                  stroke="#D0E2F7" 
                  strokeWidth="1" 
                  className="opacity-60"
                />

                {/* Animated Revolving Dots along Orbit */}
                <g className="animate-spin-slow origin-center" style={{ animationDuration: '25s' }}>
                  <circle cx="250" cy="65" r="4" fill="#0284C7" className="animate-pulse" />
                  <circle cx="435" cy="250" r="4" fill="#0284C7" className="animate-pulse" />
                  <circle cx="250" cy="435" r="4" fill="#0284C7" className="animate-pulse" />
                  <circle cx="65" cy="250" r="4" fill="#0284C7" className="animate-pulse" />
                </g>
              </svg>

              {/* CENTER HUB: Clean Circular Disc with Official AGDS Hexagon Logo */}
              <div className="relative z-20 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white border-2 border-[#D0E2F7] shadow-luxury flex flex-col items-center justify-center p-3 text-center transition-all duration-500 hover:border-[#0284C7] hover:shadow-blue-glow">
                
                {/* Hub Backdrop Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#EFF6FF] to-white opacity-80 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center">
                  {/* Hexagon Logo Mark Only */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mb-1 flex items-center justify-center">
                    <Logo className="w-full h-full" showText={false} />
                  </div>

                  {/* Corporate Typography */}
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

              {/* 6 FLOATING ORBITAL SERVICE CARDS ARRANGED AROUND THE HUB */}
              {HERO_ORBIT_SERVICES.map((item, idx) => {
                const IconComponent = item.icon;
                const isActive = idx === activeServiceIndex;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveServiceIndex(idx);
                      setIsAutoRotating(false);
                    }}
                    className={`absolute ${item.pos} transition-all duration-300 cursor-pointer z-30`}
                  >
                    <div className={`flex flex-col items-center text-center p-2.5 sm:p-3 rounded-2xl transition-all duration-300 border shadow-md backdrop-blur-sm min-w-[140px] max-w-[170px] ${
                      isActive 
                        ? `bg-transparent ${item.activeCard}` 
                        : 'bg-transparent border-[#D0E2F7] hover:border-[#0284C7]/60 opacity-90 hover:opacity-100 hover:scale-102'
                    }`}>
                      
                      {/* Top Centered Icon Badge */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1.5 transition-all duration-300 ${
                        isActive ? item.activeBadge : item.inactiveBadge
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>

                      {/* Title & Subtitle */}
                      <p className="font-heading font-extrabold text-[11px] sm:text-xs text-[#0B2545] leading-snug">
                        {item.title}
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-[#475569] font-medium leading-tight mt-0.5">
                        {item.subtitle}
                      </p>

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
