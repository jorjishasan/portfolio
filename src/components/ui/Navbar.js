"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";
import cn from "../../utils/cn";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ProgressBar } from "./ProgressBar";

const leftNavItems = [
  { name: "Hi", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Tools", href: "/tools" },
];

const socialLinks = [
  {
    name: "Twitter",
    icon: <FaTwitter size={20} />,
    href: "https://twitter.com/yourusername",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={20} />,
    href: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    href: "https://linkedin.com/in/yourusername",
  },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(null);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const { isScrolled, scrollYProgress } = useScrollProgress();

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        "backdrop-blur-md bg-zinc-900/75 supports-[backdrop-filter]:bg-zinc-900/75",
        isScrolled && "shadow-md"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between h-16">
          {/* Left Nav Items */}
          <div className="flex items-center space-x-8">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-200",
                  "hover:text-white relative",
                  activeItem && activeItem !== item.name && "opacity-40"
                )}
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Quick Links Menu */}
          <div className="relative group">
            <button
              className={cn(
                "flex items-center gap-2 px-3 py-2 text-sm font-medium",
                "text-gray-300 hover:text-white transition-all duration-200",
                activeItem && "opacity-40"
              )}
              onMouseEnter={() => {
                setShowQuickLinks(true);
                setActiveItem("quicklinks");
              }}
              onMouseLeave={() => {
                setShowQuickLinks(false);
                setActiveItem(null);
              }}
            >
              Quick Links
              <motion.svg
                className="w-4 h-4"
                animate={{ rotate: showQuickLinks ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>

            <AnimatePresence>
              {showQuickLinks && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={cn(
                    "absolute right-0 top-[calc(100%+0.5rem)] w-48",
                    "bg-zinc-900/95 backdrop-blur-md rounded-lg shadow-lg",
                    "ring-1 ring-white/10 border border-white/5"
                  )}
                  onMouseEnter={() => {
                    setShowQuickLinks(true);
                    setActiveItem("quicklinks");
                  }}
                  onMouseLeave={() => {
                    setShowQuickLinks(false);
                    setActiveItem(null);
                  }}
                >
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center px-4 py-3 text-sm",
                        "text-gray-300 hover:bg-white/10",
                        "transition-all duration-200",
                        "first:rounded-t-lg last:rounded-b-lg group"
                      )}
                    >
                      <span className="mr-3 text-gray-400 group-hover:text-white transition-colors">
                        {social.icon}
                      </span>
                      <span className="group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                      <motion.span
                        className="ml-auto opacity-0 group-hover:opacity-100"
                        initial={false}
                        animate={{ scale: [0.8, 1] }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaExternalLinkAlt size={12} />
                      </motion.span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>

      {/* Progress Bar */}
      <ProgressBar progress={scrollYProgress} />
    </header>
  );
}
