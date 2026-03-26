"use client";

import type { ElementType, ReactNode } from "react";
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

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <div
      className="opacity-0 translate-y-10 animate-[fadeUp_0.7s_ease-out_forwards]"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-slate-600 sm:text-lg">{text}</p>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  icon: ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="leading-7 text-slate-600">{text}</p>
    </div>
  );
}

export default function AILmsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 text-slate-900">
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.14),transparent_25%),linear-gradient(to_bottom,white,rgba(239,246,255,0.7))]" />

        <div className="mx-auto flex max-w-7xl flex-col px-6 pb-20 pt-8 sm:px-8 lg:px-12">
          <header className="mb-16 flex items-center justify-between rounded-full border border-white/60 bg-white/70 px-5 py-3 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide text-slate-900">
                  AI-Driven LMS
                </p>
                <p className="text-xs text-slate-500">
                  Personalized learning, reimagined
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
              <a href="#idea" className="transition hover:text-slate-900">
                About
              </a>
              <a href="#how-it-works" className="transition hover:text-slate-900">
                How it Works
              </a>
              <a href="#impact" className="transition hover:text-slate-900">
                Impact
              </a>
              <a href="#future" className="transition hover:text-slate-900">
                Future
              </a>
            </nav>
          </header>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  <Sparkles className="h-4 w-4" />
                  A modern educational concept website
                </div>

                <div className="space-y-5">
                  <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                    Understanding the future of
                    <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-600 bg-clip-text text-transparent">
                      AI-driven learning systems
                    </span>
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                    This website explores how artificial intelligence can transform learning management systems into more adaptive,
                    personalized, and supportive platforms for both schools and universities.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#idea"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    Explore the idea
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900"
                  >
                    See how it works
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-blue-200/40 blur-3xl" />
                <div className="absolute -right-8 bottom-0 h-36 w-36 rounded-full bg-cyan-200/50 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-500">Core Vision</p>
                      <h3 className="text-2xl font-bold text-slate-900">Adaptive education</h3>
                    </div>
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Tracks progress across time",
                      "Identifies weak areas early",
                      "Suggests better learning paths",
                      "Supports teachers and students differently",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                        <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                        <p className="text-sm font-medium text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-900 p-5 text-white">
                      <p className="text-sm text-slate-300">High school</p>
                      <p className="mt-2 text-xl font-semibold">Teacher-facing guidance</p>
                    </div>
                    <div className="rounded-2xl bg-blue-600 p-5 text-white">
                      <p className="text-sm text-blue-100">University</p>
                      <p className="mt-2 text-xl font-semibold">Student-facing personalization</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <InfoCard
              icon={BookOpen}
              title="Why current systems fall short"
              text="Most learning platforms manage courses well, but they do not deeply adapt to each student's pace, strengths, and long-term development."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <InfoCard
              icon={Brain}
              title="What AI changes"
              text="AI can analyse patterns in student progress, highlight gaps early, and recommend more relevant support instead of giving everyone the same experience."
            />
          </Reveal>
          <Reveal delay={0.2}>
            <InfoCard
              icon={LineChart}
              title="Why this matters"
              text="A better LMS can improve engagement, strengthen educational outcomes, and make the transition from high school to university smoother and smarter."
            />
          </Reveal>
        </div>
      </section>

      <section id="idea" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionTitle
              eyebrow="About the idea"
              title="More than a course platform"
              text="An AI-driven LMS would not just store course material and grades. It would actively help interpret student performance, personalize support, and create more useful academic guidance over time."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-6 sm:grid-cols-2">
              <InfoCard
                icon={Brain}
                title="Traditional LMS"
                text="Mainly focuses on course delivery, announcements, assignment submission, and grade tracking."
              />
              <InfoCard
                icon={Sparkles}
                title="AI-driven LMS"
                text="Adds prediction, personalization, learning recommendations, and continuous improvement based on student data."
              />
              <InfoCard
                icon={GraduationCap}
                title="Personalization"
                text="Supports different needs, abilities, learning speeds, and academic goals instead of treating students as one group."
              />
              <InfoCard
                icon={Building2}
                title="Institutional value"
                text="Helps schools and universities make better interventions, manage outcomes, and allocate support more effectively."
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <SectionTitle
              eyebrow="How it works"
              title="One system, two stages of learning"
              text="The same core platform could behave differently depending on where the learner is in their academic journey."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Stage 1</p>
                <h3 className="text-3xl font-bold">High school support</h3>
                <p className="mt-4 leading-8 text-slate-300">
                  At school level, the system could work more in the background for teachers. It could identify struggling students,
                  detect patterns in attendance or grades, and recommend targeted intervention before problems become severe.
                </p>
                <ul className="mt-6 space-y-3 text-slate-200">
                  <li>• Early identification of weak areas</li>
                  <li>• Teacher-facing dashboards and alerts</li>
                  <li>• Suggested study paths and support actions</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Stage 2</p>
                <h3 className="text-3xl font-bold">University personalization</h3>
                <p className="mt-4 leading-8 text-cyan-50/90">
                  At university level, the same platform could become more student-facing. It could guide learners through content,
                  help them self-manage, and personalize recommendations based on their goals, behaviour, and academic progress.
                </p>
                <ul className="mt-6 space-y-3 text-cyan-50/95">
                  <li>• Personalized learning recommendations</li>
                  <li>• Smarter academic planning support</li>
                  <li>• More independent, adaptive learning journeys</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="impact" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionTitle
              eyebrow="Impact"
              title="Benefits for education and management"
              text="This idea is not only educational. It also matters from a business and institutional perspective, because implementation decisions affect cost, privacy, operations, and long-term value."
            />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal>
              <InfoCard
                icon={LineChart}
                title="Benefits"
                text="Better engagement, stronger support, earlier intervention, and more efficient use of institutional resources."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <InfoCard
                icon={ShieldAlert}
                title="Risks"
                text="Privacy issues, algorithmic bias, dependence on data quality, and the possibility of over-relying on automation."
              />
            </Reveal>
            <Reveal delay={0.2}>
              <InfoCard
                icon={Building2}
                title="Costs"
                text="Development, system integration, staff training, data protection compliance, and long-term maintenance."
              />
            </Reveal>
            <Reveal delay={0.3}>
              <InfoCard
                icon={Sparkles}
                title="Strategic value"
                text="Institutions that implement adaptive systems well may improve outcomes and build a more future-ready learning environment."
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-blue-50/70 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <SectionTitle
              eyebrow="Current landscape"
              title="Existing platforms already show pieces of this future"
              text="Tools like Canvas, Blackboard, DreamBox, Knewton, and Brightspace demonstrate that the building blocks already exist. The opportunity is to connect these ideas into a more unified and personalized learning model."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {[
              "Canvas",
              "Blackboard",
              "DreamBox",
              "Knewton",
              "Brightspace",
            ].map((tool, index) => (
              <Reveal key={tool} delay={index * 0.06}>
                <div className="rounded-3xl border border-blue-100 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-lg font-semibold text-slate-900">{tool}</p>
                  <p className="mt-2 text-sm text-slate-500">Partial building block</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="future" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionTitle
              eyebrow="Looking ahead"
              title="The future of AI in education will likely be adaptive, connected, and continuous"
              text="As institutions improve their ability to collect and interpret learning data responsibly, AI-powered platforms could become central to how education is delivered, supported, and improved over time."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Key takeaway</p>
              <p className="mt-4 text-2xl font-bold leading-tight text-slate-900">
                AI should not replace education.
                <span className="block text-blue-600">It should make education more responsive and effective.</span>
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-slate-200 via-blue-300 to-slate-200" />
              <p className="mt-6 leading-7 text-slate-600">
                The strongest version of this idea combines analytics, personalization, and human support — rather than automation alone.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-10 text-sm text-slate-500 sm:px-8 lg:px-12 md:flex-row md:items-center md:justify-between">
          <p>AI-Driven LMS Concept Website</p>
          <p>Built as a modern explainer-style academic website</p>
        </div>
      </footer>
    </main>
  );
}