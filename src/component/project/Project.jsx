import React from "react";
import { ExternalLink, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

import SkillsZoneAcademy from "../../assets/Skills-Zone-Academy.png";
import taskApp from "../../assets/body.png";
import socialDashboard from "../../assets/body.png";
import weather from "../../assets/body.png";
import portfolio from "../../assets/body.png";
import collaboration from "../../assets/body.png";

const projects = [
    {
        title: "Skills-Zone-Academy",
        description:
            "A full-featured platform for excelling in competitive exams.",
        image: SkillsZoneAcademy,
        technologies: ["React", "TailwindCss", "Python", "MongoDB"],
        live: "https://skill-zone-academy.vercel.app/",
        github: "https://github.com/shubhamsinghkumar9-debug/SKills_Zone_Academy",
        projectLink: "/project/skillzonesacademy",
    },

];

const Project = () => {
    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section
            id="work"
            className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#020617]
        px-5
        py-20
        text-white
        sm:px-8
        lg:px-12
      "
        >

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="
            absolute
            left-1/2
            top-20
            h-[350px]
            w-[350px]
            -translate-x-1/2
            rounded-full
            bg-blue-600/5
            blur-[120px]
          "
                />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl">
                {/* Heading */}
                <div className="mb-12 text-center">
                    <h2
                        className="
              text-3xl
              font-bold
              tracking-tight
              text-slate-100
              sm:text-4xl
            "
                    >
                        My{" "}
                        <span
                            className="
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-purple-500
                bg-clip-text
                text-transparent
              "
                        >
                            Projects
                        </span>
                    </h2>

                    {/* Gradient underline */}
                    <div
                        className="
              mx-auto
              mt-3
              h-[3px]
              w-16
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
            "
                    />
                </div>

                {/* Projects Grid */}
                <div
                    className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
                >
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            onClick={() => navigate(project.projectLink)}
                            className="
                group
                overflow-hidden
                rounded-xl
                border
                border-white/5
                bg-[#111c31]
                shadow-[0_10px_35px_rgba(0,0,0,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/10
                hover:shadow-[0_15px_45px_rgba(0,0,0,0.4)]
              "
                        >

                            <div className="relative h-[145px] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                                />


                                <div
                                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#111c31]/40
                    to-transparent
                  "
                                />
                            </div>


                            <div className="p-5">
                                <h3
                                    className="
                    text-[17px]
                    font-bold
                    tracking-tight
                    text-slate-100
                  "
                                >
                                    {project.title}
                                </h3>

                                <p
                                    className="
                    mt-2
                    min-h-[48px]
                    text-[13px]
                    leading-5
                    text-slate-400
                  "
                                >
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="
                        rounded-full
                        border
                        border-white/5
                        bg-slate-700/70
                        px-2.5
                        py-1
                        text-[11px]
                        font-medium
                        text-slate-200
                      "
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="mt-4 flex items-center gap-4">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                      flex
                      items-center
                      gap-1
                      text-[13px]
                      font-medium
                      text-cyan-400
                      transition-colors
                      hover:text-cyan-300
                    "
                                    >
                                        <ExternalLink size={14} />
                                        Live Demo
                                    </a>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                                flex
                                                items-center
                                                gap-1
                                                text-[13px]
                                                font-medium
                                                text-cyan-400
                                                transition-colors
                                                hover:text-cyan-300
                                                "
                                    >
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                    flex
                                                    items-center
                                                    gap-1
                                                    text-[13px]
                                                    font-medium
                                                    text-cyan-400
                                                    transition-colors
                                                    hover:text-cyan-300
  "
                                        >
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                                            </svg>

                                            Code
                                        </a>
                                        Code
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Scroll To Top */}
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="
          fixed
          bottom-5
          right-6
          z-50
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-cyan-500
          text-white
          shadow-lg
          shadow-cyan-500/20
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-cyan-400
          lg:right-7
        "
            >
                <ArrowUp size={18} />
            </button>
        </section>
    );
};

export default Project;