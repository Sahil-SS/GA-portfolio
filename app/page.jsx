"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

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

export default function Page() {
  const { scrollYProgress } = useScroll();
  const heroX = useTransform(scrollYProgress, [0, 0.25], [0, -120]);

  return (
    <main className="bg-[#EEEDE9] text-[#111] overflow-hidden font-sans">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-40 flex justify-between p-8 mix-blend-difference text-white">
        <span className="tracking-[0.4em] text-xs uppercase">
          Studio / Arch
        </span>
        <span className="tracking-[0.4em] text-xs uppercase">
          Menu
        </span>
      </nav>

      {/* HERO */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-7 relative h-[70vh] md:h-auto">
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
            Silent
            <br />
            Space
          </h1>

          <p className="mt-6 text-lg text-[#444] max-w-md">
            Architecture and interiors shaped with restraint,
            clarity, and material honesty.
          </p>
        </motion.div>
      </section>

      {/* STATEMENT */}
      <section className="py-32 bg-[#111] text-[#EEEDE9]">
        <motion.div
          {...reveal}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16"
        >
          <h2 className="font-serif text-4xl leading-tight">
            Design that feels
            <br />
            inevitable
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Space, light, and structure are treated as one
            system — never decoration, always intention.
          </p>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section className="px-8 md:px-40 py-32">
        <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 block mb-20">
          Selected Works
        </span>

        <ProjectCard
          title="Concrete Sanctuary"
          meta="Architecture — Zurich"
          img="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200"
          delay={0.1}
        />

        <ProjectCard
          title="Minimalist Loft No. 04"
          meta="Interior — London"
          img="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200"
          delay={0.2}
        />

        <ProjectCard
          title="Shadow & Timber Villa"
          meta="Residential — Kyoto"
          img="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1200"
          delay={0.3}
        />
      </section>

      {/* DETAIL PHILOSOPHY */}
      <section className="bg-black text-white py-40 px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-extralight leading-tight mb-10">
            “God is in the{" "}
            <span className="italic font-serif text-zinc-400">
              details
            </span>.”
          </h2>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs">
            — Mies van der Rohe
          </p>
        </motion.div>
      </section>

      {/* FULL BLEED CTA */}
      <section className="relative h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600"
          alt="Final space"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          {...reveal}
          viewport={{ once: true }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6"
        >
          <h2 className="font-serif text-4xl mb-6">
            Let’s Build
            <br />
            Something Timeless
          </h2>
          <a
            href="mailto:studio@email.com"
            className="border border-white px-6 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
          >
            studio@email.com
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="p-10 flex justify-between items-center text-[10px] uppercase tracking-[0.5em] opacity-40">
        <span>EST. 2026</span>
        <span>New York</span>
      </footer>
    </main>
  );
}
