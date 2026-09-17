import React from 'react';
import {
  ArrowUpRight,
  Download,
  Calendar,
  Code2,
  Smile,
  Trophy,
  UserRound,
  Atom,
  Hexagon,
  Wind,
  GitBranch
} from 'lucide-react';

import shubham from '../../assets/shubham.png'
import ScrollArrow from '../button/ScrollArrow';

// --- Small tech-badge icon used in the hero "technologies" row ---
const TechBadge = ({ bg, children }) => (
  <div
    className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold ${bg}`}
  >
    {children}
  </div>
);

const technologies = [
  { key: 'html', node: <TechBadge bg="bg-orange-600 text-white">5</TechBadge> },
  { key: 'css', node: <TechBadge bg="bg-blue-600 text-white">3</TechBadge> },
  { key: 'js', node: <TechBadge bg="bg-yellow-400 text-black">JS</TechBadge> },
  { key: 'ts', node: <TechBadge bg="bg-blue-500 text-white">TS</TechBadge> },
  {
    key: 'react',
    node: (
      <TechBadge bg="bg-[#111827] text-cyan-400 border border-gray-700">
        <Atom size={20} strokeWidth={2} />
      </TechBadge>
    )
  },
  {
    key: 'node',
    node: (
      <TechBadge bg="bg-green-600 text-white">
        <Hexagon size={20} strokeWidth={2} />
      </TechBadge>
    )
  },
  {
    key: 'git',
    node: (
      <TechBadge bg="bg-orange-500 text-white">
        <GitBranch size={20} strokeWidth={2} />
      </TechBadge>
    )
  }
];

// --- Skills data ---
const skillColumns = [
  [
    { name: 'HTML', pct: 95, icon: <TechBadge bg="bg-orange-600 text-white text-xs !w-8 !h-8">5</TechBadge> },
    { name: 'CSS', pct: 90, icon: <TechBadge bg="bg-blue-600 text-white text-xs !w-8 !h-8">3</TechBadge> },
    { name: 'JavaScript', pct: 90, icon: <TechBadge bg="bg-yellow-400 text-black text-xs !w-8 !h-8">JS</TechBadge> }
  ],
  [
    {
      name: 'React.js',
      pct: 85,
      icon: (
        <TechBadge bg="bg-[#111827] text-cyan-400 border border-gray-700 !w-8 !h-8">
          <Atom size={16} strokeWidth={2} />
        </TechBadge>
      )
    },
    { name: 'Next.js', pct: 80, icon: <TechBadge bg="bg-black text-white border border-gray-700 !w-8 !h-8">N</TechBadge> },
    { name: 'MongoDB', pct: 75, icon: <TechBadge bg="bg-blue-500 text-white text-xs !w-8 !h-8">M</TechBadge> }
  ],
  [
    {
      name: 'Node.js',
      pct: 80,
      icon: (
        <TechBadge bg="bg-green-600 text-white !w-8 !h-8">
          <Hexagon size={16} strokeWidth={2} />
        </TechBadge>
      )
    },
    {
      name: 'Tailwind CSS',
      pct: 90,
      icon: (
        <TechBadge bg="bg-cyan-500 text-white !w-8 !h-8">
          <Wind size={16} strokeWidth={2} />
        </TechBadge>
      )
    },
    {
      name: 'Git',
      pct: 85,
      icon: (
        <TechBadge bg="bg-orange-500 text-white !w-8 !h-8">
          <GitBranch size={16} strokeWidth={2} />
        </TechBadge>
      )
    }
  ]
];

const stats = [
  { icon: Calendar, value: '4+', label: 'Years Experience' },
  { icon: Code2, value: '50+', label: 'Projects Completed' },
  { icon: Smile, value: '30+', label: 'Happy Clients' },
  { icon: Trophy, value: '100%', label: 'Client Satisfaction' }
];

const Portfolio = () => {
  return (
    <div className="bg-[#08080f] text-white">
      {/* ---------------- HERO ---------------- */}
      <section className="px-6 md:px-16 pt-16 pb-20  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <span className="inline-block text-[11px] font-semibold tracking-wide uppercase text-purple-300 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-1.5 mb-6">
              WEB DEVELOPER
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-1">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                SHUBHAM
              </span>
            </h1>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
              I build things for the web.
            </h2>

            <p className="text-gray-400 text-[15px] leading-relaxed max-w-md mb-8">
              I'm a passionate web developer specializing in building
              exceptional digital experiences with modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-colors duration-200 text-white text-sm font-medium rounded-lg px-6 py-3"
              >
                View My Work
                <ArrowUpRight size={16} strokeWidth={2.25} />
              </a>
              <a
                href="#resume"
                className="inline-flex items-center gap-2 border border-gray-700 hover:border-gray-500 transition-colors duration-200 text-white text-sm font-medium rounded-lg px-6 py-3"
              >
                Download CV
                <Download size={16} strokeWidth={2.25} />
              </a>
            </div>

            <div>
              <p className="text-[11px] font-semibold tracking-wide uppercase text-gray-500 mb-4">
                Technologies I work with
              </p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((t) => (
                  <React.Fragment key={t.key}>{t.node}</React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - portrait + decoration */}
          <div className="relative flex  justify-center md:justify-end">
            <div className="absolute w-72 right-8 h-72 md:w-96 md:h-80 rounded-full bg-gradient-to-br from-purple-600/40 to-blue-600/30 blur-2xl" />

            <div className="relative w-64 right-8 sm:w-96 md:w-96">
              <img
                src={shubham}
                alt="Portrait of Shubham"
                className="relative z-10 w-full rounded-2xl object-cover"
              />

              {/* Floating code card */}
              <div className="hidden sm:block absolute -right-2 md:-right-23 top-16 z-20 w-56 bg-[#0d0d18] border border-gray-800 rounded-xl p-4 shadow-2xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] text-gray-400 flex items-center gap-1.5">
                    <Code2 size={13} /> Code
                  </span>
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <pre className="text-[11px] leading-relaxed font-mono whitespace-pre-wrap">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">developer</span>{' '}
                  <span className="text-gray-400">= {'{'}</span>
                  {'\n  '}
                  <span className="text-cyan-300">name</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-orange-300">"Shubham"</span>
                  <span className="text-gray-400">,</span>
                  {'\n  '}
                  <span className="text-cyan-300">skills</span>
                  <span className="text-gray-400">: [</span>
                  <span className="text-orange-300">"HTML"</span>
                  <span className="text-gray-400">, </span>
                  <span className="text-orange-300">"CSS"</span>
                  <span className="text-gray-400">,</span>
                  <span className="text-orange-300">"JavaScript"</span>
                  <span className="text-gray-400">,</span><span
                    className="text-orange-300">"MERN"</span>
                  <span className="text-gray-400">,</span>
                  {'\n    '}
                  <span className="text-orange-300">"Python"</span>
                  <span className="text-gray-400">, </span>
                  <span className="text-orange-300">"Vue"</span>
                  <span className="text-gray-400">],</span>
                  {'\n  '}
                  <span className="text-cyan-300">passion</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-orange-300">"Building things</span>
                  {'\n  '}
                  <span className="text-orange-300">for the web"</span>
                  {'\n'}
                  <span className="text-gray-400">{'};'}</span>
                </pre>
              </div>

              {/* Decorative curved arrow */}
              <svg
                className="hidden sm:block absolute -left-10 bottom-8 z-20 text-gray-600"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <path
                  d="M6 8c0 20 6 30 34 34"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M32 36l8 6 2-9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}


      {/* ---------------- SKILLS ---------------- */}
      <section className="px-6 md:px-16 py-20">
        <div className=" mx-auto text-center mb-14">
          <span className="inline-block text-[11px] font-semibold tracking-wide uppercase text-purple-300 mb-3">
            My skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Technologies I Master
          </h2>
          <div className="w-14 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          {skillColumns.map((col, colIdx) => (
            <div key={colIdx} className="space-y-8">
              {col.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{skill.pct}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                      style={{ width: `${skill.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          className="
    fixed
    bottom-6
    right-5
    z-[9999]

    sm:bottom-8
    sm:right-8

    md:bottom-10
    md:right-10
  "
        >
          <ScrollArrow to="/about/academic" />
        </div>
        
      </section>

    </div>
  );
};

export default Portfolio;