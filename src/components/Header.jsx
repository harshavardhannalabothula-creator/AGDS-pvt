import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function Header({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      
      const sections = ['hero', 'about', 'services', 'industries', 'tech', 'contact'];
      const scrollPos = window.scrollY + 200;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Streamlined essential navigation links
  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Industries', href: '#industries', id: 'industries' },
    { label: 'Technology', href: '#tech', id: 'tech' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="relative z-50 pt-2 pb-1 bg-[#FAFCFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#D0E2F7] rounded-2xl px-4 sm:px-6 py-2.5 shadow-sm flex items-center justify-between">
          
          {/* Company Brand Logo */}
          <a href="#" className="flex items-center flex-shrink-0 mr-6">
            <Logo variant="dark" />
          </a>

          {/* Desktop Navigation Links — Streamlined & Uncrowded */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 whitespace-nowrap">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`py-2 text-sm xl:text-base font-semibold transition-colors relative whitespace-nowrap ${
                  activeSection === item.id 
                    ? 'text-[#0B2545] font-bold' 
                    : 'text-[#475569] hover:text-[#0284C7]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284C7] rounded-full"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Action Call-To-Action Button & Phone Badge */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0 ml-6">
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2 bg-[#EFF6FF] border border-[#D0E2F7] rounded-full text-xs font-semibold text-[#0B2545] hover:text-[#0284C7] hover:border-[#0284C7]/40 transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0B2545] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-blue-glow group whitespace-nowrap"
            >
              <span>Book a call</span>
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Navigation Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0B2545] hover:text-[#0284C7] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#D0E2F7] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-semibold text-[#475569] hover:text-[#0B2545] border-l-2 border-transparent hover:border-[#0284C7]"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[#D0E2F7] flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full text-center bg-[#0284C7] hover:bg-[#0B2545] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Book a call</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
