"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface ExperienceHeroProps {
  onNavigate: (page: string) => void;
}

export const ExperienceHero: React.FC<ExperienceHeroProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(revealRef.current, 
        { filter: "blur(30px)", opacity: 0, scale: 1.02 },
        { filter: "blur(0px)", opacity: 1, scale: 1, duration: 2.2, ease: "expo.out" }
      );
      
      gsap.from(".command-cell", {
        x: 60, opacity: 0, stagger: 0.1, duration: 1.5, ease: "power4.out", delay: 1, clearProps: "all"
      });

      const handleMouseMove = (e: MouseEvent) => {
        if (!ctaRef.current) return;
        const rect = ctaRef.current.getBoundingClientRect();
        const dist = Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));
        if (dist < 150) {
          gsap.to(ctaRef.current, { x: (e.clientX - (rect.left + rect.width/2)) * 0.4, y: (e.clientY - (rect.top + rect.height/2)) * 0.4, duration: 0.6 });
        } else {
          gsap.to(ctaRef.current, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
        }
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] w-full bg-[#020202] flex flex-col selection:bg-white selection:text-black overflow-hidden font-sans">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-secondary/5 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div ref={revealRef} className="relative z-10 w-full flex flex-col md:flex-row p-8 md:p-14 lg:p-20 min-h-[90vh] items-center md:items-stretch gap-10">
        <div className="flex-1 min-w-0 flex flex-col justify-between pb-12 md:pb-8 w-full">
          <div className="flex items-center gap-3">
             <div className="relative w-2.5 h-2.5 bg-secondary rounded-full">
                <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-30" />
             </div>
             <span className="font-mono text-[11px] font-bold text-white tracking-[0.2em] uppercase">TRADEMARK.APPLY</span>
          </div>

          <div className="max-w-4xl lg:-translate-y-8 pr-12">
            <h1 className="text-[clamp(3rem,8vw,8rem)] font-black leading-[0.87] tracking-tighter text-white uppercase italic-none">
              SECURE <br /> <span className="text-outline">YOUR BRAND</span>
            </h1>
            <p className="mt-8 font-mono text-[11px] text-white/60 uppercase tracking-[0.35em] max-w-lg leading-relaxed">
              Professional Trademark Registration & Legal Protection Services for Modern Businesses.
            </p>
          </div>
          
          <button 
            ref={ctaRef} 
            onClick={() => onNavigate('trademark-registration')}
            className="w-fit flex items-center gap-6 group lg:-translate-y-20 cursor-pointer"
          >
             <div className="w-14 h-14 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-white transition-all duration-500 overflow-hidden bg-white/5 backdrop-blur-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-black stroke-white transition-colors duration-500">
                  <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>
             <span className="font-mono text-[11px] font-bold text-white uppercase tracking-[0.2em]">Start Registration</span>
          </button>
        </div>

        {/* Right Side Deck */}
        <div className="w-full md:w-80 lg:w-96 flex-shrink-0 flex flex-col gap-4 justify-center z-20">
          {[
            { id: "001", title: "STATUS", val: "Online", type: "progress" },
            { id: "002", title: "SUCCESS RATE", val: "98% Wins", type: "data" },
            { id: "003", title: "EXPERTISE", val: "IP Law", type: "text" }
          ].map((item) => (
            <div key={item.id} className="command-cell glass-panel p-6 sm:p-7 block opacity-1 rounded-xl">
              <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest block mb-3">{item.id} // {item.title}</span>
              {item.type === "progress" ? (
                <div className="flex justify-between items-end mt-2">
                  <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tighter">{item.val}</h4>
                  <div className="h-[2px] w-20 bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-secondary w-[100%] animate-loading" />
                  </div>
                </div>
              ) : item.type === "data" ? (
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex justify-between text-[10px] font-mono text-white/50">
                    <span>Registrations</span>
                    <span>10k+</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/10" />
                  <div className="flex justify-between text-[10px] font-mono text-white/50">
                    <span>Client Rating</span>
                    <span>4.9/5</span>
                  </div>
                </div>
              ) : (
                <h3 className="text-sm font-medium text-white/80 mt-3 leading-snug">
                  Transforming legal complexities into <span className="italic text-secondary">simple solutions</span>.
                </h3>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};