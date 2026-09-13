import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Globe2, 
  Landmark, 
  HeartPulse, 
  ShoppingBag, 
  Truck, 
  Rocket, 
  Sparkles,
  Users,
  Lock
} from 'lucide-react';

const CLIENT_PARTNERS = [
  { 
    name: "Apex Financial", 
    logo: "APEX", 
    tag: "FINTECH CORE", 
    desc: "Core Banking Systems",
    icon: Landmark,
    badgeColor: "bg-[#0284C7] text-white shadow-sm"
  },
  { 
    name: "Vanguard Tech", 
    logo: "VANGUARD", 
    tag: "CLOUD INFRA", 
    desc: "Multi-Cloud Networks",
    icon: ShieldCheck,
    badgeColor: "bg-[#0284C7] text-white shadow-sm"
  },
  { 
    name: "Nexus Health Systems", 
    logo: "NEXUS", 
    tag: "HEALTHCARE AI", 
    desc: "HIPAA Compliant EHR",
    icon: HeartPulse,
    badgeColor: "bg-[#0284C7] text-white shadow-sm"
  },
  { 
    name: "Global Freight", 
    logo: "GLOBALOG", 
    tag: "LOGISTICS IOT", 
    desc: "Fleet Telemetry Engine",
    icon: Truck,
    badgeColor: "bg-[#0284C7] text-white shadow-sm"
  },
  { 
    name: "AeroDynamics Tech", 
    logo: "AERO", 
    tag: "AEROSPACE", 
    desc: "Predictive Analytics",
    icon: Rocket,
    badgeColor: "bg-[#0284C7] text-white shadow-sm"
  },
  { 
    name: "Omni Retail Group", 
    logo: "OMNI", 
    tag: "E-COMMERCE", 
    desc: "Headless Commerce",
    icon: ShoppingBag,
    badgeColor: "bg-[#0284C7] text-white shadow-sm"
  }
];

export default function TrustedBy() {
  return (
    <section id="trusted-by" className="bg-[#FAFCFF] py-16 sm:py-24 border-b border-[#D0E2F7] relative overflow-hidden">
      
      {/* Subtle Background Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-radial-gradient-blue opacity-25 pointer-events-none blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white border border-[#0284C7]/20 px-3.5 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              ENTERPRISE TRUST & GLOBAL PARTNERSHIPS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B2545] leading-tight">
            Trusted by Businesses <br />
            <span className="font-editorial-accent text-[#0284C7] font-extrabold">Building What's Next.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#475569] font-sans max-w-xl mx-auto">
            We partner with ambitious enterprises and high-growth technology leaders to build resilient, mission-critical digital systems.
          </p>
        </div>

        {/* STRICTLY CONTAINED 6-COLUMN PARTNER CARDS GRID (100% Inside Container Box, No Full-Screen Overflow) */}
        <div className="bg-transparent border border-[#D0E2F7] p-5 sm:p-6 rounded-3xl shadow-sm mb-14">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {CLIENT_PARTNERS.map((client, index) => {
              const IconComp = client.icon || Building2;

              return (
                <div 
                  key={`partner-${index}`}
                  className="bg-transparent border border-[#E2E8F0] hover:border-[#0284C7] rounded-2xl p-3.5 flex flex-col items-center justify-between text-center transition-all duration-300 group hover:shadow-luxury cursor-pointer h-36 relative overflow-hidden"
                >
                  {/* Sector Tag Badge */}
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#0284C7] bg-white px-2 py-0.5 rounded border border-[#0284C7]/20 group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                    {client.tag}
                  </span>

                  {/* Center Icon & Brand Mark */}
                  <div className="my-1 flex flex-col items-center gap-1">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm ${client.badgeColor}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="font-heading font-extrabold tracking-wider text-xs sm:text-sm text-[#0B2545] group-hover:text-[#0284C7] transition-colors mt-0.5">
                      {client.logo}
                    </span>
                  </div>

                  {/* Subtitle Description */}
                  <span className="text-[10px] text-[#475569] font-sans font-medium truncate w-full">
                    {client.desc}
                  </span>

                  {/* Active Hover Accent Line */}
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#0284C7] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Executive Certification & Security Cards Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#D0E2F7]">
          
          {/* Card 1 */}
          <div className="bg-white border border-[#D0E2F7] p-5 rounded-2xl flex items-start gap-4 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm shadow-emerald-500/30">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-[#0B2545]">ISO 27001 & SOC-2 Certified</h3>
              <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                Bank-grade data encryption, rigorous vulnerability testing, and compliance verification across every release.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FAFCFF] border border-[#D0E2F7] p-5 rounded-2xl flex items-start gap-4 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm shadow-indigo-500/30">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-[#0B2545]">100% Dedicated Senior Squads</h3>
              <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                Handpicked senior software engineers and fractional CTO advisors integrated directly into your workflow.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#D0E2F7] p-5 rounded-2xl flex items-start gap-4 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#0284C7] text-white flex items-center justify-center flex-shrink-0 shadow-sm shadow-sky-500/30">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-[#0B2545]">Global 24/7 Delivery Framework</h3>
              <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                Sub-50ms latency SLA guarantees, zero-downtime deployments, and round-the-clock continuous architecture monitoring.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
