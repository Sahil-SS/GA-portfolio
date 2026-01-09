"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// --- Custom Cursor ---
const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => setHovered(!!e.target.closest(".hover-trigger"));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-orange-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: pos.x - 12,
        y: pos.y - 12,
        scale: hovered ? 3 : 1,
      }}
      transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
    />
  );
};

// --- Main Page ---
export default function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Animations
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="bg-[#0f0f0f] text-[#e0e0e0] font-sans overflow-x-hidden selection:bg-orange-500">
      <Cursor />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between p-8 items-center pointer-events-none">
        <div className="text-xl font-bold tracking-tighter pointer-events-auto hover-trigger cursor-pointer">
          ARCH.STUDIO
        </div>
        <div className="flex gap-12 text-[10px] tracking-[0.3em] font-medium pointer-events-auto uppercase">
          <span className="hover-trigger cursor-pointer hover:text-orange-500 transition">Work</span>
          <span className="hover-trigger cursor-pointer hover:text-orange-500 transition">About</span>
          <span className="hover-trigger cursor-pointer hover:text-orange-500 transition">Contact</span>
        </div>
      </nav>

      {/* Hero Section: Split Screen Kinetic */}
      <section className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden">
          
          {/* Left: Huge Vertical Text */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center p-12 border-r border-white/10">
            <motion.div style={{ scale }}>
              <h1 className="text-[12vw] md:text-[8vw] font-black leading-none tracking-tighter uppercase italic">
                Raw <br />
                <span className="text-orange-500 not-italic">Form</span> <br />
                2026
              </h1>
            </motion.div>
          </div>

          {/* Right: Parallax Image Window */}
          <div className="w-full md:w-1/2 h-full relative p-12 flex items-center justify-center">
            <motion.div 
              style={{ rotate }}
              className="relative w-full aspect-[3/4] md:w-[70%] bg-zinc-800 overflow-hidden rounded-sm shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=1200" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Architecture"
              />
            </motion.div>
            
            <div className="absolute bottom-20 left-10 max-w-xs">
              <p className="text-xs uppercase tracking-widest text-zinc-500 leading-relaxed">
                Brutalism meets modern warmth. <br />
                We design spaces that demand presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Text Marquee: Kinetic movement */}
      <section className="py-20 border-y border-white/10 overflow-hidden whitespace-nowrap bg-white text-black">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="text-[10vw] font-black uppercase tracking-tighter"
        >
          Structure • Material • Light • Purpose • Structure • Material • Light • Purpose •
        </motion.div>
      </section>

      {/* Works Grid: Asymmetric & Gritty */}
      <section className="py-40 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Project 01 */}
          <motion.div 
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            className="md:col-span-7 group hover-trigger cursor-pointer"
          >
            <div className="relative overflow-hidden mb-6 aspect-video bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute top-4 left-4 bg-orange-500 text-black px-3 py-1 text-xs font-bold italic">01 / RECO</div>
            </div>
            <h3 className="text-4xl font-bold tracking-tighter uppercase italic">The Concrete Monolith</h3>
            <p className="text-zinc-500 text-sm mt-2 tracking-widest uppercase">Berlin • 2024</p>
          </motion.div>

          {/* Project 02 */}
          <motion.div 
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            className="md:col-span-4 md:col-start-9 md:mt-40 group hover-trigger cursor-pointer"
          >
            <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1448630359122-06170664a274?q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute top-4 left-4 bg-orange-500 text-black px-3 py-1 text-xs font-bold italic">02 / LAB</div>
            </div>
            <h3 className="text-4xl font-bold tracking-tighter uppercase italic">Void House</h3>
            <p className="text-zinc-500 text-sm mt-2 tracking-widest uppercase">Tokyo • 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Footer: Brutalist Contact */}
      <footer className="bg-orange-500 text-black py-40 px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-[12vw] font-black leading-none uppercase tracking-tighter italic mb-20 hover-trigger">
            Let&apos;s <br /> Build.
          </h2>
          <div className="w-full flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.3em] font-bold mb-4">Contact Studio</p>
              <a href="#" className="text-4xl font-light hover-trigger">hello@arch.studio</a>
            </div>
            <div className="text-right flex gap-8 font-black uppercase tracking-widest italic">
              <span className="hover-trigger">IG</span>
              <span className="hover-trigger">TW</span>
              <span className="hover-trigger">LI</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap');
        
        body {
          margin: 0;
          font-family: 'Space Grotesk', sans-serif;
          background-color: #0f0f0f;
        }

        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: #0f0f0f;
        }
        ::-webkit-scrollbar-thumb {
          background: #ff5e00;
        }

        * {
          cursor: none !important;
        }

        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
          .fixed {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}