import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  Cloud, 
  Database, 
  Smartphone, 
  Users, 
  Zap, 
  Check 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function AboutUs({ onOpenConsultation }) {
  const [showMoreModal, setShowMoreModal] = useState(false);

  const executivePillars = [
    {
      code: "PILLAR 01",
      title: "Intellectual Engineering Capability",
      desc: "Combining senior software engineering talent, resilient cloud architecture, and data platforms to solve complex business challenges."
    },
    {
      code: "PILLAR 02",
      title: "Agile Production Execution",
      desc: "Accelerating speed-to-market using 2-week sprints, continuous telemetry monitoring, and zero technical debt code standards."
    },
    {
      code: "PILLAR 03",
      title: "Full Codebase & IP Ownership",
      desc: "Ensuring 100% IP retention, SOC-2/ISO compliance readiness, and zero vendor lock-in delivered directly to your enterprise team."
    }
  ];

  const coreDomains = [
    { title: "Custom Software Architecture", icon: Code2 },
    { title: "Applied AI & Automation", icon: Cpu },
    { title: "Cloud Migration & DevOps", icon: Cloud },
    { title: "Mobile & Web Ecosystems", icon: Smartphone },
    { title: "Data Engineering & Analytics", icon: Database },
    { title: "Dedicated Engineering Squads", icon: Users },
  ];

  const corporateMetrics = [
    { stat: "100+", label: "Enterprise Software Systems Delivered" },
    { stat: "99.9%", label: "System Uptime & SLA Guarantee" },
    { stat: "100%", label: "Codebase & IP Ownership Handover" },
    { stat: "24/7", label: "Continuous Cloud & Security Telemetry" }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FAF9F5] text-[#0B2545] relative overflow-hidden border-b border-[#E2E8F0]">
      
      {/* Background Subtle Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#F0FDF4] rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* 1. SECTION HEADER: Eyebrow + Executive Headline + Subtitle */}
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
            Architecting Intelligent Software Systems. <br />
            <span className="text-[#15803D]">Engineered for Enterprise Impact.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#475569] font-sans leading-relaxed max-w-3xl"
          >
            Anthropic Gen Digital Systems Pvt. Ltd. is a software and digital technology company focused on building intelligent, scalable, and reliable digital solutions for modern businesses.
          </motion.p>
        </div>

        {/* 2. THREE EXECUTIVE IMPACT PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {executivePillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-sm hover:shadow-luxury hover:border-[#15803D]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#15803D] bg-[#F0FDF4] px-2.5 py-1 rounded border border-[#BBF7D0] inline-block">
                  {pillar.code}
                </span>
                <h3 className="font-heading font-extrabold text-lg text-[#0B2545] group-hover:text-[#15803D] transition-colors leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] font-mono text-[#15803D] font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>Enterprise Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. SPLIT CORPORATE HUB: Workspace Image + Story & Metric Counter Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">
          
          {/* Left Column: Image with Floating Overlay */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="bg-white border border-[#E2E8F0] p-3 rounded-2xl shadow-luxury">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0B2545]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Bengaluru Engineering Hub at Anthropic Gen Digital Systems" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-[#0B2545]/20 to-transparent"></div>
                
                {/* Metric Callout Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border-l-4 border-[#15803D] shadow-md">
                  <p className="text-xs font-heading font-extrabold text-[#0B2545] uppercase tracking-wider">
                    Bengaluru Engineering Hub
                  </p>
                  <p className="text-[11px] text-[#475569] font-sans mt-0.5">
                    Senior engineering pods executing digital system architecture and platform development.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Background Accent Frame */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#15803D]/20 rounded-2xl z-0 hidden sm:block pointer-events-none"></div>
          </motion.div>

          {/* Right Column: Verified Story Paragraphs + Stat Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#15803D]">
                CORPORATE OVERVIEW
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2545] leading-tight">
                Technology With Purpose. <br />
                <span className="text-[#15803D]">Engineering With Precision.</span>
              </h3>
            </div>

            <div className="space-y-3.5 text-[#475569] text-sm leading-relaxed font-sans">
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

            {/* Corporate Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#E2E8F0]">
              {corporateMetrics.map((m, idx) => (
                <div key={idx} className="bg-white border border-[#E2E8F0] p-3.5 rounded-xl">
                  <p className="font-heading text-xl font-extrabold text-[#15803D]">{m.stat}</p>
                  <p className="text-[11px] text-[#475569] font-medium mt-0.5 leading-tight">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Modal CTA */}
            <div className="pt-2">
              <button
                onClick={() => setShowMoreModal(true)}
                className="inline-flex items-center gap-2.5 bg-[#0B2545] hover:bg-[#15803D] text-white px-6 py-3 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-md group"
              >
                <span>Read Governance Details</span>
                <ArrowRight className="w-4 h-4 text-[#BBF7D0] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </motion.div>

        </div>

        {/* 4. CORE TECHNICAL DOMAINS */}
        <div className="pt-8 border-t border-[#E2E8F0] space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#15803D]">
              ENTERPRISE CAPABILITY DOMAINS
            </span>
            <span className="text-xs text-[#475569] font-sans">Full-Spectrum Engineering</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreDomains.map((dom, idx) => {
              const DomIcon = dom.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-[#E2E8F0] hover:border-[#15803D]/40 p-4 rounded-xl flex items-center gap-3 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#F0FDF4] text-[#15803D] flex items-center justify-center flex-shrink-0 group-hover:bg-[#15803D] group-hover:text-white transition-colors">
                    <DomIcon className="w-4.5 h-4.5" />
                  </div>
                  <span className="font-heading font-extrabold text-xs sm:text-sm text-[#0B2545] group-hover:text-[#15803D] transition-colors">
                    {dom.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. CLOSING EXECUTIVE COMMITMENT STATEMENT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-12 sm:py-16 px-6 rounded-3xl bg-gradient-to-b from-[#F0FDF4] to-white border border-[#BBF7D0] shadow-sm max-w-4xl mx-auto space-y-2"
        >
          <p className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B2545] leading-tight">
            Technology built around business outcomes.
          </p>
          <p className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#15803D]">
            Engineering solutions that create lasting value.
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
