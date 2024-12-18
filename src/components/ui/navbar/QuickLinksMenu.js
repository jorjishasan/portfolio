"use client";

import Image from "next/image";
import cn from "@/utils/cn";
import { useApp } from "@/contexts/AppContext";
import chevronIcon from "@icon/chevron.svg";
import SocialLinks from "./SocialLinks";

const QuickLinksMenu = () => {
  const { showQuickLinks, setShowQuickLinks, activeItem, setActiveItem } =
    useApp();

  const handleMouseEnter = () => {
    setShowQuickLinks(true);
    setActiveItem("quicklinks");
  };

  let leaveTimeout;

  const handleMouseLeave = () => {
    clearTimeout(leaveTimeout);
    leaveTimeout = setTimeout(() => {
      if (!document.querySelector(".group:hover")) {
        setShowQuickLinks(false);
        setActiveItem(null);
      }
    }, 200);
  };

  return (
    <div className="group relative">
      <button
        className={cn(
          "flex items-center gap-2 px-3 py-2 text-base font-medium",
          "text-gray-300 transition-all duration-300 hover:text-white",
          activeItem && activeItem !== "quicklinks" && "opacity-40",
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Quick Links
        <Image
          className={cn(
            "transition-transform duration-300",
            showQuickLinks && "rotate-180",
          )}
          src={chevronIcon}
          alt="Arrow Down"
          width={16}
          height={16}
        />
      </button>

      <div
        className={cn(
          "absolute right-0 top-[calc(100%+0.5rem)] w-48",
          "rounded-lg bg-black/70 backdrop-blur-md",
          "shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
          "backdrop-saturate-150",
          "origin-top transition-all duration-200 ease-out",
          showQuickLinks
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0",
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SocialLinks />
      </div>
    </div>
  );
};

export default QuickLinksMenu;
