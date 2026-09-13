import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Cpu, Compass, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function AboutUs({ onOpenConsultation }) {
  const [showMoreModal, setShowMoreModal] = useState(false);

  const blueprintPrinciples = [
    {
      spec: "SPEC_01 // ARCHITECTURE",
      title: "ENGINEERING EXCELLENCE",
      desc: "Building reliable, scalable, and maintainable software systems using modern frameworks and architectural patterns.",
      icon: Cpu,
    },
    {
      spec: "SPEC_02 // STRATEGY",
      title: "BUSINESS-FIRST THINKING",
      desc: "Technology designed around real enterprise business challenges, operational bottlenecks, and financial growth objectives.",
      icon: Compass,
    },
    {
      spec: "SPEC_03 // CONTINUITY",
      title: "LONG-TERM PARTNERSHIP",
      desc: "Supporting enterprise clients beyond initial development through continuous improvement, technical support, and platform evolution.",
      icon: Shield,
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FAF9F5] text-[#0B2545] relative overflow-hidden border-b border-[#E2E8F0]">
      
      {/* Architectural Grid & Blueprint Registration Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* 1. UNIQUE ABOUT HERO: Wide Editorial Layout + Engineering Blueprint Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Eyebrow + Headline */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-md font-mono text-xs font-bold text-[#166534] tracking-widest uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-[#15803D] animate-pulse"></span>
              <span>WHO WE ARE · ABOUT AGDS</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0B2545] leading-[1.12] tracking-tight"
            >
              Built on Ideas. <br />
              <span className="font-editorial-accent text-[#15803D] font-normal italic">
                Engineered for Impact.
              </span>
            </motion.h2>
          </div>

          {/* Right Side: Architectural Blueprint Visual */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white border border-[#E2E8F0] p-6 sm:p-8 rounded-xl shadow-luxury relative overflow-hidden font-mono"
            >
              {/* Technical Drawing Corner Crosshairs & Labels */}
              <div className="flex items-center justify-between text-[10px] text-[#475569] border-b border-[#E2E8F0] pb-3 mb-6">
                <span>[SYS.ARC-2026]</span>
                <span>ENTERPRISE BLUEPRINT SCHEMATIC</span>
                <span>VERIFIED v4.2</span>
              </div>

              {/* Blueprint Graphic Grid Canvas */}
              <div className="relative aspect-[16/10] bg-[#FAF9F5] border border-[#E2E8F0] rounded-lg p-5 flex flex-col justify-between overflow-hidden">
                
                {/* SVG Animated Architectural Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 300">
                  {/* Grid Lines */}
                  <line x1="25" y1="0" x2="25" y2="300" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="250" y1="0" x2="250" y2="300" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="475" y1="0" x2="475" y2="300" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="150" x2="500" y2="150" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* System Architecture Modules Connections */}
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    d="M 60 75 L 250 75 L 250 225 L 440 225" 
                    fill="none" 
                    stroke="#15803D" 
                    strokeWidth="1.5" 
                  />
                  
                  <circle cx="60" cy="75" r="4" fill="#15803D" />
                  <circle cx="250" cy="75" r="4" fill="#0B2545" />
                  <circle cx="250" cy="225" r="4" fill="#15803D" />
                  <circle cx="440" cy="225" r="4" fill="#0B2545" />
                </svg>

                {/* Layered Geometric Blueprint Blocks */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="bg-white border border-[#15803D]/40 px-3 py-2 rounded shadow-sm">
                    <span className="text-[9px] text-[#15803D] font-bold block">MODULE_01</span>
                    <span className="text-[11px] text-[#0B2545] font-bold">CORE ARCHITECTURE</span>
                  </div>
                  
                  <div className="bg-white border border-[#0B2545]/20 px-3 py-2 rounded shadow-sm">
                    <span className="text-[9px] text-[#475569] font-bold block">TELEMETRY</span>
                    <span className="text-[11px] text-[#0B2545] font-bold">REAL-TIME MONITORING</span>
                  </div>
                </div>

                {/* Center Core Identification Stamp */}
                <div className="relative z-10 self-center bg-[#0B2545] text-white p-3.5 rounded-md border border-[#15803D] shadow-md max-w-xs text-center my-2">
                  <p className="text-[9px] text-[#BBF7D0] uppercase tracking-widest font-bold">
                    AGDS / DIGITAL SYSTEMS
                  </p>
                  <p className="text-xs font-extrabold tracking-wider mt-0.5 text-white">
                    ENGINEERED WITH PURPOSE
                  </p>
                </div>

                <div className="relative z-10 flex justify-between items-end">
                  <div className="bg-white border border-[#0B2545]/20 px-3 py-2 rounded shadow-sm">
                    <span className="text-[9px] text-[#475569] font-bold block">SCALE_GOVERNANCE</span>
                    <span className="text-[11px] text-[#0B2545] font-bold">ZERO TECH DEBT</span>
                  </div>

                  <div className="bg-[#F0FDF4] border border-[#BBF7D0] px-3 py-2 rounded shadow-sm text-right">
                    <span className="text-[9px] text-[#166534] font-bold block">SLA COMMITMENT</span>
                    <span className="text-[11px] text-[#15803D] font-bold">99.99% AVAILABILITY</span>
                  </div>
                </div>

              </div>

              {/* Technical Drawing Spec Footer Bar */}
              <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[10px] text-[#475569]">
                <span>SCALE: 1:1 ENTERPRISE</span>
                <span>DOC REF: AGDS-SPEC-2026</span>
                <span className="text-[#15803D] font-bold">APPROVED</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* 2. COMPANY STORY: Horizontal 2-Column Storytelling Area */}
        <div className="pt-8 border-t border-[#E2E8F0]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Side: Large Editorial Statement */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-3"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#15803D]">
                POSITIONING PHILOSOPHY
              </span>
              <h3 className="text-3xl sm:text-4xl font-editorial-accent text-[#0B2545] font-normal leading-tight italic">
                Technology should solve real problems.
              </h3>
            </motion.div>

            {/* Right Side: 3 Verified Paragraphs of Company Description */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 space-y-4 text-[#475569] text-sm sm:text-base leading-relaxed font-sans"
            >
              <p>
                <strong className="text-[#0B2545] font-semibold">{COMPANY_INFO.name}</strong> is a software and digital technology company focused on building intelligent, scalable, and reliable digital solutions for modern businesses.
              </p>
              <p>
                We combine software engineering, cloud technologies, data, automation, and thoughtful user experience design to help organizations solve complex business challenges and create sustainable digital growth.
              </p>
              <p>
                Our approach is centered on understanding the business first, engineering the right technology, and delivering solutions that create lasting value.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setShowMoreModal(true)}
                  className="inline-flex items-center gap-2.5 bg-[#0B2545] hover:bg-[#15803D] text-white px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md group font-mono"
                >
                  <span>Read Governance Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#BBF7D0] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 3. ENGINEERING PRINCIPLES: 3 Horizontal Blueprint Specification Rows */}
        <div className="space-y-6 pt-4">
          <div className="border-b border-[#E2E8F0] pb-4 flex items-center justify-between font-mono">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#15803D]">
              ENGINEERING PRINCIPLES // TECHNICAL SPECIFICATIONS
            </span>
            <span className="text-xs text-[#475569]">REV 2026.1</span>
          </div>

          <div className="space-y-4">
            {blueprintPrinciples.map((item, idx) => {
              const IconComp = item.icon;

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="bg-white border border-[#E2E8F0] hover:border-[#15803D]/50 p-6 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    
                    {/* Spec Tag */}
                    <div className="md:col-span-3 font-mono">
                      <span className="text-[11px] font-bold text-[#15803D] bg-[#F0FDF4] px-2.5 py-1 rounded border border-[#BBF7D0]">
                        {item.spec}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="md:col-span-8 space-y-1.5">
                      <h4 className="font-heading font-extrabold text-lg text-[#0B2545] group-hover:text-[#15803D] transition-colors tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>

                    {/* Right Blueprint Symbol */}
                    <div className="md:col-span-1 flex justify-end">
                      <div className="w-9 h-9 rounded bg-[#FAFAF7] text-[#0B2545] group-hover:bg-[#15803D] group-hover:text-white border border-[#E2E8F0] flex items-center justify-center transition-colors duration-300">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4. PREMIUM CLOSING STATEMENT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center py-14 sm:py-18 px-6 bg-white border border-[#E2E8F0] rounded-xl shadow-sm overflow-hidden"
        >
          {/* Subtle Blueprint Grid Pattern Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-2">
            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B2545] leading-tight">
              Engineering with purpose.
            </h3>
            <p className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#15803D] italic">
              Building what matters.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Read More Modal */}
      {showMoreModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2545]/80 backdrop-blur-md animate-fadeIn font-sans">
          <div className="bg-white border border-[#E2E8F0] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto rounded-xl">
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
                className="px-6 py-2.5 bg-[#0B2545] hover:bg-[#15803D] text-white text-xs font-bold uppercase tracking-wider rounded border border-[#E2E8F0]"
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
