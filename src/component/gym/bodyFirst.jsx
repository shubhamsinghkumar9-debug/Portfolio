import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Your images
import body from "../../assets/body.png";
import image2 from "../../assets/body1.png";
import image3 from "../../assets/body2.png";
import image4 from "../../assets/body3.png";
import image5 from "../../assets/body4.png";

const Body = () => {
  const slides = [
    {
      id: 1,
      image: body,
      title: "FRONTEND...",
      text: "Monday",
    },
    {
      id: 2,
      image: image2,
      title: "FRONTEND...",
      text: "Tuesday",
    },
    {
      id: 3,
      image: image3,
      title: "BACKEND...",
      text: "Wednesday",
    },
    {
      id: 4,
      image: image4,
      title: "DATABASE...",
      text: "Thursday",
    },
    {
      id: 5,
      image: image5,
      title: "FULL STACK...",
      text: "Friday",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const startX = useRef(0);
  const isDragging = useRef(false);

  // =========================
  // NEXT
  // =========================
  const nextSlide = () => {
    setDirection(1);

    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  // =========================
  // PREVIOUS
  // =========================
  const prevSlide = () => {
    setDirection(-1);

    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // =========================
  // AUTO SLIDER - 5 SECONDS
  // =========================
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // =========================
  // TOUCH START
  // =========================
  const handlePointerDown = (e) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };

  // =========================
  // TOUCH / MOUSE END
  // =========================
  const handlePointerUp = (e) => {
    if (!isDragging.current) return;

    const endX = e.clientX;
    const difference = startX.current - endX;

    isDragging.current = false;

    // Minimum swipe distance
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // =========================
  // CALCULATE POSITION
  // =========================
  const getPosition = (index) => {
    const total = slides.length;

    let position = index - current;

    // Make slider circular
    if (position > total / 2) {
      position -= total;
    }

    if (position < -total / 2) {
      position += total;
    }

    return position;
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030303] text-white">

      {/* =====================================
          BACKGROUND
      ====================================== */}

      <div className="absolute inset-0">

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />

        {/* Horizontal lines */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 7px, rgba(255,255,255,.4) 8px)",
          }}
        />

        {/* Blue ambient light */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      </div>

      {/* =====================================
          CONTENT
      ====================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-12">

        {/* HEADER */}

        <div className="text-center">

          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-cyan-400">
            AlterMe
          </p>

          <h1 className="text-4xl font-medium tracking-tight sm:text-6xl">
            Your body.
            <span className="text-cyan-400">
              {" "}Your data.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Personalized insights built around your biology,
            recovery and performance.
          </p>

        </div>

        {/* =====================================
            3D SLIDER
        ====================================== */}

        <div
          className="relative mx-auto mt-10 flex h-[550px] w-full max-w-6xl touch-pan-y items-center justify-center select-none"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            isDragging.current = false;
          }}
        >

          {/* LEFT ARROW */}

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="
              absolute left-2 z-50
              flex h-12 w-12
              items-center justify-center
              rounded-full
              border border-white/20
              bg-black/60
              text-white
              backdrop-blur-md
              transition
              hover:border-cyan-400
              hover:text-cyan-400
              sm:left-5
              lg:left-10
            "
          >
            <ChevronLeft size={26} />
          </button>

          {/* RIGHT ARROW */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="
              absolute right-2 z-50
              flex h-12 w-12
              items-center justify-center
              rounded-full
              border border-white/20
              bg-black/60
              text-white
              backdrop-blur-md
              transition
              hover:border-cyan-400
              hover:text-cyan-400
              sm:right-5
              lg:right-10
            "
          >
            <ChevronRight size={26} />
          </button>

          {/* =================================
              SLIDES
          ================================== */}

          <div
            className="
              relative
              h-full
              w-full
              [perspective:1200px]
            "
          >

            {slides.map((slide, index) => {

              const position = getPosition(index);

              const isCenter = position === 0;

              return (
                <motion.div
                  key={slide.id}
                  animate={{
                    x: `${position * 62}%`,
                    scale: isCenter ? 1 : 0.72,
                    rotateY: position * -28,
                    opacity:
                      Math.abs(position) > 2
                        ? 0
                        : isCenter
                        ? 1
                        : 0.45,
                    zIndex: 20 - Math.abs(position),
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 24,
                  }}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[470px]
                    w-[280px]
                    -translate-x-1/2
                    -translate-y-1/2
                    cursor-grab
                    active:cursor-grabbing
                    sm:h-[500px]
                    sm:w-[310px]
                    lg:h-[520px]
                    lg:w-[330px]
                  "
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >

                  {/* CARD */}

                  <div
                    className={`
                      relative
                      h-full
                      w-full
                      overflow-hidden
                      rounded-[30px]
                      border
                      bg-[#090909]
                      shadow-2xl
                      ${
                        isCenter
                          ? "border-cyan-400/60 shadow-cyan-500/10"
                          : "border-white/10"
                      }
                    `}
                  >

                    {/* IMAGE */}

                    <img
                      src={slide.image}
                      alt={slide.title}
                      draggable="false"
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                      "
                    />

                    {/* DARK OVERLAY */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black
                        via-black/20
                        to-transparent
                      "
                    />

                    {/* TEXT */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        p-6
                        text-left
                      "
                    >

                      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-cyan-400">
                        AlterMe
                      </p>

                      <h2 className="text-2xl font-medium sm:text-3xl">
                        {slide.title}
                      </h2>

                      <p className="mt-2 text-sm leading-relaxed text-gray-300">
                        {slide.text}
                      </p>

                    </div>

                    {/* CENTER BORDER */}

                    {isCenter && (
                      <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-cyan-400/30" />
                    )}

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* =====================================
            DOTS
        ====================================== */}

        <div className="flex justify-center gap-2">

          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-2 rounded-full transition-all duration-300
                ${
                  current === index
                    ? "w-8 bg-cyan-400"
                    : "w-2 bg-white/30"
                }
              `}
            />
          ))}

        </div>

        {/* =====================================
            BOTTOM TEXT
        ====================================== */}

        <div className="mt-10 text-center">

          <h2 className="text-2xl font-medium sm:text-3xl">
            Discipline today,{" "}
            <span className="text-cyan-400">
              freedom
            </span>{" "}
            tomorrow.
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-gray-400">
            AlterMe turns your biology into a plan
            that actually works for your life.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Body;