"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({});

export function AppProvider({ children }) {
  // Viewport state
  const [isDesktop, setIsDesktop] = useState(false);

  // Nav states
  const [activeItem, setActiveItem] = useState(null);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    // Initial check
    checkIsDesktop();

    // Add resize listener
    window.addEventListener("resize", checkIsDesktop);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const value = {
    // Viewport state
    isDesktop,

    // Nav states
    activeItem,
    setActiveItem,
    showQuickLinks,
    setShowQuickLinks,
    isHamburgerOpen,
    setIsHamburgerOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
