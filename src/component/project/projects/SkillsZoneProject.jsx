
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  GitBranch,
  CheckCircle2,
  Code2,
  Database,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";



import homeImg from "../../../assets/Skills-Zone-Academy.png"
import coursesImg from "../../../assets/skill_course.png"
import dashboardImg from "../../../assets/admin_overview.png"
import admin_analytics from "../../../assets/admin_analytics.png"
import admin_couse from "../../../assets/admin_couse.png"
import skill_about from "../../../assets/skill_about.png"
import skill_review from "../../../assets/skill_review.png"
import skill_student from "../../../assets/skill_student.png"


const screenshots = [
  {
    image: homeImg,
    title: "Homepage",
    description: "Landing page with courses and platform highlights.",
  },
  {
    image: coursesImg,
    title: "Courses Page",
    description: "Explore available courses and learning content.",
  },
  {
    image: dashboardImg,
    title: "Admin Dashboard",
    description: "Dashboard for managing learning progress.",
  },
  {
    image: admin_analytics,
    title: "admin_analytics",
    description: "admin analytics and course management interface.",
  },
  {
    image: admin_couse,
    title: "admin_courses",
    description: "admin can add delete courses.",
  },
  {
    image: skill_about,
    title: "About",
    description: "About .",
  },
  {
    image: skill_review,
    title: "Reviews",
    description: "Reviews of students.",
  },
  {
    image: skill_student,
    title: "Student Dashboard",
    description: "Student dashboard for managing learning progress.",
  },
];

const technologies = [
  {
    name: "React",
    description: "Interactive frontend and reusable components.",
    icon: <Code2 size={22} />,
  },
  {
    name: "Tailwind CSS",
    description: "Responsive layouts and modern styling.",
    icon: <Layers size={22} />,
  },
  {
    name: "Python",
    description: "Backend logic and API development.",
    icon: <Sparkles size={22} />,
  },
  {
    name: "MongoDB",
    description: "Database for storing application data.",
    icon: <Database size={22} />,
  },
];

const features = [
  "Responsive and modern user interface",
  "User authentication and account management",
  "Course browsing and learning experience",
  "Backend API integration",
  "Database-backed application",
  "Reusable React components",
];

export default function SkillsZoneProject() {
  const [selectedImage, setSelectedImage] = useState(null);

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">



      {/* MAIN */}
      <main className="mx-auto max-w-6xl px-6 py-12 md:py-20">

        {/* BACK BUTTON */}
        <Link
          to="/project"
          className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        {/* HERO */}
        <section className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <Sparkles size={16} />
              Featured Project
            </div>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Skills-Zone-
              <span className="text-cyan-400">Academy</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              A full-featured learning platform designed to help
              students improve their technical skills and prepare
              for competitive examinations.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {["React", "Tailwind CSS", "Python", "MongoDB"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="https://skill-zone-academy.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Live Demo
                <ExternalLink size={18} />
              </a>

              <a
                href="https://github.com/shubhamsinghkumar9-debug/SKills_Zone_Academy"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <GitBranch size={18} />
                Source Code
              </a>

            </div>

          </div>

          {/* HERO IMAGE */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-3 shadow-2xl shadow-cyan-950/30">
            <img
              src={homeImg}
              alt="Skills-Zone-Academy homepage"
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>

        </section>

        {/* DIVIDER */}
        <div className="my-20 h-px bg-white/10" />

        {/* ABOUT PROJECT */}
        <section>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About The Project
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Building a better learning experience.
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">

            <p className="leading-8 text-slate-400">
              Skills-Zone-Academy is a web-based learning platform
              that brings educational resources and technical
              preparation into a single application.
            </p>

            <p className="leading-8 text-slate-400">
              The project combines a modern frontend with backend
              services and database integration to provide an
              interactive and scalable learning experience.
            </p>

          </div>

        </section>

        {/* FEATURES */}
        <section className="mt-20">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Key Features
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            What I built
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <CheckCircle2
                  className="mb-4 text-cyan-400"
                  size={24}
                />

                <p className="text-sm leading-6 text-slate-300">
                  {feature}
                </p>
              </div>
            ))}

          </div>

        </section>

        {/* TECHNOLOGIES */}
        <section className="mt-20">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Tech Stack
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Technologies I used
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">

            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6"
              >

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  {tech.icon}
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    {tech.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {tech.description}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </section>

        {/* SCREENSHOTS */}
        <section className="mt-20">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Project Showcase
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Explore the interface
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Explore different sections of Skills-Zone-Academy.
            Click any screenshot to view it in full size.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {screenshots.map((screen, index) => (
              <button
                key={screen.title}
                type="button"
                onClick={() => setSelectedImage(index)}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 text-left transition hover:-translate-y-1 hover:border-cyan-400/50"
              >

                <div className="overflow-hidden">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">

                  <h3 className="text-lg font-bold">
                    {screen.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {screen.description}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-cyan-400">
                    View Screenshot →
                  </p>

                </div>

              </button>
            ))}

          </div>

        </section>

        {/* PROJECT WORKFLOW */}
        <section className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 p-8 md:p-12">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Development Process
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            From idea to application.
          </h2>

          <div className="mt-8 space-y-6">

            {[
              ["01", "Planning", "Defined the platform goals and user experience."],
              ["02", "Frontend Development", "Built responsive pages using React and Tailwind CSS."],
              ["03", "Backend Integration", "Connected APIs and application functionality."],
              ["04", "Database", "Integrated data storage for application requirements."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="flex gap-5"
              >

                <span className="text-sm font-bold text-cyan-400">
                  {number}
                </span>

                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {description}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </section>

        {/* CTA */}
        <section className="py-20 text-center">

          <h2 className="text-3xl font-bold md:text-5xl">
            Let's build something
            <span className="text-cyan-400"> amazing.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            Interested in my work? Explore the live project or
            check out the source code.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <a
              href="https://skill-zone-academy.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 font-bold text-slate-900 transition hover:bg-cyan-300"
            >
              View Live Demo
            </a>

            <a
              href="https://github.com/shubhamsinghkumar9-debug/SKills_Zone_Academy"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-bold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>

          </div>

        </section>

      </main>

      {/* IMAGE LIGHTBOX */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Close screenshot"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={previousImage}
            className="absolute left-3 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:left-8"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="max-h-[85vh] max-w-5xl">

            <img
              src={screenshots[selectedImage].image}
              alt={screenshots[selectedImage].title}
              className="max-h-[75vh] max-w-full rounded-xl object-contain"
            />

            <p className="mt-4 text-center font-semibold">
              {screenshots[selectedImage].title}
            </p>

          </div>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-3 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:right-8"
            aria-label="Next screenshot"
          >
            <ChevronRight size={24} />
          </button>

        </div>
      )}

    </div>
  );
}