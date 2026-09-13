import React from "react";
import { TestimonialsColumn } from "./testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Anthropic Gen Digital Systems revolutionized our operations, streamlining finance and infrastructure. The cloud platform keeps us productive globally.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing AGDS digital systems was smooth and quick. The high-performance microservices backend made scaling effortless.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The AGDS engineering support team is exceptional, guiding us through cloud cutover and providing continuous monitoring.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This enterprise architecture enhanced our business operations and fleet velocity. Highly recommend AGDS for digital transformation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust AI automation features and quick response times transformed our data workflows, making us significantly more efficient.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth multi-cloud implementation exceeded expectations. It streamlined processes, improving overall enterprise performance.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our analytics and business intelligence capabilities improved dramatically with real-time dashboards and executive visibility.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a digital solution that exceeded expectations, understanding our compliance needs and fortifying security.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using AGDS headless commerce architecture, our platform performance and conversions significantly improved globally.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsDemo = () => {
  return (
    <section className="bg-transparent my-12 relative overflow-hidden">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-3 mb-10"
        >
          <div className="inline-flex items-center gap-2 border border-[#0284C7]/30 bg-[#EFF6FF] px-4 py-1.5 rounded-full text-xs font-bold text-[#0284C7] uppercase tracking-widest">
            TESTIMONIALS & FEEDBACK
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#0B2545] tracking-tight">
            What our clients say
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            See how Anthropic Gen Digital Systems empowers global business leaders.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={16} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={20} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={18} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsDemo;
