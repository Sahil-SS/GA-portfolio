"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function Page() {
  return (
    <main className="bg-[#EEEDE9] text-[#111] overflow-hidden">
      {/* HERO GRID */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-7 relative h-[70vh] md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop"
            alt="Architecture exterior"
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.div
          {...reveal}
          viewport={{ once: true }}
          className="md:col-span-5 flex flex-col justify-center px-8 md:px-16"
        >
          <h1 className="font-serif text-[clamp(3rem,5vw,4.5rem)] leading-tight">
            Architecture
            <br />
            & Interior Design
          </h1>

          <p className="mt-6 text-lg text-[#444]">
            Calm, material-driven spaces designed
            with clarity, restraint, and purpose.
          </p>
        </motion.div>
      </section>

      {/* IMAGE MOSAIC */}
      <section className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-4 relative h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200&auto=format&fit=crop"
            alt="Minimal interior"
            fill
            className="object-cover"
          />
        </div>

        <div className="md:col-span-4 relative h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
            alt="Interior material detail"
            fill
            className="object-cover"
          />
        </div>

        <div className="md:col-span-4 relative h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop"
            alt="Modern exterior"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* STATEMENT */}
      <section className="py-32 bg-[#111] text-[#EEEDE9]">
        <motion.div
          {...reveal}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          <h2 className="font-serif text-4xl leading-tight">
            Design that feels
            <br />
            inevitable
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed">
            We approach architecture and interiors
            as one continuous process — where space,
            light, and material work together quietly.
          </p>
        </motion.div>
      </section>

      {/* OFFSET IMAGES */}
      <section className="py-40 bg-[#EEEDE9]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div
            {...reveal}
            viewport={{ once: true }}
            className="md:col-span-5 relative h-[520px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop"
              alt="Living space interior"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            {...reveal}
            viewport={{ once: true }}
            className="md:col-span-6 md:col-start-7"
          >
            <h3 className="font-serif text-3xl mb-6">
              Interior & Execution
            </h3>
            <p className="text-[#444] text-lg leading-relaxed">
              From structure to finishes, every decision
              is considered as part of a whole — not
              as isolated elements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FULL BLEED END */}
      <section className="relative h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop"
          alt="Architectural space ending"
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
    </main>
  );
}
