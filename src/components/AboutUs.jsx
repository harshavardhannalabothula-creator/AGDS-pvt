import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function AboutUs({ onOpenConsultation }) {
  const [showMoreModal, setShowMoreModal] = useState(false);

  const pillars = [
    {
      num: "01",
      title: "Engineering Excellence",
      desc: "Building reliable, scalable, and maintainable software systems using modern frameworks and architectural patterns."
    },
    {
      num: "02",
      title: "Business-First Thinking",
      desc: "Technology designed around real enterprise business challenges, operational bottlenecks, and financial growth objectives."
    },
    {
      num: "03",
      title: "Long-Term Partnership",
      desc: "Supporting enterprise clients far beyond initial development through continuous telemetry tuning, security compliance, and platform upgrades."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAFCFF] relative overflow-hidden border-b border-[#D0E2F7]">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Visual */}
          <div className="lg:col-span-6 relative">
            
            <div className="relative z-10 border border-[#D0E2F7] bg-white p-3 shadow-luxury">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Intelligent Digital Systems Core Architecture at AGDS" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/70 via-transparent to-transparent"></div>
                
                {/* Floating Image Text Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-sm border-l-4 border-[#0284C7] shadow-md">
                  <p className="text-xs font-bold text-[#0B2545] uppercase tracking-wider">
                    Bengaluru Engineering Center
                  </p>
                  <p className="text-[11px] text-[#475569]">
                    Senior engineering pods executing digital system architecture reviews.
                  </p>
                </div>
              </div>
            </div>

            {/* Background Decorative Blue Accent Frame */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-[#0284C7]/30 z-0 hidden sm:block"></div>

            {/* Experience Callout Badge */}
            <div className="absolute -top-6 -right-6 z-20 bg-[#0B2545] text-white p-5 shadow-luxury border border-[#0284C7]/30 hidden sm:block">
              <p className="font-heading text-3xl font-extrabold text-[#93C5FD]">AGDS</p>
              <p className="text-[11px] font-sans text-[#EFF6FF] uppercase tracking-widest mt-1">Enterprise Tech</p>
            </div>

          </div>

          {/* Right Column: Editorial Copy & Value Pillars */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7]">
                WHO WE ARE • ABOUT AGDS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#0B2545] leading-tight">
                Technology With Purpose. <br />
                <span className="font-editorial-accent text-[#0284C7] font-extrabold">Engineering With Precision.</span>
              </h2>
            </div>

            <div className="space-y-4 text-[#475569] text-sm sm:text-base leading-relaxed font-sans">
              <p>
                <strong className="text-[#0B2545]">{COMPANY_INFO.name}</strong> is a software and digital technology company focused on building intelligent, scalable, and reliable digital solutions for modern businesses.
              </p>
              <p>
                We combine software engineering, cloud technologies, data, automation, and thoughtful user experience design to help organizations solve complex business challenges and create sustainable digital growth.
              </p>
              <p>
                Our approach is centered on understanding the business first, engineering the right technology, and delivering solutions that create lasting value.
              </p>
            </div>

            {/* Three Value Points */}
            <div className="pt-2 space-y-4 border-t border-[#D0E2F7]">
              {pillars.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <span className="flex-shrink-0 font-heading font-extrabold text-[#0284C7] text-base py-1 px-2.5 bg-[#EFF6FF] border border-[#0284C7]/30">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-[#0B2545] text-base group-hover:text-[#0284C7] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => setShowMoreModal(true)}
                className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#0284C7] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider border border-[#0284C7]/30 hover:border-[#0284C7] transition-all shadow-md group"
              >
                <span>Read More About Us</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#93C5FD] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Read More Modal */}
      {showMoreModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2545]/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white border border-[#0284C7]/40 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowMoreModal(false)}
              className="absolute top-4 right-4 text-[#475569] hover:text-[#0B2545] font-mono text-sm uppercase px-2 py-1 border border-[#D0E2F7]"
            >
              Close [✕]
            </button>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7]">COMPANY OVERVIEW</span>
            <h3 className="text-2xl font-heading font-extrabold text-[#0B2545] mt-2 mb-4">
              Deep Technical Commitment & Engineering Philosophy
            </h3>

            <div className="space-y-4 text-sm text-[#475569] leading-relaxed font-sans border-t border-[#D0E2F7] pt-4">
              <p>
                At Anthropic Gen Digital Systems Pvt. Ltd., our core philosophy is built around structural reliability and absolute transparency. We operate as an extension of our enterprise clients' executive technology leadership.
              </p>
              <h4 className="font-heading font-bold text-[#0B2545] text-base pt-2">Our Key Operating Principles</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Technical Debt Compromise:</strong> We build maintainable software with full documentation and automated unit tests.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-0.5" />
                  <span><strong>Intellectual Property Security:</strong> 100% IP ownership resides directly with our clients from day one.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-0.5" />
                  <span><strong>Global Delivery Standards:</strong> Adhering strictly to international DevSecOps and ISO quality frameworks.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D0E2F7] flex justify-end gap-3">
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
                className="px-6 py-2.5 bg-[#0B2545] hover:bg-[#0284C7] text-white text-xs font-bold uppercase tracking-wider border border-[#0284C7]/40"
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
