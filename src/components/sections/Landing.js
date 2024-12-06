"use client";

import React, { useState, useEffect } from "react";
import LandingContent from "@/components/ui/landing/LandingContent";
import LandingAnimation from "@/components/ui/landing/LandingAnimation";
import cn from "@/utils/cn";
import { maxContainerWidth } from "@/utils/constants";
const Landing = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  return (
    <div
      className={cn(
        "bg-gradient-to-b from-slate-800 from-0% to-black to-100% pt-16 lg:pt-24 xl:pt-28",
        "relative overflow-hidden",
      )}
      style={{ marginTop: `${headerHeight}px` }}
    >
      <div
        className="mx-auto xl:flex xl:justify-between"
        style={{ maxWidth: `${maxContainerWidth}px` }}
      >
        <LandingContent className="" />
        <LandingAnimation className="transform-gpu transition-all duration-300" />
      </div>
    </div>
  );
};

export default Landing;
