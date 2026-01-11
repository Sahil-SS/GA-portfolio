"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

/* ---------------- ANIMATION PRESETS ---------------- */

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] },
};

/* ---------------- PROJECT CARD ---------------- */

const ProjectCard = ({ title, meta, img, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="group mb-32"
  >
    <div className="relative aspect-[16/9] overflow-hidden bg-zinc-200">
      <motion.img
        src={img}
        alt={title}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
        className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
      />
    </div>

    <div className="mt-6 flex justify-between items-start border-t border-black/10 pt-4">
      <div>
        <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-400">
          {meta}
        </span>
        <h3 className="text-2xl mt-1 font-light">{title}</h3>
      </div>
      <div className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition">
        ↗
      </div>
    </div>
  </motion.div>
);

/* ---------------- PAGE ---------------- */

export default function PortfolioPage() {
  const { scrollYProgress } = useScroll();
  const heroX = useTransform(scrollYProgress, [0, 0.25], [0, -120]);

  return (
    <main className="bg-[#EEEDE9] text-[#111] overflow-hidden font-sans">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-40 flex justify-between p-8 mix-blend-difference text-white">
        <span className="tracking-[0.4em] text-xs uppercase">
          GAUTAM / ARCHITECTURAL CONSULTANT
        </span>
        {/* <span className="tracking-[0.4em] text-xs uppercase">
          Contact
        </span> */}
      </nav>

      {/* HERO */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-7 relative h-[70vh] md:h-auto">
          {/* Main Hero Image - Replace with one of your landmark projects */}
          <Image
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600"
            alt="Architecture"
            fill
            priority
            className="object-cover"
          />
        </div>

        <motion.div
          style={{ x: heroX }}
          className="md:col-span-5 flex flex-col justify-center px-8 md:px-16"
        >
          <h1 className="font-serif text-[clamp(3rem,6vw,5rem)] leading-[1.05]">
            Gautam
            <br />
            <span className="text-zinc-400">Consulting</span>
          </h1>

          <p className="mt-6 text-lg text-[#444] max-w-md uppercase tracking-widest text-sm">
            Civil & Architectural Consultant <br />
            Since 2007
          </p>
        </motion.div>
      </section>

      {/* INTRODUCTION SECTION (The Mind Behind) */}
      <section className="py-32 bg-[#111] text-[#EEEDE9]">
        <motion.div
          {...reveal}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center"
        >
          <div className="md:col-span-5">
             {/* YOUR PORTRAIT IMAGE - Replace the src with your photo */}
            <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-in-out cursor-pointer">
               <Image 
                src="/gautam.jpeg" 
                alt="Gautam - Portrait"
                fill
                className="object-cover "
               />
            </div>
          </div>

          <div className="md:col-span-7">
            <h2 className="font-serif text-4xl leading-tight mb-8">
              The Mind Behind <br />
              the Masterpieces
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                <span className="text-white font-medium">Gautam</span> is a seasoned Civil and Architectural Consultant with a distinguished career spanning over two decades, delivering excellence across a broad spectrum of architectural design in India.
              </p>
              <p>
                His professional journey began in 2007, and since then he has successfully completed <span className="text-white">300+ residential and commercial projects</span>, earning a reputation for precision, innovation, and design integrity.
              </p>
              <p>
                With extensive expertise in luxury residential and high-end commercial architecture, Gautam brings a balanced approach that blends aesthetics, functionality, and structural excellence.
              </p>
              <p>
                Driven by a passion for design and innovation, he has shaped numerous urban landmarks that today stand proudly across multiple cities—defining skylines and elevating living experiences through architecture that inspires.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section className="px-8 md:px-40 py-32">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-black/10 pb-8">
            <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 block">
            Selected Works
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block mt-4 md:mt-0">
                From a Portfolio of 300+ Projects
            </span>
        </div>

        <ProjectCard
          title="Concrete Sanctuary"
          meta="Luxury Residential"
          img="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200"
          delay={0.1}
        />

        <ProjectCard
          title="Minimalist Loft No. 04"
          meta="High-End Commercial"
          img="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200"
          delay={0.2}
        />
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-white text-black py-40 px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-10 italic font-serif">
            &quot;Every project reflects timeless elegance and practical value.&quot;
          </h2>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-[10px]">
            — Gautam&apos;s Design Philosophy
          </p>
        </motion.div>
      </section>

      {/* FOOTER / CONTACT */}
      <section id="contact" className="bg-[#EEEDE9] border-t border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh]">
          
          {/* LEFT SIDE - THE IMAGE */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative h-[50vh] md:h-auto overflow-hidden"
          >
            <Image
              // Replace with an image of one of your best architectural details
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200"
              alt="Architectural Detail"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-in-out"
            />
             {/* Subtle overlay to ensure text next to it pops, if needed. Currently unused but good to have. */}
            <div className="absolute inset-0 bg-black/0" />
          </motion.div>

          {/* RIGHT SIDE - THE CONTACT DETAILS */}
          <motion.div
            {...reveal}
            viewport={{ once: true }}
            className="flex flex-col justify-center p-12 md:p-24 lg:p-32"
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 block mb-8">
              Inquiries
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-16 leading-snug text-[#111]">
              Start the conversation regarding your next project.
            </h2>

            {/* Clean Contact Stack */}
            <div className="space-y-12">
              
              {/* Email Block */}
              <div className="group">
                <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 block mb-3">
                  Email Directly
                </span>
                <a 
                  href="mailto:contact@gautam.com" 
                  className="text-lg md:text-xl tracking-[0.05em] font-light border-b border-black/20 pb-2 group-hover:border-black/60 group-hover:opacity-60 transition-all duration-500"
                >
                  contact@gautam.com
                </a>
              </div>

              {/* Phone Block */}
              <div className="group">
                <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 block mb-3">
                  Call Studio
                </span>
                <a 
                  href="tel:+919876543210" 
                  className="text-lg md:text-xl tracking-[0.05em] font-light border-b border-black/20 pb-2 group-hover:border-black/60 group-hover:opacity-60 transition-all duration-500"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="mt-20 pt-8 border-t border-black/5">
                <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400">
                Based in India — Available Globally
                </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL FOOTER */}
      <footer className="p-10 flex justify-between items-center text-[10px] uppercase tracking-[0.5em] opacity-40">
        <span>EST. 2007</span>
        <span>India</span>
      </footer>
    </main>
  );
}