import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/content';

export default function ConsultationModal({ isOpen, onClose, initialData = null }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: initialData?.service || 'Custom Software Development',
    notes: initialData ? `Scope: ${initialData.scale || 'Enterprise'} | Target Timeframe: ${initialData.timeframe || 'Immediate'}` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2545]/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white border border-[#0284C7]/40 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-[#475569] hover:text-[#0B2545] font-mono text-sm uppercase px-2 py-1 border border-[#D0E2F7]"
        >
          [✕]
        </button>

        <div className="flex items-center gap-2 text-[#0284C7] text-xs font-bold uppercase tracking-[0.2em] mb-1">
          <Sparkles className="w-4 h-4" />
          <span>EXECUTIVE ENGAGEMENT</span>
        </div>

        <h2 className="text-2xl font-heading font-extrabold text-[#0B2545] mb-2">
          LET'S BUILD TOGETHER
        </h2>
        <p className="text-xs text-[#475569] mb-6 font-sans">
          Schedule an architectural consultation or request a custom software proposal for <strong>{COMPANY_INFO.name}</strong>.
        </p>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 bg-[#EFF6FF] text-[#0284C7] rounded-full flex items-center justify-center mx-auto border border-[#0284C7]/30">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-bold text-[#0B2545]">Proposal Request Submitted</h3>
            <p className="text-xs text-[#475569]">
              Thank you, {formData.name}. Our principal solution architect will contact you directly within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider border border-[#0284C7]"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-1">
                Your Name *
              </label>
              <input 
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Marcus Vance"
                className="w-full bg-white border border-[#D0E2F7] px-3.5 py-2.5 text-xs text-[#0B2545] focus:outline-none focus:border-[#0284C7] font-sans"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-1">
                  Work Email *
                </label>
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-white border border-[#D0E2F7] px-3.5 py-2.5 text-xs text-[#0B2545] focus:outline-none focus:border-[#0284C7] font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-1">
                  Company Name
                </label>
                <input 
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Enterprise Inc."
                  className="w-full bg-white border border-[#D0E2F7] px-3.5 py-2.5 text-xs text-[#0B2545] focus:outline-none focus:border-[#0284C7] font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-1">
                Target Service
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-white border border-[#D0E2F7] px-3.5 py-2.5 text-xs text-[#0B2545] focus:outline-none focus:border-[#0284C7] font-sans"
              >
                <option value="Custom Software Development">Custom Software Development</option>
                <option value="Web Application Development">Web Application Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Cloud & DevOps Solutions">Cloud & DevOps Solutions</option>
                <option value="AI & Intelligent Automation">AI & Intelligent Automation</option>
                <option value="Data Engineering & Analytics">Data Engineering & Analytics</option>
                <option value="Cybersecurity & Quality Engineering">Cybersecurity & Quality Engineering</option>
                <option value="IT Consulting & Digital Transformation">IT Consulting & Digital Transformation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-1">
                Project Notes / Scope Expectations
              </label>
              <textarea
                rows="3"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Share any background context or target timeline..."
                className="w-full bg-white border border-[#D0E2F7] p-3 text-xs text-[#0B2545] focus:outline-none focus:border-[#0284C7] font-sans"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0B2545] hover:bg-[#0284C7] text-white py-3.5 px-4 text-xs font-heading font-bold uppercase tracking-wider border border-[#0284C7]/40 flex items-center justify-center gap-2 shadow-luxury"
              >
                {loading ? (
                  <span>Submitting Request...</span>
                ) : (
                  <>
                    <span>SUBMIT PROPOSAL REQUEST</span>
                    <Send className="w-3.5 h-3.5 text-[#93C5FD]" />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-1.5 justify-center text-[10px] text-[#475569] font-mono pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0EA5E9]" />
              <span>Strict Enterprise Non-Disclosure Agreement (NDA)</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
