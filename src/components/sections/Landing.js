"use client";

import LandingContent from "@/components/ui/landing/LandingContent";
import LandingAnimation from "@/components/ui/landing/LandingAnimation";
import cn from "@/utils/cn";
import { maxContainerWidth } from "@/utils/constants";
const Landing = () => {
  return (
    <div
      className={cn(
        "py-section-padding-y mt-section-margin-y md:py-section-padding-y-md lg:py-section-padding-y-lg md:mt-section-margin-y-md lg:mt-section-margin-y-lg bg-gradient-to-b from-blue-900 from-0% to-black to-100%",
        "relative overflow-hidden pt-28 md:pt-32 lg:pt-36",
      )}
      // style={{ marginTop: `${headerHeight}px` }}
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
