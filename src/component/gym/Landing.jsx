import React from "react";
import { ArrowDown } from "lucide-react";
import focusImage from "../../assets/focus.png";
import BodyFirst from "./bodyFirst";

const Body = () => {
  const scrollToWork = () => {
    document
      .getElementById("work")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ================= BODY / GYM LANDING ================= */}

      <section
        id="home"
        className="
          relative
          min-h-screen
          w-full
          overflow-hidden
          bg-black
          text-white
        "
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={focusImage}
            alt="Gym background"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />
        </div>

        {/* Dark Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/20
            via-black/10
            to-black/60
          "
        />

        {/* Left Gradient */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[45%]
            bg-gradient-to-r
            from-black/50
            to-transparent
          "
        />

        {/* Right Gradient */}
        <div
          className="
            absolute
            inset-y-0
            right-0
            w-[35%]
            bg-gradient-to-l
            from-black/40
            to-transparent
          "
        />

        {/* Scroll Button */}
        <button
          onClick={scrollToWork}
          aria-label="Scroll to work"
          className="
            absolute
            bottom-8
            right-6
            z-20
            hidden
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-black/30
            text-white/70
            backdrop-blur-md
            transition-all
            hover:-translate-y-1
            hover:border-white/40
            hover:bg-white/10
            sm:flex
            lg:right-12
          "
        >
          <ArrowDown size={19} />
        </button>

        {/* Vignette */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[5]
            shadow-[inset_0_0_180px_rgba(0,0,0,0.75)]
          "
        />
      </section>

      {/* =====================================================
          BODY FIRST
          Appears DIRECTLY BELOW Body
      ===================================================== */}

      <BodyFirst />
    </>
  );
};

export default Body;