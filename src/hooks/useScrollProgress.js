"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const useScrollProgress = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  return { isScrolled, scrollYProgress };
};

export default useScrollProgress;
