import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Layers, Cpu, ShieldCheck, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function AboutUs({ onOpenConsultation }) {
  const [showMoreModal, setShowMoreModal] = useState(false);

  const philosophies = [
    {
      title: "ENGINEERING EXCELLENCE",
      desc: "Building reliable, scalable, and maintainable software systems using modern frameworks and architectural patterns.",
      icon: Cpu,
    },
    {
      title: "BUSINESS-FIRST THINKING",
      desc: "Technology designed around real enterprise business challenges, operational bottlenecks, and financial growth objectives.",
      icon: Compass,
    },
    {
      title: "LONG-TERM PARTNERSHIP",
      desc: "Supporting enterprise clients beyond initial development through continuous improvement, technical support, and platform evolution.",
      icon: ShieldCheck,
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FAF9F5] relative overflow-hidden border-b border-[#E2E8F0]">
      
      {/* Subtle Warm Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* 1 & 2. TOP AREA: Eyebrow + Large Editorial Headline */}
        <div className="max-w-4xl space-y-4">
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
            Technology With Purpose. <br />
            <span className="font-editorial-accent text-[#15803D] font-normal italic">
              Engineering With Precision.
            </span>
          </motion.h2>
        </div>

        {/* 3. MAIN VISUAL CONCEPT: 3D Architectural Digital Systems Composition */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-10 lg:p-12 shadow-luxury overflow-hidden"
        >
          {/* Subtle Sage Green Background Radial Ambient Studio Lighting */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial-gradient-green opacity-20 pointer-events-none blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F0FDF4] pointer-events-none blur-2xl opacity-60"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left 7 Columns: Layered 3D Digital System Architecture Visual */}
            <div className="lg:col-span-7 relative flex items-center justify-center py-6 min-h-[320px]">
              
              {/* Fine Engineering Blueprint Grid Canvas */}
              <div className="absolute inset-0 rounded-2xl border border-[#E2E8F0]/80 bg-[#FAFAF7]/80 p-4 overflow-hidden flex items-center justify-center">
                
                {/* SVG Connecting Engineering Telemetry Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 350">
                  <defs>
                    <linearGradient id="sageLine" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#15803D" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0B2545" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  <line x1="50" y1="50" x2="550" y2="50" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50" y1="175" x2="550" y2="175" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50" y1="300" x2="550" y2="300" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* Connecting Telemetry Vectors */}
                  <path d="M 120 175 C 220 80, 380 270, 480 175" fill="none" stroke="url(#sageLine)" strokeWidth="2" strokeDasharray="6 6" />
                  <circle cx="120" cy="175" r="5" fill="#15803D" />
                  <circle cx="300" cy="175" r="7" fill="#0B2545" />
                  <circle cx="480" cy="175" r="5" fill="#15803D" />
                </svg>

                {/* Layered Glass & Metallic Architectural Panels */}
                <div className="relative w-full max-w-lg aspect-[16/9] flex items-center justify-center">
                  
                  {/* Layer 1: Backing Metallic Panel */}
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="absolute inset-4 rounded-2xl bg-gradient-to-br from-[#0B2545] to-[#1E293B] border border-[#0B2545] shadow-2xl p-6 text-white flex flex-col justify-between opacity-95"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#BBF7D0] uppercase tracking-widest">
                        ENTERPRISE CORE · DIGITAL SYSTEM ARCHITECTURE
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#15803D]"></span>
                    </div>

                    <div className="space-y-1 my-2">
                      <p className="text-xs font-mono text-slate-300 uppercase tracking-wider">SYSTEM STABILITY</p>
                      <p className="font-heading font-extrabold text-xl text-white">High-Throughput Distributed Engine</p>
                    </div>

                    <div className="flex items-center gap-4 text-[10px] font-mono text-slate-300 border-t border-slate-700/60 pt-3">
                      <span>Telemetry: 99.99%</span>
                      <span>•</span>
                      <span>Latency: &lt; 15ms</span>
                      <span>•</span>
                      <span className="text-[#BBF7D0]">Zero Debt</span>
                    </div>
                  </motion.div>

                  {/* Layer 2: Front Frosted Glass Panel with Forest Green Accent */}
                  <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-4 -right-2 sm:right-4 w-64 sm:w-72 bg-white/90 backdrop-blur-md border border-[#BBF7D0] p-4 rounded-xl shadow-luxury space-y-2 z-20"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-[#F0FDF4] text-[#15803D] flex items-center justify-center">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-[#0B2545] font-heading">HUMAN THINKING × TECH</span>
                    </div>
                    <p className="text-[11px] text-[#475569] leading-snug font-sans">
                      Architectural cohesion connecting strategic intent to production software execution.
                    </p>
                  </motion.div>

                </div>

              </div>

            </div>

            {/* Right 5 Columns: 4. Company Positioning Text */}
            <div className="lg:col-span-5 space-y-5">
              
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#15803D] font-mono">
                ORGANIZATIONAL POSITIONING
              </h3>

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

              {/* Executive Briefing CTA */}
              <div className="pt-2">
                <button
                  onClick={() => setShowMoreModal(true)}
                  className="inline-flex items-center gap-2.5 bg-[#0B2545] hover:bg-[#15803D] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md group"
                >
                  <span>Explore Governance Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#BBF7D0] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </motion.div>

        {/* 5. THREE PHILOSOPHY STATEMENTS IN A REFINED EDITORIAL HORIZONTAL LAYOUT */}
        <div className="space-y-6 pt-4">
          <div className="border-b border-[#E2E8F0] pb-4 flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#15803D]">
              CORE PHILOSOPHY & OPERATING PRINCIPLES
            </span>
            <span className="text-xs text-[#475569] font-sans italic">Enterprise Discipline</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((item, idx) => {
              const IconComp = item.icon;

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="space-y-3 p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#15803D]/40 transition-all duration-300 shadow-sm hover:shadow-luxury group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-xl bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0] flex items-center justify-center group-hover:bg-[#15803D] group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-4 h-4" />
                    </div>

                    <h3 className="font-heading font-extrabold text-base text-[#0B2545] tracking-tight group-hover:text-[#15803D] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#475569] leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8F0]/60 text-[10px] font-mono text-[#15803D] uppercase tracking-wider font-semibold">
                    Strategic Capability
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 6. LARGE CLOSING BRAND STATEMENT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-12 sm:py-16 px-6 rounded-3xl bg-gradient-to-b from-[#F0FDF4]/80 to-white border border-[#BBF7D0] shadow-sm max-w-4xl mx-auto space-y-3"
        >
          <p className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0B2545] leading-tight">
            We believe technology should do more than function.
          </p>
          <p className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#15803D] italic">
            It should create possibility.
          </p>
        </motion.div>

      </div>

      {/* Read More Modal */}
      {showMoreModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2545]/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white border border-[#BBF7D0] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto rounded-3xl">
            <button 
              onClick={() => setShowMoreModal(false)}
              className="absolute top-4 right-4 text-[#475569] hover:text-[#0B2545] font-mono text-sm uppercase px-2 py-1 border border-[#E2E8F0] rounded-md"
            >
              Close [✕]
            </button>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#15803D]">COMPANY OVERVIEW</span>
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

            <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex justify-end gap-3">
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
