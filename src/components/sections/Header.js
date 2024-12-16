"use client";
import React from "react";
import cn from "@/utils/cn";
import Navbar from "@ui/navbar/Navbar";
import useScrollProgress from "../../hooks/useScrollProgress";
import ProgressBar from "../ui/navbar/ProgressBar";
const Header = () => {
  const { isScrolled, scrollYProgress } = useScrollProgress();

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl dark:bg-black/80",
        isScrolled && "shadow-md",
      )}
    >
      <Navbar />
      <ProgressBar progress={scrollYProgress} />
    </header>
  );
};

export default Header;
