"use client";
import React from "react";
import { motion } from "framer-motion";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 sm:gap-8 pb-8 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-7 sm:p-8 rounded-3xl border border-[#D0E2F7] bg-white shadow-md hover:shadow-luxury hover:border-[#0284C7] transition-all max-w-md w-full space-y-5" 
                  key={i}
                >
                  <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-sans font-medium">
                    "{text}"
                  </p>
                  <div className="flex items-center gap-3.5 pt-4 border-t border-[#E2E8F0]">
                    <img
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-[#0284C7] shadow-sm flex-shrink-0"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";
                      }}
                    />
                    <div className="flex flex-col">
                      <div className="font-heading font-bold text-sm sm:text-base text-[#0B2545] leading-snug">{name}</div>
                      <div className="text-xs text-[#0284C7] font-semibold">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
