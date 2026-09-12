import React from 'react';

export default function Logo({ variant = 'dark', className = '', showText = true }) {
  // variant: 'dark' (for light background) | 'light' (for dark background)
  const textColor = variant === 'light' ? 'text-white' : 'text-[#0B2545]';
  const subTextColor = variant === 'light' ? 'text-[#93C5FD]' : 'text-[#0284C7]';

  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Official AGDS Logo Image Mark */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-1 border border-[#D0E2F7] shadow-sm group-hover:scale-105 transition-transform duration-300">
        <img 
          src="/images/agds_logo.jpg" 
          alt="Anthropic Gen Digital Systems Logo" 
          className="w-full h-full object-contain rounded"
        />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-heading font-extrabold tracking-tight text-base leading-none ${textColor}`}>
            ANTHROPIC GEN
          </span>
          <span className={`font-sans text-[10px] font-bold tracking-[0.2em] uppercase mt-1 ${subTextColor}`}>
            DIGITAL SYSTEMS
          </span>
        </div>
      )}
    </div>
  );
}
