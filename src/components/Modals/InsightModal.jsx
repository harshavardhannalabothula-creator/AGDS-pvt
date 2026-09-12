import React from 'react';
import { X } from 'lucide-react';

export default function InsightModal({ insight, onClose }) {
  if (!insight) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2545]/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white border border-[#0284C7]/40 max-w-3xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-[#0B2545] text-white p-2 border border-[#0284C7]/40 hover:bg-[#0284C7] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Cover Header */}
        <div className="relative h-56 sm:h-72 overflow-hidden bg-[#0B2545]">
          <img 
            src={insight.image} 
            alt={insight.title} 
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <span className="text-[10px] font-mono text-[#93C5FD] uppercase tracking-widest bg-[#0284C7]/30 px-2 py-0.5 border border-[#0284C7]/50 font-bold">
              {insight.category}
            </span>
            <h2 className="text-xl sm:text-3xl font-heading font-extrabold leading-snug">
              {insight.title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-[#EFF6FF] font-mono">
              <span>{insight.date}</span>
              <span>•</span>
              <span>{insight.readTime}</span>
            </div>
          </div>
        </div>

        {/* Formatted Article Content */}
        <div className="p-6 sm:p-10 space-y-6 font-sans text-[#0F172A] leading-relaxed text-sm sm:text-base">
          
          <div className="p-4 bg-[#EFF6FF] border-l-4 border-[#0284C7] text-[#475569] italic text-sm">
            "{insight.excerpt}"
          </div>

          <div className="prose max-w-none space-y-4 whitespace-pre-line text-sm text-[#475569]">
            {insight.content}
          </div>

          <div className="pt-6 border-t border-[#D0E2F7] flex items-center justify-between">
            <span className="text-xs text-[#475569] font-mono font-semibold">Published by AGDS Technology Advisory</span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#0B2545] hover:bg-[#0284C7] text-white text-xs font-bold uppercase tracking-wider border border-[#0284C7]/40"
            >
              Done Reading
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
