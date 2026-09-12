import React, { useState } from 'react';
import { ArrowRight, Clock, Users, Shield, Sparkles } from 'lucide-react';

export default function ProjectEstimator({ onOpenConsultationWithData }) {
  const [selectedService, setSelectedService] = useState('custom-software');
  const [projectScale, setProjectScale] = useState('medium');
  const [complianceNeeded, setComplianceNeeded] = useState(true);

  const calculateEstimate = () => {
    let baseMonths = 3;
    let podSize = "1 Architect, 3 Engineers, 1 QA";
    
    if (projectScale === 'small') {
      baseMonths = 2;
      podSize = "1 Tech Lead, 2 Fullstack Engineers, 1 QA";
    } else if (projectScale === 'large') {
      baseMonths = 6;
      podSize = "1 Principal Architect, 5 Senior Engineers, 2 QA, 1 DevOps";
    } else if (projectScale === 'enterprise') {
      baseMonths = 9;
      podSize = "Dedicated Pod: 2 Architects, 8 Engineers, 2 QA, 2 DevOps, 1 PM";
    }

    if (complianceNeeded) {
      baseMonths += 1;
    }

    return {
      timeframe: `${baseMonths} - ${baseMonths + 2} Months`,
      podSize,
      methodology: "Agile 2-Week Sprints + Continuous Integration"
    };
  };

  const estimate = calculateEstimate();

  const handleProceed = () => {
    onOpenConsultationWithData({
      service: selectedService,
      scale: projectScale,
      compliance: complianceNeeded ? 'ISO 27001 / SOC-2 Required' : 'Standard Enterprise',
      timeframe: estimate.timeframe
    });
  };

  return (
    <section className="py-16 bg-white border-b border-[#D0E2F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FAFCFF] border border-[#0284C7]/30 p-6 sm:p-10 shadow-luxury relative overflow-hidden">
          
          {/* Subtle Header */}
          <div className="flex items-center gap-2 text-[#0284C7] text-xs font-bold uppercase tracking-[0.2em] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>INTERACTIVE SCOPE CALCULATOR</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2545] mb-6">
            Estimate Your Enterprise Digital Project Scope
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Inputs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Service Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                  1. Select Target Service
                </label>
                <select 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-white border border-[#D0E2F7] px-4 py-3 text-sm text-[#0B2545] focus:outline-none focus:border-[#0284C7] font-sans"
                >
                  <option value="custom-software">Custom Software & Core Platforms</option>
                  <option value="web-apps">Modern Enterprise Web Applications</option>
                  <option value="mobile-apps">Native & Cross-Platform Mobile Apps</option>
                  <option value="cloud-devops">Cloud Infrastructure & DevOps Migration</option>
                  <option value="ai-automation">Enterprise AI & Intelligent Automation</option>
                  <option value="data-analytics">Data Engineering & Analytics Warehousing</option>
                  <option value="cybersecurity-qa">Security Auditing & Quality Engineering</option>
                  <option value="it-consulting">Digital Transformation & Architecture Strategy</option>
                </select>
              </div>

              {/* Project Scale */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                  2. Project Scale & Complexity
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'small', label: 'MVP / Pilot' },
                    { id: 'medium', label: 'Core Platform' },
                    { id: 'large', label: 'Multi-System' },
                    { id: 'enterprise', label: 'Global Scale' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setProjectScale(s.id)}
                      className={`p-3 text-xs font-heading font-bold border transition-all text-center ${
                        projectScale === s.id
                          ? 'bg-[#0B2545] text-white border-[#0284C7] shadow-sm'
                          : 'bg-white text-[#475569] hover:text-[#0B2545] border-[#D0E2F7]'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Compliance Checkbox */}
              <div className="flex items-center gap-3 pt-2">
                <input 
                  type="checkbox"
                  id="compliance"
                  checked={complianceNeeded}
                  onChange={(e) => setComplianceNeeded(e.target.checked)}
                  className="w-4 h-4 text-[#0284C7] focus:ring-[#0284C7] border-[#D0E2F7]"
                />
                <label htmlFor="compliance" className="text-xs text-[#475569] font-semibold cursor-pointer">
                  Require SOC-2 / ISO-27001 / HIPAA Compliance Audit Framework
                </label>
              </div>

            </div>

            {/* Right Output Panel */}
            <div className="lg:col-span-5 bg-[#0B2545] text-white p-6 sm:p-8 border border-[#0284C7]/40 space-y-6">
              
              <div className="border-b border-[#0284C7]/30 pb-4">
                <span className="text-[10px] font-mono text-[#93C5FD] uppercase tracking-widest">ESTIMATED PARAMETERS</span>
                <p className="text-xl font-heading font-bold text-white mt-1">Project Output Profile</p>
              </div>

              <div className="space-y-4 text-xs font-sans">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#93C5FD] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#EFF6FF]">Estimated Delivery Timeframe</p>
                    <p className="text-sm font-heading font-bold text-white mt-0.5">{estimate.timeframe}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-[#93C5FD] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#EFF6FF]">Recommended Engineering Pod</p>
                    <p className="text-xs text-[#93C5FD] mt-0.5">{estimate.podSize}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-[#93C5FD] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#EFF6FF]">Execution Framework</p>
                    <p className="text-xs text-[#D0E2F7] mt-0.5">{estimate.methodology}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleProceed}
                  className="w-full bg-[#0284C7] hover:bg-[#0EA5E9] text-white py-3.5 px-4 text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-blue-glow"
                >
                  <span>Request Proposal Based On Scope</span>
                  <ArrowRight className="w-4 h-4 text-[#93C5FD]" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
