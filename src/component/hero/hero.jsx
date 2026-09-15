import React, { useEffect, useState } from "react";
import person from "../../assets/shubham.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const fullText = "PORTFOLIO";
  const [text, setText] = useState("");

  const navigate = useNavigate();
  // Typing animation
  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typing);
      }
    }, 180);

    return () => clearInterval(typing);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#111111] text-white">

      <style>{`
        @keyframes personUp {
          0% {
            transform: translateY(110%);
            opacity: 0;
          }

          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .person-animation {
          animation: personUp 1.5s cubic-bezier(.16,1,.3,1) forwards;
        }
      `}</style>


      {/* ================= HERO STAGE ================= */}

      <div className="absolute inset-0">


        {/* ================= PORTFOLIO BACK TEXT ================= */}

        <div
          className="
            absolute
            left-1/2
            top-[45%]
            z-10
            w-full
            -translate-x-1/2
            -translate-y-1/2
            overflow-hidden
          "
        >
          <h1
            className="
              whitespace-nowrap
              text-center
              font-black
              uppercase
              leading-none
              tracking-[-0.065em]
              text-[#eee1c5]

              text-[17vw]
            "
          >
            {text}
          </h1>
        </div>


        {/* ================= PERSON ================= */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            z-20
            flex
            -translate-x-1/2
            justify-center
            person-animation
          "
        >
          <img
            src={person}
            alt="Shubham"
            className="
              block
              h-[72svh]
              w-auto
              max-w-none
              object-contain

              sm:h-[75svh]
              md:h-[82svh]
              lg:h-[88svh]
            "
          />
        </div>


        {/* ================= OUTLINE PORTFOLIO ================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[45%]
            z-30
            w-full
            -translate-x-1/2
            -translate-y-1/2
            overflow-hidden
          "
        >
          <h2
            className="
              whitespace-nowrap
              text-center
              font-black
              uppercase
              leading-none
              tracking-[-0.065em]

              text-[17vw]
              text-transparent
              [-webkit-text-stroke:1px_#eee1c5]
            "
          >
            {text}
          </h2>
        </div>


        {/* ================= BOTTOM BUTTONS ================= */}

        <div
          className="
            absolute
            bottom-5
            left-5
            right-5
            z-40
            flex
            items-center
            justify-between

            sm:bottom-7
            sm:left-8
            sm:right-8

            md:bottom-10
            md:left-12
            md:right-12
          "
        >

          {/* WEB DEVELOPER */}

          <button
            onClick={() => navigate("/developer")}
            className="
              rounded-full
              border
              border-[#eee1c5]/50
              bg-[#eee1c5]/10
              px-4
              py-2

              text-[11px]
              font-medium
              tracking-wide
              text-[#eee1c5]

              backdrop-blur-md

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#eee1c5]
              hover:text-[#111111]
              hover:shadow-[0_8px_30px_rgba(238,225,197,0.25)]

              sm:px-5
              sm:py-2.5
              sm:text-xs

              md:px-7
              md:py-3
              md:text-sm
            "
          >
            Web Developer
          </button>


          {/* GYM */}

          <button
            onClick={() => navigate("/gym")}
            className="
              rounded-full
              border
              border-[#eee1c5]/50
              bg-[#eee1c5]/10
              px-4
              py-2

              text-[11px]
              font-medium
              tracking-wide
              text-[#eee1c5]

              backdrop-blur-md

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#eee1c5]
              hover:text-[#111111]
              hover:shadow-[0_8px_30px_rgba(238,225,197,0.25)]

              sm:px-5
              sm:py-2.5
              sm:text-xs

              md:px-7
              md:py-3
              md:text-sm
            "
          >
            Gym Enthusiast
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;