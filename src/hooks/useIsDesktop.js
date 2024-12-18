"use client";

import { useState, useEffect } from "react";

export const useIsDesktop = (breakpoint = 1280) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    // Initial check
    checkIsDesktop();

    // Add resize listener
    window.addEventListener("resize", checkIsDesktop);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, [breakpoint]);

  return isDesktop;
};
