"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectCard = ({ title, category, img, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="group relative w-full mb-32"
  >
    <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100">
      <motion.img 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        src={img} 
        alt={title}
        className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
      />
    </div>
    <div className="mt-6 flex justify-between items-start border-t border-black/10 pt-4">
      <div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">{category}</span>
        <h3 className="text-2xl font-light tracking-tight mt-1">{title}</h3>
      </div>
      <div className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-500">
        ↗
      </div>
    </div>
  </motion.div>
);

export default function ArchitectPortfolio() {
  const { scrollYProgress } = useScroll();
  const titleX = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <main className="bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-zinc-800 selection:text-white">
      
      {/* Subtle Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Header */}
      <nav className="fixed top-0 w-full z-40 flex justify-between p-8 mix-blend-difference text-white">
        <span className="font-medium tracking-[0.4em] text-xs uppercase">Studio / Ar—ch</span>
        <span className="font-medium tracking-[0.4em] text-xs uppercase">Menu</span>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-end p-8 md:p-20 overflow-hidden">
        <div className="absolute top-20 right-20 w-1/3 aspect-[3/4] z-0 opacity-20 md:opacity-100">
             <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000" className="w-full h-full object-cover" alt="interior" />
        </div>

        <motion.div style={{ x: titleX }} className="relative z-10">
          <h1 className="text-[15vw] leading-[0.8] font-light tracking-tighter inline-block">
            SILENT <br /> 
            <span className="italic serif-font ml-[10vw]">SPACE</span>
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-end mt-20 gap-8">
            <p className="max-w-sm text-sm leading-relaxed text-zinc-500 uppercase tracking-wider">
                Specializing in luxury residential architecture and bespoke interior curation. Every line has a purpose.
            </p>
            <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase tracking-[0.5em] mb-4">Explore Work</span>
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-[1px] h-20 bg-black/20" 
                />
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-8 md:px-40 py-20">
        <div className="mb-40">
            <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 block mb-10">Selected Works 2024—2026</span>
            <ProjectCard 
                title="The Concrete Sanctuary" 
                category="Architecture • Zurich" 
                img="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200"
                delay={0.1}
            />
            <ProjectCard 
                title="Minimalist Loft No. 04" 
                category="Interior • London" 
                img="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200"
                delay={0.2}
            />
            <ProjectCard 
                title="Shadow & Timber Villa" 
                category="Residential • Kyoto" 
                img="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1200"
                delay={0.3}
            />
        </div>
      </section>

      {/* Eye for Detail Section */}
      <section className="bg-black text-white py-40 px-8 flex flex-col items-center justify-center text-center">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="max-w-3xl"
        >
            <h2 className="text-4xl md:text-6xl font-extralight leading-tight mb-10">
                &quot;God is in the <span className="italic font-serif text-zinc-400">details</span>.&quot;
            </h2>
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs">— Ludwig Mies van der Rohe</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="p-10 flex justify-between items-center text-[10px] uppercase tracking-[0.5em] opacity-40">
        <span>EST. 2026</span>
        <a href="mailto:contact@studio.com" className="hover:opacity-100 transition-opacity underline decoration-zinc-300 underline-offset-8">Get in touch</a>
        <span>Based in NY</span>
      </footer>

      {/* Internal Styles to ensure fonts work even if globals are missing */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:italic&display=swap');
        .serif-font {
          font-family: 'Instrument Serif', serif;
        }
      `}</style>
    </main>
  );
}