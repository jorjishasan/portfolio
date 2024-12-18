"use client";

import LandingContent from "@/components/ui/landing/LandingContent";
import LandingAnimation from "@/components/ui/landing/LandingAnimation";
import cn from "@/utils/cn";
import { maxContainerWidth } from "@/utils/constants";
import { useIsDesktop } from "@/hooks/useIsDesktop";

const Landing = () => {
  const isDesktop = useIsDesktop();

  return (
    <div
      id="hola"
      className={cn(
        "bg-gradient-to-b from-blue-900 from-0% to-black to-100% py-section-padding-y md:py-section-padding-y-md lg:py-section-padding-y-lg",
        "relative overflow-hidden pt-28 md:pt-32 xl:pt-36",
      )}
    >
      <div
        className="mx-auto xl:flex xl:justify-between"
        style={{ maxWidth: `${maxContainerWidth}px` }}
      >
        <LandingContent />
        {isDesktop && <LandingAnimation />}
      </div>
    </div>
  );
};

export default Landing;
