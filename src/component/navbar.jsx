import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Mail,
} from "lucide-react";

const DEFAULT_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({
  logo = "Site",
  links = DEFAULT_LINKS,
  cta = { label: "Let's Talk" },
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setContactOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <div className="fixed inset-x-0 top-4 z-[100] flex justify-center px-4 pointer-events-none">
        <div className="flex w-full flex-col items-center">


          <nav
            className={[
              "pointer-events-auto flex w-full max-w-2xl items-center justify-between gap-7",
              "rounded-full border border-white/15 pl-6 pr-2 py-2",
              "backdrop-blur-xl backdrop-saturate-150 shadow-2xl",
              "transition-all duration-300",
              scrolled ? "bg-white/10" : "bg-white/5",
            ].join(" ")}
          >
            <a href="/"><span className="whitespace-nowrap text-[15px] font-bold tracking-tight text-white">
              {logo}
            </span></a>
            

            {/* Desktop Links */}
            <div className="hidden sm:flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-cyan-400"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            {cta && (
              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="
                  hidden sm:inline-block
                  whitespace-nowrap
                  rounded-full
                  bg-zinc-100
                  px-4 py-2
                  text-[13.5px]
                  font-semibold
                  text-zinc-900
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-white
                  hover:shadow-lg
                "
              >
                {cta.label}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="
                sm:hidden
                inline-flex
                items-center
                justify-center
                rounded-full
                p-2
                text-zinc-100
              "
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {/* ================= MOBILE MENU ================= */}

          {open && (
            <div
              className="
                pointer-events-auto
                mt-2.5
                flex w-full max-w-2xl
                flex-col gap-1
                rounded-2xl
                border border-white/15
                bg-zinc-900/75
                px-5 py-3.5
                shadow-2xl
                backdrop-blur-xl
                backdrop-saturate-150
                sm:hidden
              "
            >
              {links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "py-3 text-[15px] font-medium text-zinc-100",
                    i !== links.length - 1 || cta
                      ? "border-b border-white/10"
                      : "",
                  ].join(" ")}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile CTA */}
              {cta && (
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setContactOpen(true);
                  }}
                  className="py-3 text-left text-[15px] font-medium text-zinc-100"
                >
                  {cta.label}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ================= CONTACT DIALOG ================= */}

      {contactOpen && (
        <div
          className="
            fixed inset-0 z-[200]
            flex items-center justify-center
            bg-black/70
            px-5
            backdrop-blur-md
          "
          onClick={() => setContactOpen(false)}
        >
          {/* Dialog */}
          <div
            className="
              relative
              w-full max-w-md
              overflow-hidden
              rounded-3xl
              border border-white/15
              bg-[#080b14]/95
              p-7
              shadow-2xl
              shadow-purple-950/40
              backdrop-blur-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/20 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-600/20 blur-[80px]" />

  
            <button
              type="button"
              onClick={() => setContactOpen(false)}
              aria-label="Close contact dialog"
              className="
                absolute right-4 top-4
                rounded-full
                p-2
                text-gray-400
                transition
                hover:bg-white/10
                hover:text-white
              "
            >
              <X size={20} />
            </button>

            {/* Heading */}
            <div className="relative text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
                Get In Touch
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Let's Connect
              </h2>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-400">
                Have a project, opportunity or just want to say hello?
                Connect with me through any of these platforms.
              </p>
            </div>

            {/* Social Buttons */}
            <div className="relative mt-8 grid grid-cols-3 gap-3">

              {/* Instagram */}
              <a
                href="https://instagram.com/_shubham_kr._singhh"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex flex-col
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-pink-500/40
                  hover:bg-pink-500/10
                "
              >
                <div
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-purple-600
                    via-pink-500
                    to-orange-400
                    shadow-lg
                    transition-transform
                    group-hover:scale-110
                  "
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </div>

                <span className="text-xs font-medium text-gray-300 group-hover:text-white">
                  Instagram
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/7307529246"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex flex-col
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-green-500/40
                  hover:bg-green-500/10
                "
              >
                <div
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-xl
                    bg-green-500
                    shadow-lg
                    transition-transform
                    group-hover:scale-110
                  "
                >
                  <MessageCircle size={25} />
                </div>

                <span className="text-xs font-medium text-gray-300 group-hover:text-white">
                  WhatsApp
                </span>
              </a>

              {/* Gmail */}
              <a
                href="mailto:shubhamsingh7307529@gmail.com"
                className="
                  group
                  flex flex-col
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-red-500/40
                  hover:bg-red-500/10
                "
              >
                <div
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-xl
                    bg-red-500
                    shadow-lg
                    transition-transform
                    group-hover:scale-110
                  "
                >
                  <Mail size={25} />
                </div>

                <span className="text-xs font-medium text-gray-300 group-hover:text-white">
                  Gmail
                </span>
              </a>

            </div>

            {/* Bottom text */}
            <div className="relative mt-7 border-t border-white/10 pt-5 text-center">
              <p className="text-xs text-gray-500">
                Usually responds within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

