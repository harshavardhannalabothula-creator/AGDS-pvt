import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Industries from './components/Industries';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Insights from './components/Insights';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Modals
import ServiceModal from './components/Modals/ServiceModal';
import InsightModal from './components/Modals/InsightModal';
import ConsultationModal from './components/Modals/ConsultationModal';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedInsight, setSelectedInsight] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationData, setConsultationData] = useState(null);

  const handleOpenConsultation = (data = null) => {
    setConsultationData(data);
    setIsConsultationOpen(true);
  };

  const handleRequestServiceFromModal = (service) => {
    setSelectedService(null);
    handleOpenConsultation({
      service: service.title,
      scale: 'Core Enterprise Platform',
      timeframe: 'Standard Agile Sprints'
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFCFF] font-sans antialiased text-[#0F172A] flex flex-col selection:bg-[#0284C7] selection:text-white">
      {/* 1. Navigation Header */}
      <Header onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Streamlined Page Content */}
      <main className="flex-grow">
        {/* 2. Hero Section (Includes Interactive Circular Workflow Visual) */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 3. Trusted By Logos & Performance Metrics */}
        <TrustedBy />

        {/* 4. About Us / Who We Are */}
        <AboutUs onOpenConsultation={() => handleOpenConsultation()} />

        {/* 5. What We Do / Services (8 Enterprise Services with Embedded Interactive Capability Surface) */}
        <Services onSelectService={(service) => setSelectedService(service)} />

        {/* 6. Industries We Serve (12 Industries Moving Marquee) */}
        <Industries onOpenConsultation={() => handleOpenConsultation()} />

        {/* 7. Technology & Expertise Stack Matrix */}
        <TechStack />

        {/* 8. Client Testimonials */}
        <Testimonials />

        {/* 9. Contact Section */}
        <ContactSection prefillData={consultationData} />
      </main>

      {/* 11. Multi-Column Corporate Footer */}
      <Footer />

      {/* Modals */}
      <ServiceModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestService={handleRequestServiceFromModal}
      />

      <InsightModal 
        insight={selectedInsight}
        onClose={() => setSelectedInsight(null)}
      />

      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialData={consultationData}
      />
    </div>
  );
}
