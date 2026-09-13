import React, { useState } from 'react';
import { TECH_STACK } from '../data/content';
import { 
  Layers, 
  Server, 
  Smartphone, 
  Cloud, 
  Cpu, 
  Database, 
  Check,
  Code2,
  Zap,
  FileCode2,
  Box,
  Palette,
  Shield,
  Terminal,
  Workflow,
  Coffee,
  GitFork,
  Feather,
  Compass,
  Globe,
  Network,
  Package,
  Binary,
  Brain,
  Bot,
  Snowflake,
  Flame,
  Link2,
  HardDrive,
  Table,
  GitBranch,
  Sparkles
} from 'lucide-react';

const categoryIcons = {
  Frontend: Layers,
  Backend: Server,
  Mobile: Smartphone,
  Cloud: Cloud,
  "Data & AI": Cpu,
  Databases: Database
};

// Unique individual icon mapping for every single technology stack item
const techIcons = {
  // Frontend
  "React": Code2,
  "Next.js": Zap,
  "TypeScript": FileCode2,
  "Vue.js": Box,
  "Tailwind CSS": Palette,
  "Angular": Shield,

  // Backend
  "Node.js": Server,
  "Python": Terminal,
  ".NET Core": Workflow,
  "Java / Spring Boot": Coffee,
  "Go (Golang)": Zap,
  "GraphQL": GitFork,

  // Mobile
  "React Native": Smartphone,
  "Flutter": Feather,
  "Swift (iOS)": Compass,
  "Kotlin (Android)": Smartphone,

  // Cloud
  "AWS": Cloud,
  "Microsoft Azure": Shield,
  "Google Cloud": Globe,
  "Kubernetes": Network,
  "Docker": Package,
  "Terraform": Binary,

  // Data & AI
  "Python / PyTorch": Brain,
  "OpenAI / LLMs": Bot,
  "Snowflake": Snowflake,
  "Apache Spark": Flame,
  "LangChain": Link2,

  // Databases
  "PostgreSQL": Database,
  "MongoDB": HardDrive,
  "Redis": Zap,
  "MySQL": Table,
  "Neo4j": GitBranch
};

const defaultTechStyle = "bg-[#0284C7] text-white shadow-sm shadow-sky-500/30";

const techColors = {
  // Frontend
  "React": "bg-cyan-600 text-white shadow-sm shadow-cyan-500/30",
  "Next.js": "bg-slate-800 text-white shadow-sm shadow-slate-700/30",
  "TypeScript": "bg-blue-600 text-white shadow-sm shadow-blue-500/30",
  "Vue.js": "bg-emerald-600 text-white shadow-sm shadow-emerald-500/30",
  "Tailwind CSS": "bg-sky-500 text-white shadow-sm shadow-sky-500/30",
  "Angular": "bg-rose-600 text-white shadow-sm shadow-rose-500/30",

  // Backend
  "Node.js": "bg-emerald-700 text-white shadow-sm shadow-emerald-600/30",
  "Python": "bg-amber-500 text-white shadow-sm shadow-amber-500/30",
  ".NET Core": "bg-purple-600 text-white shadow-sm shadow-purple-500/30",
  "Java / Spring Boot": "bg-orange-600 text-white shadow-sm shadow-orange-500/30",
  "Go (Golang)": "bg-cyan-500 text-white shadow-sm shadow-cyan-500/30",
  "GraphQL": "bg-pink-600 text-white shadow-sm shadow-pink-500/30",

  // Mobile
  "React Native": "bg-sky-600 text-white shadow-sm shadow-sky-500/30",
  "Flutter": "bg-blue-500 text-white shadow-sm shadow-blue-500/30",
  "Swift (iOS)": "bg-orange-500 text-white shadow-sm shadow-orange-500/30",
  "Kotlin (Android)": "bg-violet-600 text-white shadow-sm shadow-violet-500/30",

  // Cloud
  "AWS": "bg-amber-600 text-white shadow-sm shadow-amber-600/30",
  "Microsoft Azure": "bg-blue-600 text-white shadow-sm shadow-blue-500/30",
  "Google Cloud": "bg-red-500 text-white shadow-sm shadow-red-500/30",
  "Kubernetes": "bg-indigo-600 text-white shadow-sm shadow-indigo-500/30",
  "Docker": "bg-sky-600 text-white shadow-sm shadow-sky-500/30",
  "Terraform": "bg-purple-700 text-white shadow-sm shadow-purple-600/30",

  // Data & AI
  "Python / PyTorch": "bg-orange-600 text-white shadow-sm shadow-orange-500/30",
  "OpenAI / LLMs": "bg-emerald-600 text-white shadow-sm shadow-emerald-500/30",
  "Snowflake": "bg-sky-400 text-white shadow-sm shadow-sky-400/30",
  "Apache Spark": "bg-red-600 text-white shadow-sm shadow-red-500/30",
  "LangChain": "bg-teal-600 text-white shadow-sm shadow-teal-500/30",

  // Databases
  "PostgreSQL": "bg-blue-700 text-white shadow-sm shadow-blue-600/30",
  "MongoDB": "bg-emerald-600 text-white shadow-sm shadow-emerald-500/30",
  "Redis": "bg-red-600 text-white shadow-sm shadow-red-500/30",
  "MySQL": "bg-amber-600 text-white shadow-sm shadow-amber-500/30",
  "Neo4j": "bg-indigo-600 text-white shadow-sm shadow-indigo-500/30"
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const categories = Object.keys(TECH_STACK);

  return (
    <section id="tech" className="py-10 lg:py-14 bg-[#F0F7FF] border-b border-[#D0E2F7] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#EFF6FF] rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white border border-[#0284C7]/20 px-3.5 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              ENTERPRISE STACK & ARCHITECTURE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0B2545] leading-tight">
            The Technology Behind <br />
            <span className="font-editorial-accent text-[#0284C7] font-extrabold">Better Digital Experiences.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#475569] font-sans max-w-xl mx-auto">
            We architect resilient software utilizing battle-tested frameworks, cloud infrastructure, and data platforms.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-8">
          {categories.map((cat) => {
            const IconComp = categoryIcons[cat] || Layers;
            const isActive = cat === activeCategory;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-2.5 px-5 py-3 text-xs sm:text-sm font-heading font-bold tracking-wider rounded-xl transition-all duration-300 border ${
                  isActive 
                    ? 'bg-[#0B2545] text-white border-[#0284C7] shadow-luxury font-bold scale-[1.02]' 
                    : 'bg-white text-[#475569] hover:text-[#0B2545] border-[#D0E2F7] hover:border-[#0284C7]/60 hover:bg-[#EFF6FF]'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-[#93C5FD]' : 'text-[#0284C7]'}`} />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tech Stack Grid with UNIQUE INDIVIDUAL ICONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK[activeCategory].map((tech, idx) => {
            const ItemIcon = techIcons[tech.name] || Code2;
            const badgeColor = techColors[tech.name] || defaultTechStyle;

            return (
              <div 
                key={idx}
                className="bg-transparent border border-[#D0E2F7] p-6 space-y-4 rounded-2xl group flex flex-col justify-between transition-all duration-300 hover:border-[#0284C7] shadow-sm hover:shadow-luxury"
              >
                <div className="space-y-3">
                  
                  {/* Top Header: Unique Icon Badge + Name + Level Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Unique Icon Badge */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${badgeColor}`}>
                        <ItemIcon className="w-5 h-5" />
                      </div>

                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#0B2545] group-hover:text-[#0284C7] transition-colors truncate">
                        {tech.name}
                      </h3>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#0284C7] bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-[#0284C7]/30 font-semibold flex-shrink-0">
                      {tech.level}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#475569] leading-relaxed font-sans pt-1">
                    {tech.desc}
                  </p>
                </div>

                {/* Footer Readiness Indicator */}
                <div className="pt-3 border-t border-[#D0E2F7] flex items-center gap-2 text-[11px] text-[#475569] font-mono font-medium">
                  <Check className="w-3.5 h-3.5 text-[#0EA5E9]" />
                  <span>Production Ready & Supported</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer / Label */}
        <div className="mt-12 text-center text-xs text-[#475569] font-sans">
          <p>All technology stack components are configured according to enterprise security standards and custom client requirements.</p>
        </div>

      </div>
    </section>
  );
}
