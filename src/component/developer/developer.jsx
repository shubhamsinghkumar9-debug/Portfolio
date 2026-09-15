import React from "react";
import { useNavigate } from "react-router-dom";
import shubham from "../../assets/shubham.png";
import ScrollArrow from "../button/ScrollArrow"

const Developer = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#070707] text-white">

      {/* ================= ANIMATIONS ================= */}

      <style>{`
        @keyframes imageUp {
          0% {
            opacity: 0;
            transform: translateY(120px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .image-up {
          animation: imageUp 1.3s cubic-bezier(.16,1,.3,1) forwards;
        }

        .fade-up {
          animation: fadeUp .9s ease-out forwards;
        }
      `}</style>


      {/* ================= PAGE ================= */}

      <section
        className="
          relative
          mx-auto
          min-h-screen
          max-w-[1600px]
          overflow-hidden
          px-5
          py-5

          sm:px-8
          sm:py-7

          lg:px-12
          lg:py-8
        "
      >


        {/* =====================================================
            BACKGROUND RED GLOW
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[25%]
            z-0
            h-[450px]
            w-[450px]
            -translate-x-1/2
            rounded-full
            bg-red-700/10
            blur-[130px]

            md:h-[600px]
            md:w-[600px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-0
            right-0
            top-[125px]
            z-10
            flex
            justify-center
            overflow-hidden
            px-3

            lg:top-[100px]
          "
        >

          <h1
  className="
    w-full
    text-center
    font-black
    uppercase
    leading-[0.85]
    tracking-[-0.07em]

    bg-gradient-to-r
from-[#ff1f1f]
via-[#ff5e00]
to-[#ffc107]

    bg-clip-text
    text-transparent

    text-[11vw]
    sm:text-[10vw]
    lg:text-[15vw]
  "
>
  WEB DEVELOPER
</h1>

        </div>


        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-20
            flex
            min-h-[calc(100vh-100px)]
            flex-col
            items-center
            pt-28

            lg:grid
            lg:min-h-[calc(100vh-120px)]
            lg:grid-cols-[0.85fr_1.4fr_0.65fr]
            lg:items-center
            lg:gap-8
            lg:pt-5
          "
        >


          {/* =================================================
              PERSON
          ================================================= */}

          <div
            className="
              relative
              z-30
              order-1
              mt-24
              flex
              h-[390px]
              w-full
              items-end
              justify-center

              sm:mt-28
              sm:h-[500px]

              md:h-[580px]

              lg:col-start-2
              lg:row-start-1
              lg:mt-0
              lg:h-[calc(100vh-190px)]
            "
          >

            {/* RED GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-[5%]
                left-1/2
                h-[70%]
                w-[70%]
                -translate-x-1/2
                rounded-full
                bg-red-900/20
                blur-[100px]
              "
            />


            {/* PERSON */}

            <img
              src={shubham}
              alt="Shubham Singh"
              className="
                image-up
                relative
                z-40
                h-[100%]
                w-auto
                max-w-none
                object-contain
                object-bottom

                drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]

                transition-transform
                duration-500
                hover:scale-[1.02]

                lg:h-[96%]
              "
            />

          </div>


          {/* =================================================
              PERSONAL INFORMATION
              MOBILE = BELOW PHOTO
              DESKTOP = LEFT
          ================================================= */}

          <div
            className="
              relative
              z-50
              order-2
              mt-10
              w-full
              max-w-[450px]

              lg:col-start-1
              lg:row-start-1
              lg:mt-0
            "
          >

            {/* HELLO */}

            <p
              className="
                fade-up
                mb-3
                font-serif
                text-3xl
                italic
                text-white/80

                sm:text-4xl
              "
            >
              Hello, I'm
            </p>


            {/* NAME */}

            <h2
              className="
                fade-up
                text-5xl
                font-black
                uppercase
                leading-[0.82]
                tracking-[-0.05em]

                sm:text-6xl

                lg:text-7xl
              "
            >
              SHUBHAM
              <br />
              SINGH
            </h2>


            {/* ROLE */}

            <h3
              className="
                mt-5
                text-lg
                font-bold
                uppercase
                leading-tight
                tracking-wide
                text-red-300

                sm:text-xl
              "
            >
              WEB DEVELOPER &
              <br />
              UI/UX CREATOR
            </h3>


            {/* DESCRIPTION */}

            <p
              className="
                mt-5
                max-w-[400px]
                text-sm
                leading-6
                text-white/55

                sm:text-base
                sm:leading-7
              "
            >
              I design and build modern, responsive web
              experiences that combine creative interfaces
              with clean and scalable code.
            </p>


            {/* SKILLS */}

            <div className="mt-6 flex flex-wrap gap-2">

              {[
                "Python",
                "MERN",
                "JavaScript",
                "Tailwind",
                "Node.js",
                "Vue",
                "Bootstrap"
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.04]
                    px-3
                    py-1.5

                    text-[10px]
                    uppercase
                    tracking-wider
                    text-white/60

                    transition-all
                    duration-300

                    hover:border-red-500/50
                    hover:bg-red-500/10
                    hover:text-red-400
                  "
                >
                  {skill}
                </span>
              ))}

            </div>


            {/* AVAILABLE */}

          

          </div>


          {/* =================================================
              RIGHT SIDE
              MOBILE = BELOW EVERYTHING
              DESKTOP = RIGHT
          ================================================= */}

          <div
            className="
              relative
              z-50
              order-3
              mt-12
              w-full
              max-w-[450px]

              lg:col-start-3
              lg:row-start-1
              lg:mt-20
            "
          >

            {/* TAGLINE */}

            <div className="mb-8 flex items-center gap-4">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white-500/40
                  text-xl
                  text-shadow-indigo-50

                  transition-all
                  duration-300

                  hover:rotate-90
                  hover:bg-red-500/10
                "
              >
                ✦
              </div>

              <p
                className="
                  text-xs
                  leading-5
                  text-white
                "
              >
                Turning ideas into powerful
                <br />
                digital experiences.
              </p>

            </div>


            {/* STAT 1 */}

            <div className="border-b border-white/15 pb-5">

              <div className="flex items-center gap-5">

                <span
                  className="
                    text-4xl
                    font-black
                    text-shadow-indigo-50

                    sm:text-5xl
                  "
                >
                  10+
                </span>

                <span
                  className="
                    text-xs
                    uppercase
                    leading-5
                    tracking-wider
                    text-white
                  "
                >
                  Projects
                  <br />
                  Built
                </span>

              </div>

            </div>


            {/* STAT 2 */}

            <div className="border-b border-white/15 py-5">

              <div className="flex items-center gap-5">

                <span
                  className="
                    text-4xl
                    font-black
                    text-shadow-indigo-50

                    sm:text-5xl
                  "
                >
                  5+
                </span>

                <span
                  className="
                    text-xs
                    uppercase
                    leading-5
                    tracking-wider
                    text-white
                  "
                >
                  Technologies
                  <br />
                  Mastered
                </span>

              </div>

            </div>


            {/* STAT 3 */}

            <div className="border-b border-white/15 py-5">

              <div className="flex items-center gap-5">

                <span
                  className="
                    text-4xl
                    font-black
                    text-shadow-indigo-50

                    sm:text-5xl
                  "
                >
                  100%
                </span>

                <span
                  className="
                    text-xs
                    uppercase
                    leading-5
                    tracking-wider
                    text-white
                  "
                >
                  Passion
                  <br />
                  & Creativity
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM
        ====================================================== */}

        {/* ================= FIXED SCROLL ARROW ================= */}

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
  <ScrollArrow to="/about" />
</div>

      </section>

    </main>
  );
};

export default Developer;