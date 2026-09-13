import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export default function ContactSection({ prefillData = null }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    phoneNumber: '',
    serviceRequired: prefillData?.service || 'Custom Software Development',
    projectDetails: prefillData ? `Project Scope: ${prefillData.scale || 'Standard'} | Compliance: ${prefillData.compliance || 'Standard'}` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const servicesOptions = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "Cloud & DevOps Solutions",
    "AI & Intelligent Automation",
    "Data Engineering & Analytics",
    "Cybersecurity & Quality Engineering",
    "IT Consulting & Digital Transformation",
    "Other Enterprise Inquiries"
  ];

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName || !formData.workEmail || !formData.projectDetails) {
      setErrorMessage('Please complete all required fields (Full Name, Work Email, and Project Details).');
      return;
    }

    setLoading(true);

    // Simulate API form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-10 lg:py-14 bg-[#FAFCFF] border-b border-[#D0E2F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7]">
            ENTERPRISE INQUIRIES • GET IN TOUCH
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#0B2545] leading-tight">
            Start Your Project
          </h2>
          <p className="text-sm sm:text-base text-[#475569] font-sans">
            Connect directly with our technology leadership team to discuss custom software architecture, timelines, and execution strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form Interface */}
          <div className="lg:col-span-7 bg-white border border-[#D0E2F7] p-6 sm:p-10 shadow-luxury">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-[#EFF6FF] text-[#0284C7] rounded-full flex items-center justify-center mx-auto border border-[#0284C7]/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#0B2545]">Inquiry Received</h3>
                <p className="text-sm text-[#475569] max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Our enterprise technology team has received your project details and will respond within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        workEmail: '',
                        companyName: '',
                        phoneNumber: '',
                        serviceRequired: 'Custom Software Development',
                        projectDetails: ''
                      });
                    }}
                    className="px-6 py-2.5 bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider border border-[#0284C7]"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMessage && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full bg-white border border-[#D0E2F7] px-4 py-3 text-sm text-[#0B2545] focus:outline-none focus:border-[#0284C7] font-sans"
                      required
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                      Work Email *
                    </label>
                    <input 
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      placeholder="e.g. eleanor@company.com"
                      className="w-full bg-white border border-[#D0E2F7] px-4 py-3 text-sm text-[#0B2545] focus:outline-none focus:border-[#0284C7] font-sans"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                      Company Name
                    </label>
                    <input 
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Apex Enterprise Systems"
                      className="w-full bg-white border border-[#D0E2F7] px-4 py-3 text-sm text-[#0B2545] focus:outline-none focus:border-[#0284C7] font-sans"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+91 (080) 0000-0000"
                      className="w-full bg-white border border-[#D0E2F7] px-4 py-3 text-sm text-[#0B2545] focus:outline-none focus:border-[#0284C7] font-sans"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                    Service Required *
                  </label>
                  <select
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#D0E2F7] px-4 py-3 text-sm text-[#0B2545] focus:outline-none focus:border-[#0284C7] font-sans"
                  >
                    {servicesOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                    Project Details & Technical Requirements *
                  </label>
                  <textarea
                    name="projectDetails"
                    rows="4"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Briefly describe your software objectives, legacy constraints, target timeline, or tech stack expectations..."
                    className="w-full bg-white border border-[#D0E2F7] p-4 text-sm text-[#0B2545] focus:outline-none focus:border-[#0284C7] font-sans"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#0B2545] hover:bg-[#0284C7] text-white py-4 px-6 text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 border border-[#0284C7]/40 flex items-center justify-center gap-2 shadow-luxury group"
                  >
                    {loading ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>SEND INQUIRY</span>
                        <Send className="w-4 h-4 text-[#93C5FD] group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0B2545] text-white p-8 border border-[#0284C7]/40 space-y-6">
              
              <div className="border-b border-[#0284C7]/30 pb-4">
                <span className="text-[10px] font-mono text-[#93C5FD] uppercase tracking-widest">HEADQUARTERS & ADVISORY</span>
                <h3 className="text-xl font-heading font-bold text-white mt-1">Corporate Contact Information</h3>
              </div>

              <div className="space-y-5 text-sm font-sans">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-rose-500 text-white shadow-sm shadow-rose-500/30 flex-shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Bengaluru Tech Hub</p>
                    <p className="text-xs text-[#EFF6FF] leading-relaxed mt-1">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-sky-500 text-white shadow-sm shadow-sky-500/30 flex-shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Official Email</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs text-[#93C5FD] hover:underline font-bold">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-emerald-500 text-white shadow-sm shadow-emerald-500/30 flex-shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Direct Telephone</p>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-xs text-[#93C5FD] hover:underline font-bold">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Response SLA Box */}
              <div className="pt-4 border-t border-[#0284C7]/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#93C5FD]">
                  <Clock className="w-4 h-4" />
                  <span>24-Hour SLA Response Commitment</span>
                </div>
                <p className="text-[11px] text-[#EFF6FF] leading-relaxed">
                  Every technical inquiry is routed directly to a principal software architect and engagement director for immediate review.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-[10px] text-[#D0E2F7] font-mono">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>NDA & Confidentiality Protected</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
