import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Bot, 
  Rocket, 
  Cloud, 
  Network, 
  Users, 
  Search, 
  Layout, 
  Cpu, 
  TrendingUp 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function AboutUs({ onOpenConsultation }) {
  const [showMoreModal, setShowMoreModal] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  const deliveryStages = [
    {
      num: "01",
      title: "UNDERSTAND",
      desc: "Understand business needs, challenges, and opportunities.",
      icon: Search,
      badge: "Discovery & Audit"
    },
    {
      num: "02",
      title: "DESIGN",
      desc: "Plan the right digital solution, architecture, and user experience.",
      icon: Layout,
      badge: "Architecture & UX"
    },
    {
      num: "03",
      title: "ENGINEER",
      desc: "Build reliable software, AI solutions, cloud systems, and digital products.",
      icon: Cpu,
      badge: "Agile Development"
    },
    {
      num: "04",
      title: "EVOLVE",
      desc: "Support, improve, and scale technology for long-term business growth.",
      icon: TrendingUp,
      badge: "Scale & Continuous CI/CD"
    }
  ];

  const serviceCapabilities = [
    { name: "Software Engineering", icon: Code2 },
    { name: "AI Solutions", icon: Bot },
    { name: "Product Development", icon: Rocket },
    { name: "Cloud & DevOps", icon: Cloud },
    { name: "Telecom Solutions", icon: Network },
    { name: "Consulting & Dedicated Engineering Teams", icon: Users },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FAF9F6] text-[#0B2545] relative overflow-hidden border-b border-[#E2E8F0]">
      
      {/* Subtle Background Lighting & Soft Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#F0FDF4] rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* 1. TOP AREA: Small Label, Large Headline, Supporting Text */}
        <div className="max-w-4xl space-y-5">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-[#15803D] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#166534]">
              WHO WE ARE · ABOUT AGDS
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0B2545] leading-[1.12] tracking-tight"
          >
            Building Technology <br />
            <span className="text-[#15803D]">That Works for Business.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#475569] font-sans leading-relaxed max-w-2xl"
          >
            Anthropic Gen Digital Systems Pvt. Ltd. is a software and digital technology company focused on building intelligent, scalable, and reliable digital solutions for modern businesses.
          </motion.p>
        </div>

        {/* 2. INTERACTIVE SOFTWARE DELIVERY JOURNEY (FROM BUSINESS CHALLENGES TO DIGITAL SOLUTIONS) */}
        <div className="space-y-8 pt-4">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E2E8F0] pb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#15803D]">
                OUR METHODOLOGY & SOFTWARE DELIVERY LIFECYCLE
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B2545] mt-1">
                From Business Challenges to Digital Solutions.
              </h3>
            </div>
            <p className="text-xs text-[#475569] font-sans">
              Hover over each stage to explore our engineering process.
            </p>
          </div>

          {/* 4 Connected Stages (Horizontal Flow on Desktop, Vertical on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Desktop Connecting Process Bar */}
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-[#E2E8F0] -translate-y-6 z-0"></div>

            {deliveryStages.map((stage, idx) => {
              const StageIcon = stage.icon;
              const isCurrent = activeStage === idx;

              return (
                <motion.div
                  key={stage.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  onMouseEnter={() => setActiveStage(idx)}
                  className={`relative z-10 p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full bg-white ${
                    isCurrent 
                      ? 'border-[#15803D] ring-2 ring-[#15803D]/20 shadow-luxury scale-[1.02]' 
                      : 'border-[#E2E8F0] hover:border-[#15803D]/40 shadow-sm'
                  }`}
                >
                  <div className="space-y-4">
                    
                    {/* Header Row: Stage Number + Icon */}
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md transition-colors ${
                        isCurrent ? 'bg-[#15803D] text-white' : 'bg-[#F0FDF4] text-[#166534]'
                      }`}>
                        STAGE {stage.num}
                      </span>
                      <div className={`p-2.5 rounded-xl transition-all ${
                        isCurrent ? 'bg-[#15803D] text-white shadow-sm' : 'bg-[#FAF9F6] text-[#0B2545]'
                      }`}>
                        <StageIcon className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    {/* Stage Title & Description */}
                    <div className="space-y-2">
                      <h4 className="font-heading font-extrabold text-lg text-[#0B2545]">
                        {stage.title}
                      </h4>
                      <p className="text-xs text-[#475569] leading-relaxed font-sans">
                        {stage.desc}
                      </p>
                    </div>

                  </div>

                  {/* Bottom Capability Tag */}
                  <div className="pt-4 mt-4 border-t border-[#E2E8F0]/60 text-[10px] font-mono font-semibold text-[#15803D] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span>
                    <span>{stage.badge}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* 3 & 4. REAL-WORLD SOFTWARE ENGINEERING VISUAL + VERIFIED COMPANY STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6">
          
          {/* Left 6 Columns: High-Quality Realistic Software Engineering Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 border border-[#E2E8F0] bg-white p-3 rounded-2xl shadow-luxury overflow-hidden">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0B2545]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Senior Software Engineers Collaborating at Anthropic Gen Digital Systems" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-[#0B2545]/20 to-transparent"></div>
                
                {/* Floating Authentic Location Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border-l-4 border-[#15803D] shadow-md">
                  <p className="text-xs font-heading font-extrabold text-[#0B2545] uppercase tracking-wider">
                    Bengaluru Engineering Center
                  </p>
                  <p className="text-[11px] text-[#475569] font-sans mt-0.5">
                    Senior software engineering squads executing digital transformation and platform delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle Decorative Accent Border */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#15803D]/25 rounded-2xl z-0 hidden sm:block pointer-events-none"></div>
          </motion.div>

          {/* Right 6 Columns: Verified Company Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#15803D]">
                OUR COMPANY STORY
              </span>
              <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B2545] leading-tight">
                Technology With Purpose. <br />
                <span className="text-[#15803D]">Engineering With Precision.</span>
              </h3>
            </div>

            <div className="space-y-4 text-[#475569] text-sm sm:text-base leading-relaxed font-sans">
              <p>
                <strong className="text-[#0B2545] font-semibold">{COMPANY_INFO.name}</strong> is a software and digital technology company focused on building intelligent, scalable, and reliable digital solutions for modern businesses.
              </p>
              <p>
                We combine software engineering, cloud technologies, data, automation, and thoughtful user experience design to help organizations solve complex business challenges and create sustainable digital growth.
              </p>
              <p>
                Our approach is centered on understanding the business first, engineering the right technology, and delivering solutions that create lasting value.
              </p>
            </div>

            {/* CTA Button to Trigger Executive Briefing Modal */}
            <div className="pt-2">
              <button
                onClick={() => setShowMoreModal(true)}
                className="inline-flex items-center gap-2.5 bg-[#0B2545] hover:bg-[#15803D] text-white px-7 py-3.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-md group"
              >
                <span>Read Governance Details</span>
                <ArrowRight className="w-4 h-4 text-[#BBF7D0] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* 5. SERVICES CONNECTION: 6 Refined Capability Markers */}
        <div className="pt-8 border-t border-[#E2E8F0] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#15803D]">
              CORE CORE CAPABILITIES & TECHNOLOGY SPECTRUM
            </span>
            <span className="text-xs text-[#475569] font-sans">
              Enterprise Engineering Services
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceCapabilities.map((cap, idx) => {
              const CapIcon = cap.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#15803D]/40 transition-all duration-300 flex items-center gap-3.5 shadow-xs group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F0FDF4] text-[#15803D] flex items-center justify-center flex-shrink-0 group-hover:bg-[#15803D] group-hover:text-white transition-colors">
                    <CapIcon className="w-5 h-5" />
                  </div>
                  <span className="font-heading font-extrabold text-sm text-[#0B2545] group-hover:text-[#15803D] transition-colors leading-snug">
                    {cap.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 6. PREMIUM BUSINESS STATEMENT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-12 sm:py-16 px-6 rounded-3xl bg-gradient-to-b from-[#F0FDF4] to-white border border-[#BBF7D0] shadow-sm max-w-4xl mx-auto space-y-2"
        >
          <p className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B2545] leading-tight">
            We turn complex business challenges
          </p>
          <p className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#15803D]">
            into reliable digital solutions.
          </p>
        </motion.div>

      </div>

      {/* Read More Modal */}
      {showMoreModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2545]/80 backdrop-blur-md animate-fadeIn font-sans">
          <div className="bg-white border border-[#BBF7D0] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto rounded-2xl">
            <button 
              onClick={() => setShowMoreModal(false)}
              className="absolute top-4 right-4 text-[#475569] hover:text-[#0B2545] font-mono text-xs uppercase px-2.5 py-1 border border-[#E2E8F0] rounded"
            >
              Close [✕]
            </button>

            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#15803D]">
              SPECIFICATIONS & GOVERNANCE
            </span>
            <h3 className="text-2xl font-heading font-extrabold text-[#0B2545] mt-2 mb-4">
              Deep Technical Commitment & Engineering Philosophy
            </h3>

            <div className="space-y-4 text-sm text-[#475569] leading-relaxed font-sans border-t border-[#E2E8F0] pt-4">
              <p>
                At Anthropic Gen Digital Systems Pvt. Ltd., our core philosophy is built around structural reliability and absolute transparency. We operate as an extension of our enterprise clients' executive technology leadership.
              </p>
              <h4 className="font-heading font-bold text-[#0B2545] text-base pt-2">Our Key Operating Principles</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Technical Debt Compromise:</strong> We build maintainable software with full documentation and automated unit tests.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D] flex-shrink-0 mt-0.5" />
                  <span><strong>Intellectual Property Security:</strong> 100% IP ownership resides directly with our clients from day one.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D] flex-shrink-0 mt-0.5" />
                  <span><strong>Global Delivery Standards:</strong> Adhering strictly to international DevSecOps and ISO quality frameworks.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex justify-end gap-3 font-mono">
              <button 
                onClick={() => setShowMoreModal(false)}
                className="px-5 py-2 text-xs font-bold text-[#475569] hover:text-[#0B2545] uppercase"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  setShowMoreModal(false);
                  onOpenConsultation();
                }}
                className="px-6 py-2.5 bg-[#0B2545] hover:bg-[#15803D] text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-[#BBF7D0]"
              >
                Schedule Executive Briefing
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
