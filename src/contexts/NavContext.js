"use client";
import { createContext, useContext, useState } from "react";

const NavContext = createContext({});

export function NavProvider({ children }) {
  const [activeItem, setActiveItem] = useState(null);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <NavContext.Provider
      value={{
        activeItem,
        setActiveItem,
        showQuickLinks,
        setShowQuickLinks,
        isHamburgerOpen,
        setIsHamburgerOpen,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export const useNav = () => useContext(NavContext);
