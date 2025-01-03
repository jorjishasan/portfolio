"use client";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import IntroStarter from "@/components/ui/IntroStarter";
import { maxContainerWidth, sectionIntros } from "@/utils/constants";
import DesktopProjects from "@/components/ui/projects/DesktopProjects";
import MobileProjects from "@/components/ui/projects/MobileProjects";
import { projectData } from "@/components/ui/projects/projectConfig";
import { useApp } from "@/contexts/AppContext";

const Projects = () => {
  const { projects } = sectionIntros;
  const { isDesktop } = useApp();

  return (
    <div
      id="projects"
      className="mx-auto mt-section-margin-y p-4 py-section-padding-y md:mt-section-margin-y-md md:py-section-padding-y-md lg:mt-section-margin-y-lg lg:py-section-padding-y-lg"
      style={{ maxWidth: `${maxContainerWidth}px` }}
    >
      <IntroStarter {...projects} />
      {isDesktop ? (
        <DesktopProjects projects={projectData} />
      ) : (
        <MobileProjects projects={projectData} />
      )}
      <button className="text-gray group mx-auto mt-10 flex items-center gap-1 rounded-md border-[0.3px] border-gray-700 px-6 py-3 text-white transition-colors duration-300 hover:bg-purple-500">
        <span>Explore all projects</span>
        <GoArrowUpRight className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110" />
      </button>
    </div>
  );
};

export default Projects;
