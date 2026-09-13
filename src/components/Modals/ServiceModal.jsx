import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServiceModal({ service, onClose, onRequestService }) {
  if (!service) return null;

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

        {/* Modal Header Visual */}
        <div className="relative h-48 sm:h-64 overflow-hidden bg-[#0B2545]">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="text-[10px] font-mono text-[#93C5FD] uppercase tracking-widest">
              SERVICE {service.number} • AGDS CAPABILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold">{service.title}</h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3 font-sans">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#0B2545]">
              Overview & Technical Commitment
            </h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              {service.longDesc}
            </p>
          </div>

          {/* Features Inclusions */}
          <div className="space-y-3 border-t border-[#D0E2F7] pt-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B2545]">
              Technical Deliverables & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#0F172A] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2 border-t border-[#D0E2F7] pt-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B2545]">
              Primary Technologies Utilized
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((t, idx) => (
                <span key={idx} className="text-xs font-mono bg-[#0284C7] text-white px-2.5 py-1 font-semibold rounded-md shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Business Outcome Banner */}
          <div className="p-4 bg-[#EFF6FF] border-l-4 border-[#0284C7] text-xs text-[#0B2545]">
            <p className="font-bold uppercase tracking-wider text-[10px] text-[#0284C7]">MEASURABLE BUSINESS IMPACT</p>
            <p className="mt-0.5 font-medium">{service.outcomes}</p>
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-4 border-t border-[#D0E2F7] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs font-bold text-[#475569] hover:text-[#0B2545] uppercase tracking-wider"
            >
              Close Window
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestService(service);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B2545] hover:bg-[#0284C7] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider border border-[#0284C7]/40"
            >
              <span>Engage For {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#93C5FD]" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
