"use client";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import IntroStarter from "@/components/ui/IntroStarter";
import { maxContainerWidth, sectionIntros } from "@/utils/constants";
import DesktopProjects from "@/components/ui/projects/DesktopProjects";
import MobileProjects from "@/components/ui/projects/MobileProjects";
import { projectData } from "@/components/ui/projects/projectConfig";

const Projects = () => {
  const { projects } = sectionIntros;

  return (
    <div
      className="mx-auto mt-16 px-4 py-8 md:mt-24 md:px-8 lg:mt-36 xl:mt-40"
      style={{ maxWidth: `${maxContainerWidth}px` }}
    >
      <IntroStarter {...projects} />
      <div className="hidden xl:block">
        <DesktopProjects projects={projectData} />
      </div>
      <div className="xl:hidden">
        <MobileProjects projects={projectData} />
      </div>
      <button className="text-gray group mx-auto mt-10 flex items-center gap-1 rounded-md border-[0.3px] border-gray-700 px-6 py-3 text-white transition-colors duration-300 hover:bg-purple-500">
        <span>Explore all projects</span>
        <GoArrowUpRight className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110" />
      </button>
    </div>
  );
};

export default Projects;
