import React from "react";

const Academic = () => {
  const education = [
    {
      level: "01",
      title: "Primary Education",
      subtitle: "Foundation Years",
      institution: "S S Dev Public School",
      location: "Zamania, Ghazipur, Uttar Pradesh",
      duration: "2014 - 2021",
      description:
        "Built my academic foundation with a focus on mathematics, science, languages, creativity and overall personality development.",
      subjects: ["Mathematics", "Science", "English", "Computer Basics, Social Science", "Hindi", "Sanskrit", "Drawing"],
    },
    {
      level: "02",
      title: "Secondary Education",
      subtitle: "School Education",
      institution:  "S S Dev Public School",
      location: "Zamania, Ghazipur, Uttar Pradesh",
      duration: "2021 - 2023",
      description:
        "Developed strong fundamentals in academics while exploring technology, problem solving and computer science.",
      subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English"],
    },
    {
      level: "03",
      title: "Higher Education",
      subtitle: "Bachelor's Degree",
      institution: "Indian Institute of Technology Madras",
      location: "Chennai, Tamil Nadu",
      duration: "2024 - Present",
      description:
        "Currently pursuing a B.Sc. in Data Science, focusing on programming, data analytics, machine learning, artificial intelligence and modern technologies.",
      subjects: [
        "Data Science",
        "Python",
        "Machine Learning",
        "Artificial Intelligence",
        "Data Analytics",
      ],
    },
  ];

  return (
    <section
      id="academic"
      className="relative min-h-screen overflow-hidden bg-[#030712] px-5 py-20 text-white sm:px-8 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-150px] top-[20%] h-[350px] w-[350px] rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-[120px]" />

      {/* Header */}
      <div className="relative mx-auto mb-20 max-w-4xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
          My Journey
        </p>

        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Academic{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            History
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          A journey from foundational education to higher studies, continuously
          developing my knowledge, technical skills and passion for technology.
        </p>
      </div>

      {/* ================= ROADMAP ================= */}
      <div className="relative mx-auto max-w-6xl">
        {/* Desktop Center Line */}
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-[2px] -translate-x-1/2 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 md:block" />

        {/* Mobile Line */}
        <div className="absolute bottom-0 left-[18px] top-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 md:hidden" />

        <div className="space-y-14 md:space-y-24">
          {education.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.level}
                className="relative grid w-full grid-cols-1 md:grid-cols-2"
              >
                {/* Timeline Dot */}
                <div
                  className="
                    absolute left-[7px] top-7 z-20
                    flex h-6 w-6 items-center justify-center
                    rounded-full border-4 border-[#030712]
                    bg-purple-500
                    shadow-[0_0_25px_rgba(168,85,247,0.8)]
                    md:left-1/2 md:-translate-x-1/2
                  "
                >
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* ================= LEFT CARD ================= */}
                {isLeft ? (
                  <div className="w-full pl-14 md:pr-14 md:pl-0">
                    <EducationCard item={item} />
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}

                {/* ================= RIGHT CARD ================= */}
                {!isLeft ? (
                  <div className="w-full pl-14 md:pl-14">
                    <EducationCard item={item} />
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom */}
      <div className="relative mx-auto mt-20 max-w-3xl text-center">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-xl">
          <p className="text-sm text-gray-400">
            🎓 <span className="text-white">Learning never stops.</span>{" "}
            Currently exploring Data Science, AI, Machine Learning and modern
            web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

/* =====================================================
   EDUCATION CARD
===================================================== */

const EducationCard = ({ item }) => {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-white/10
        bg-white/[0.04]
        p-6 backdrop-blur-xl
        transition-all duration-500
        hover:-translate-y-2
        hover:border-purple-500/50
        hover:bg-white/[0.07]
        hover:shadow-2xl
        hover:shadow-purple-900/20
        sm:p-8
      "
    >
      {/* Number */}
      <div className="absolute right-5 top-4 text-6xl font-black text-white/[0.04]">
        {item.level}
      </div>

      {/* Label */}
      <div className="mb-4">
        <span
          className="
            inline-flex rounded-full
            border border-purple-400/30
            bg-purple-500/10
            px-3 py-1
            text-xs font-semibold uppercase
            tracking-wider text-purple-300
          "
        >
          {item.subtitle}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold sm:text-3xl">
        {item.title}
      </h3>

      {/* Institution */}
      <p className="mt-3 text-lg font-semibold text-purple-300">
        {item.institution}
      </p>

      {/* Location / Duration */}
      <div className="mt-3 flex flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:items-center sm:gap-5">
        <span>📍 {item.location}</span>
        <span>📅 {item.duration}</span>
      </div>

      {/* Description */}
      <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
        {item.description}
      </p>

      {/* Subjects */}
      <div className="mt-6 flex flex-wrap gap-2">
        {item.subjects.map((subject) => (
          <span
            key={subject}
            className="
              rounded-lg border border-white/10
              bg-black/20 px-3 py-1.5
              text-xs text-gray-300
              transition
              group-hover:border-purple-400/20
              group-hover:text-purple-200
            "
          >
            {subject}
          </span>
        ))}
      </div>

      {/* Bottom Accent */}
      <div
        className="
          absolute bottom-0 left-0 h-[2px] w-0
          bg-gradient-to-r from-purple-500 to-blue-500
          transition-all duration-500
          group-hover:w-full
        "
      />
    </div>
  );
};

export default Academic;

