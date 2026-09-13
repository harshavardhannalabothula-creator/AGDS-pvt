"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props) => {
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
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-6 sm:p-7 rounded-2xl border border-[#D0E2F7] bg-white shadow-sm hover:shadow-luxury hover:border-[#0284C7] transition-all max-w-sm w-full space-y-4" 
                  key={i}
                >
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-sans font-medium">
                    "{text}"
                  </p>
                  <div className="flex items-center gap-3 pt-3 border-t border-[#E2E8F0]">
                    <img
                      width={44}
                      height={44}
                      src={image}
                      alt={name}
                      className="h-11 w-11 rounded-full object-cover border-2 border-[#0284C7] shadow-xs flex-shrink-0"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";
                      }}
                    />
                    <div className="flex flex-col">
                      <div className="font-heading font-bold text-xs sm:text-sm text-[#0B2545] leading-snug">{name}</div>
                      <div className="text-[11px] text-[#0284C7] font-semibold">{role}</div>
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
