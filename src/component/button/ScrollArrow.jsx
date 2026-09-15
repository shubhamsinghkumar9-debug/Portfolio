import React from "react";
import { useNavigate } from "react-router-dom";

const ScrollArrow = ({ to }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="
        group
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full

        border
        border-white/20
        bg-white/5
        text-white

        backdrop-blur-md

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-red-500
        hover:bg-red-500
        hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]

        sm:h-14
        sm:w-14
      "
    >
      <span
        className="
          text-xl
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      >
        →
      </span>
    </button>
  );
};

export default ScrollArrow;