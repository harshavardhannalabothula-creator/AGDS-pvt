import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Lightbulb, 
  Code2, 
  TrendingUp, 
  Cloud, 
  Bot, 
  Network, 
  Rocket, 
  Users, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function AboutUs({ onOpenConsultation }) {
  const [showMoreModal, setShowMoreModal] = useState(false);

  const approachSteps = [
    {
      num: "01",
      title: "Understand",
      desc: "We listen, analyze and understand your business needs, challenges and opportunities.",
      icon: Search
    },
    {
      num: "02",
      title: "Design",
      desc: "We plan the right digital solution, architecture and user experience for your goals.",
      icon: Lightbulb
    },
    {
      num: "03",
      title: "Engineer",
      desc: "We build reliable software, AI solutions, cloud systems and digital products.",
      icon: Code2
    },
    {
      num: "04",
      title: "Evolve",
      desc: "We support, improve and scale your technology for long-term business growth.",
      icon: TrendingUp
    }
  ];

  const capabilities = [
    { name: "Software Engineering", icon: Code2 },
    { name: "Cloud & DevOps", icon: Cloud },
    { name: "AI Solutions", icon: Bot },
    { name: "Telecom Solutions", icon: Network },
    { name: "Product Development", icon: Rocket },
    { name: "Consulting & Dedicated Engineering Teams", icon: Users }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FAFBF8] text-[#0B2545] relative overflow-hidden border-b border-[#E2E8F0]">
      
      {/* Subtle Background Lighting & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. HERO SECTION: Heading + Subtitle (Left) & Developer Office Visual (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Company Intro */}
          <div className="lg:col-span-6 space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#15803D] block"
            >
              WHO WE ARE · ABOUT AGDS
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0B2545] leading-[1.12] tracking-tight"
            >
              Building Technology <br />
              That Works for <span className="font-serif italic font-normal text-[#15803D]">Business.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-[#475569] font-sans leading-relaxed max-w-xl"
            >
              Anthropic Gen Digital Systems Pvt. Ltd. is a software and digital technology company focused on building intelligent, scalable, and reliable digital solutions for modern businesses.
            </motion.p>
          </div>

          {/* Right Column: Process Breadcrumb + Developer Team Photo with Overlay */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Top Right Mini Process Flow */}
            <div className="flex items-center justify-end gap-2 text-[11px] font-mono text-[#475569] hidden sm:flex">
              <span>Ideas</span>
              <span>→</span>
              <span>Strategy</span>
              <span>→</span>
              <span className="text-[#15803D] font-bold">Solutions</span>
              <span>→</span>
              <span>Growth</span>
            </div>

            {/* Developer Office Photo Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-luxury border border-[#E2E8F0] bg-[#0B2545]"
            >
              <div className="aspect-[16/9] relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Senior Software Engineering Team at Anthropic Gen Digital Systems" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/70 via-transparent to-transparent"></div>

                {/* Top Right Overlay Typography */}
                <div className="absolute top-6 right-6 text-right text-white space-y-0.5 pointer-events-none">
                  <p className="font-serif italic text-base leading-tight text-white/90">Better</p>
                  <p className="font-heading font-extrabold text-sm tracking-wider uppercase">Technology</p>
                  <p className="font-serif italic text-base leading-tight text-white/90">Bigger</p>
                  <p className="font-heading font-extrabold text-sm tracking-wider text-[#93C5FD] uppercase">Possibilities</p>
                </div>

                {/* Bottom Left Logo Mark A */}
                <div className="absolute bottom-4 left-6 text-white text-2xl font-heading font-black tracking-widest opacity-80">
                  A
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* 2. OUR APPROACH SECTION: Headline (Left) + 4 Process Stages with Arrows (Right) */}
        <div className="pt-12 border-t border-[#E2E8F0] space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Title */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#15803D]">
                OUR APPROACH
              </span>
              <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B2545] leading-tight">
                From Business <br />
                Challenges to <br />
                <span className="font-serif italic font-normal text-[#0B2545]">Digital Solutions.</span>
              </h3>
            </div>

            {/* Right 4 Horizontal Connected Process Nodes */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start relative">
              {approachSteps.map((step, idx) => {
                const StepIcon = step.icon;

                return (
                  <motion.div 
                    key={step.num}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="space-y-3 relative group"
                  >
                    {/* Icon Circle */}
                    <div className="w-12 h-12 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] flex items-center justify-center shadow-xs group-hover:bg-[#15803D] group-hover:text-white transition-colors duration-300">
                      <StepIcon className="w-5 h-5" />
                    </div>

                    {/* Connecting Arrow for Desktop */}
                    {idx < 3 && (
                      <div className="hidden lg:block absolute top-6 -right-3 text-[#CBD5E1]">
                        →
                      </div>
                    )}

                    {/* Step Number & Title */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono font-bold text-[#15803D] block">
                        {step.num}
                      </span>
                      <h4 className="font-heading font-extrabold text-base text-[#0B2545] group-hover:text-[#15803D] transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs text-[#475569] leading-relaxed font-sans">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

        {/* 3. STORY & CAPABILITIES GRID (3 Columns) */}
        <div className="pt-12 border-t border-[#E2E8F0]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left 4 Cols: High-Tech Screen Visual with Card Overlay */}
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden border border-[#E2E8F0] bg-[#0B2545] shadow-md min-h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                alt="Digital System Architecture Telemetry" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/40 to-transparent"></div>
              
              {/* Glassmorphism Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md rounded-xl border border-[#BBF7D0] shadow-lg space-y-1">
                <p className="font-serif italic text-base text-[#0B2545]">Modern Technology.</p>
                <p className="font-heading font-extrabold text-sm text-[#15803D]">Real Business Impact.</p>
              </div>
            </div>

            {/* Middle 4 Cols: OUR STORY Content */}
            <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#15803D]">
                  OUR STORY
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2545] leading-tight">
                  Technology With Purpose. <br />
                  <span className="font-serif italic font-normal text-[#15803D]">Engineering With Precision.</span>
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-[#475569] leading-relaxed font-sans pt-1">
                  <p>
                    We combine software engineering, cloud technologies, data, automation, and thoughtful user experience design to help organizations solve complex business challenges and create sustainable digital growth.
                  </p>
                  <p>
                    Our approach is centered on understanding the business first, engineering the right technology, and delivering solutions that create lasting value.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => setShowMoreModal(true)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B2545] hover:text-[#15803D] transition-colors group"
                >
                  <span>Explore Governance Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#15803D] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right 4 Cols: OUR CAPABILITIES Grid */}
            <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#15803D]">
                OUR CAPABILITIES
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow">
                {capabilities.map((cap, idx) => {
                  const CapIcon = cap.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-3 bg-white border border-[#E2E8F0] hover:border-[#15803D]/40 rounded-xl flex items-center gap-2.5 transition-all duration-300 shadow-2xs group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] text-[#15803D] flex items-center justify-center flex-shrink-0 group-hover:bg-[#15803D] group-hover:text-white transition-colors">
                        <CapIcon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-heading font-extrabold text-[#0B2545] leading-snug group-hover:text-[#15803D] transition-colors">
                        {cap.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* 4. OUR MISSION BOTTOM BANNER */}
        <div className="pt-12 border-t border-[#E2E8F0] relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-center lg:text-left">
            
            {/* Left Annotation */}
            <div className="text-xs font-sans text-[#475569] space-y-0.5 hidden lg:block">
              <p>Real People.</p>
              <p className="font-semibold text-[#0B2545]">Modern Technology.</p>
              <p className="text-[#15803D] font-bold">Lasting Impact.</p>
            </div>

            {/* Center Main Statement */}
            <div className="space-y-2 max-w-3xl mx-auto lg:mx-0">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#15803D]">
                OUR MISSION
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0B2545] leading-tight">
                We turn complex business challenges <br />
                into reliable <span className="font-serif italic font-normal text-[#15803D]">digital solutions.</span>
              </h3>
            </div>

            {/* Right Logo Mark A */}
            <div className="text-3xl font-heading font-black text-[#0B2545] opacity-20 hidden lg:block">
              A
            </div>

          </div>
        </div>

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
