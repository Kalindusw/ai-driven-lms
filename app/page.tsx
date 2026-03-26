"use client";

import { motion } from "framer-motion";
import {
  Brain,
  GraduationCap,
  LineChart,
  ShieldAlert,
  Sparkles,
  BookOpen,
  Building2,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function Reveal({ children, delay = 0 }: any) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function Card({ icon: Icon, title, text }: any) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition">
      <Icon className="mb-3 h-6 w-6 text-blue-600" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{text}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <Reveal>
          <h1 className="text-5xl font-bold mb-6">
            AI-Driven LMS
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg text-gray-600 max-w-2xl">
            A concept exploring how artificial intelligence can transform
            learning systems into more personalized, adaptive, and effective
            platforms for students and educators.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <button className="mt-6 flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full">
            Explore <ArrowRight size={16} />
          </button>
        </Reveal>
      </section>

      {/* CARDS */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <Reveal>
          <Card
            icon={BookOpen}
            title="Current problem"
            text="Most systems do not adapt to individual learning needs."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <Card
            icon={Brain}
            title="AI potential"
            text="AI can track patterns and personalize learning paths."
          />
        </Reveal>

        <Reveal delay={0.2}>
          <Card
            icon={LineChart}
            title="Impact"
            text="Better engagement and stronger academic outcomes."
          />
        </Reveal>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold mb-6">How it works</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="p-6 border rounded-xl">
              <GraduationCap className="mb-3" />
              <h3 className="font-semibold text-lg">High School</h3>
              <p className="text-gray-600 mt-2">
                Helps teachers identify weak students early and provide support.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-6 border rounded-xl">
              <Sparkles className="mb-3" />
              <h3 className="font-semibold text-lg">University</h3>
              <p className="text-gray-600 mt-2">
                Guides students with personalized learning and course planning.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMPACT */}
      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <Reveal>
          <Card
            icon={LineChart}
            title="Benefits"
            text="Improved outcomes, engagement, and efficiency."
          />
        </Reveal>

        <Reveal delay={0.2}>
          <Card
            icon={ShieldAlert}
            title="Risks"
            text="Privacy concerns and reliance on data."
          />
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm text-gray-500">
        AI-Driven LMS Concept Website
      </footer>
    </main>
  );
}