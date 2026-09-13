import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cpu, Compass, ShieldCheck, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function AboutUs({ onOpenConsultation }) {
  const [showMoreModal, setShowMoreModal] = useState(false);

  const principles = [
    {
      title: "Engineering Excellence",
      desc: "Building reliable, scalable, and maintainable software systems using modern frameworks and architectural patterns.",
      tag: "ARCHITECTURAL STANDARDS",
      icon: Cpu
    },
    {
      title: "Business-First Thinking",
      desc: "Technology designed around real enterprise business challenges, operational bottlenecks, and financial growth objectives.",
      tag: "STRATEGIC ALIGNMENT",
      icon: Compass
    },
    {
      title: "Long-Term Partnership",
      desc: "Supporting enterprise clients beyond initial development through continuous improvement, technical support, and platform evolution.",
      tag: "CONTINUOUS VALUE",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FAFBF8] text-[#102C4C] relative overflow-hidden border-b border-[#E2E8F0]">
      
      {/* Subtle Background Lighting & Soft Lighting Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"></div>
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#F0FDF4] rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* 1. TOP HEADER AREA: Eyebrow + Main Headline */}
        <div className="max-w-4xl space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-[#176B52] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#176B52] font-mono">
              WHO WE ARE · ABOUT AGDS
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#102C4C] leading-[1.12] tracking-tight"
          >
            Technology With Purpose. <br />
            <span className="text-[#176B52]">Engineering With Precision.</span>
          </motion.h2>
        </div>

        {/* 2. MIDDLE TWO-COLUMN HERO LAYOUT: Team Visual + Verified About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Side — Company Visual (Realistic Software Engineering Team) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="bg-white border border-[#D0E2F7]/60 p-3 rounded-2xl shadow-luxury relative overflow-hidden">
              
              {/* Floating Badge (AGDS ENTERPRISE TECH) */}
              <div className="absolute top-6 right-6 z-20 bg-[#102C4C] text-white px-4 py-2.5 rounded-xl shadow-lg border border-[#168ACB]/30 font-mono">
                <p className="text-sm font-extrabold tracking-wider text-white">AGDS</p>
                <p className="text-[10px] text-[#168ACB] font-bold uppercase tracking-widest mt-0.5">ENTERPRISE TECH</p>
              </div>

              {/* Realistic Team Photo Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#102C4C]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Senior Software Engineers Collaborating at Anthropic Gen Digital Systems" 
                  className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102C4C]/85 via-transparent to-transparent"></div>
              </div>

              {/* Refined Caption Below Image */}
              <div className="pt-4 px-2 pb-1 flex items-center justify-between">
                <div>
                  <p className="text-xs font-heading font-extrabold text-[#102C4C] uppercase tracking-wider">
                    BENGALURU ENGINEERING CENTER
                  </p>
                  <p className="text-[11px] text-[#475569] font-sans mt-0.5">
                    Senior engineering teams building digital systems.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-[#176B52] bg-[#F0FDF4] px-2.5 py-1 rounded-md border border-[#BBF7D0]">
                  <Check className="w-3 h-3" />
                  <span>Production Ready</span>
                </div>
              </div>

            </div>

            {/* Decorative Background Frame */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#176B52]/20 rounded-2xl z-0 hidden sm:block pointer-events-none"></div>
          </motion.div>

          {/* Right Side — Verified Company Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4 text-[#475569] text-sm sm:text-base leading-relaxed font-sans">
              <p className="text-[#102C4C] font-medium text-base sm:text-lg leading-relaxed">
                <strong className="font-extrabold text-[#102C4C]">{COMPANY_INFO.name}</strong> is a software and digital technology company focused on building intelligent, scalable, and reliable digital solutions for modern businesses.
              </p>
              <p>
                We combine software engineering, cloud technologies, data, automation, and thoughtful user experience design to help organizations solve complex business challenges and create sustainable digital growth.
              </p>
              <p>
                Our approach is centered on understanding the business first, engineering the right technology, and delivering solutions that create lasting value.
              </p>
            </div>

            {/* Executive Action CTA */}
            <div className="pt-3">
              <button
                onClick={() => setShowMoreModal(true)}
                className="inline-flex items-center gap-2.5 bg-[#102C4C] hover:bg-[#176B52] text-white px-7 py-3.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-md group"
              >
                <span>Read Governance Details</span>
                <ArrowRight className="w-4 h-4 text-[#93C5FD] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* 3. BOTTOM AREA: Three Refined Horizontal Content Rows (Company Principles) */}
        <div className="pt-10 border-t border-[#E2E8F0] space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#176B52]">
              CORE OPERATING PRINCIPLES
            </span>
            <span className="text-xs text-[#475569] font-sans">Enterprise Software Discipline</span>
          </div>

          <div className="space-y-4">
            {principles.map((item, idx) => {
              const PrincipleIcon = item.icon;

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.12 }}
                  className="bg-white border border-[#E2E8F0] hover:border-[#176B52]/40 hover:bg-[#FAFBF8] p-6 rounded-xl transition-all duration-300 shadow-xs group flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex items-start md:items-center gap-4">
                    {/* Small Elegant Accent Marker */}
                    <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] text-[#176B52] border border-[#BBF7D0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#176B52] group-hover:text-white transition-colors duration-300">
                      <PrincipleIcon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1 max-w-2xl">
                      <div className="flex items-center gap-3">
                        <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#102C4C] group-hover:text-[#176B52] transition-colors">
                          {item.title}
                        </h3>
                        <span className="hidden sm:inline-block text-[10px] font-mono font-bold text-[#168ACB] bg-[#EFF6FF] px-2 py-0.5 rounded border border-[#168ACB]/20">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#176B52] flex-shrink-0 self-end md:self-center">
                    <Check className="w-4 h-4" />
                    <span>Verified Approach</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Read More Modal */}
      {showMoreModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102C4C]/80 backdrop-blur-md animate-fadeIn font-sans">
          <div className="bg-white border border-[#BBF7D0] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto rounded-2xl">
            <button 
              onClick={() => setShowMoreModal(false)}
              className="absolute top-4 right-4 text-[#475569] hover:text-[#102C4C] font-mono text-xs uppercase px-2.5 py-1 border border-[#E2E8F0] rounded"
            >
              Close [✕]
            </button>

            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#176B52]">
              SPECIFICATIONS & GOVERNANCE
            </span>
            <h3 className="text-2xl font-heading font-extrabold text-[#102C4C] mt-2 mb-4">
              Deep Technical Commitment & Engineering Philosophy
            </h3>

            <div className="space-y-4 text-sm text-[#475569] leading-relaxed font-sans border-t border-[#E2E8F0] pt-4">
              <p>
                At Anthropic Gen Digital Systems Pvt. Ltd., our core philosophy is built around structural reliability and absolute transparency. We operate as an extension of our enterprise clients' executive technology leadership.
              </p>
              <h4 className="font-heading font-bold text-[#102C4C] text-base pt-2">Our Key Operating Principles</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#176B52] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Technical Debt Compromise:</strong> We build maintainable software with full documentation and automated unit tests.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#176B52] flex-shrink-0 mt-0.5" />
                  <span><strong>Intellectual Property Security:</strong> 100% IP ownership resides directly with our clients from day one.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#176B52] flex-shrink-0 mt-0.5" />
                  <span><strong>Global Delivery Standards:</strong> Adhering strictly to international DevSecOps and ISO quality frameworks.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex justify-end gap-3 font-mono">
              <button 
                onClick={() => setShowMoreModal(false)}
                className="px-5 py-2 text-xs font-bold text-[#475569] hover:text-[#102C4C] uppercase"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  setShowMoreModal(false);
                  onOpenConsultation();
                }}
                className="px-6 py-2.5 bg-[#102C4C] hover:bg-[#176B52] text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-[#BBF7D0]"
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
