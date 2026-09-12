import React from 'react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/content';
import { Linkedin, Twitter, Github, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B2545] text-white pt-16 pb-12 border-t border-[#0284C7]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#0284C7]/20">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-xs text-[#EFF6FF] font-sans leading-relaxed max-w-sm">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-[11px] text-[#D0E2F7] font-sans leading-relaxed max-w-sm">
              Anthropic Gen Digital Systems Pvt. Ltd. engineers mission-critical software, cloud backends, enterprise AI, and digital transformation architectures for modern enterprises worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={COMPANY_INFO.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded bg-[#0284C7]/30 border border-[#0284C7]/50 hover:border-[#93C5FD] flex items-center justify-center text-[#EFF6FF] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={COMPANY_INFO.socials.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded bg-[#0284C7]/30 border border-[#0284C7]/50 hover:border-[#93C5FD] flex items-center justify-center text-[#EFF6FF] hover:text-white transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href={COMPANY_INFO.socials.github} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded bg-[#0284C7]/30 border border-[#0284C7]/50 hover:border-[#93C5FD] flex items-center justify-center text-[#EFF6FF] hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={COMPANY_INFO.socials.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded bg-[#0284C7]/30 border border-[#0284C7]/50 hover:border-[#93C5FD] flex items-center justify-center text-[#EFF6FF] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-[#93C5FD]">
              Company
            </h3>
            <ul className="space-y-2 text-xs text-[#EFF6FF] font-sans">
              <li><a href="#about" className="hover:text-[#93C5FD] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#93C5FD] transition-colors">Our Services</a></li>
              <li><a href="#industries" className="hover:text-[#93C5FD] transition-colors">Industries Served</a></li>
              <li><a href="#tech" className="hover:text-[#93C5FD] transition-colors">Technology Stack</a></li>
              <li><a href="#insights" className="hover:text-[#93C5FD] transition-colors">Insights & Perspectives</a></li>
              <li><a href="#contact" className="hover:text-[#93C5FD] transition-colors">Contact Headquarters</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-[#93C5FD]">
              Services
            </h3>
            <ul className="space-y-2 text-xs text-[#EFF6FF] font-sans">
              <li><a href="#services" className="hover:text-[#93C5FD] transition-colors">Custom Software Development</a></li>
              <li><a href="#services" className="hover:text-[#93C5FD] transition-colors">Web Application Engineering</a></li>
              <li><a href="#services" className="hover:text-[#93C5FD] transition-colors">Mobile App Development</a></li>
              <li><a href="#services" className="hover:text-[#93C5FD] transition-colors">Cloud & DevOps Architecture</a></li>
              <li><a href="#services" className="hover:text-[#93C5FD] transition-colors">AI & Intelligent Automation</a></li>
              <li><a href="#services" className="hover:text-[#93C5FD] transition-colors">Data Engineering & Analytics</a></li>
            </ul>
          </div>

          {/* Governance & Resources */}
          <div className="space-y-3">
            <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-[#93C5FD]">
              Resources & Legal
            </h3>
            <ul className="space-y-2 text-xs text-[#EFF6FF] font-sans">
              <li><a href="#insights" className="hover:text-[#93C5FD] transition-colors">Tech Insights</a></li>
              <li><a href="#why-us" className="hover:text-[#93C5FD] transition-colors">Engineering Standards</a></li>
              <li><a href="#contact" className="hover:text-[#93C5FD] transition-colors">Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-[#93C5FD] transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-[#93C5FD] transition-colors">Security Governance</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#D0E2F7] font-mono">
          <p>
            Copyright © {new Date().getFullYear()} Anthropic Gen Digital Systems Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Intelligent Digital Systems. Built for What's Next.</span>
            <button 
              onClick={scrollToTop}
              className="p-2 bg-[#0284C7]/40 hover:bg-[#0284C7] text-white border border-[#0284C7]/60 transition-all ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
