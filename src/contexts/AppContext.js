"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({});
export const useApp = () => useContext(AppContext);

export function AppProvider({ children }) {
  // Initialize with null to avoid hydration mismatch
  const [isDesktop, setIsDesktop] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  useEffect(() => {
    // Move initial check inside useEffect
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  // Don't render children until isDesktop is determined
  if (isDesktop === null) return null;

  const value = {
    isDesktop,
    activeItem,
    setActiveItem,
    showQuickLinks,
    setShowQuickLinks,
    isHamburgerOpen,
    setIsHamburgerOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
