"use client";

import React from "react";
import IntroStarter from "@ui/IntroStarter";
import { sectionIntros } from "@/utils/constants";
import SkillsWrapper from "../ui/skills/SkillsWrapper";
const Skills = () => {
  const { tools } = sectionIntros;
  return (
    <section className="mt-section-padding-y p-4 py-section-padding-y md:mt-section-padding-y-md md:py-section-padding-y-md lg:mt-section-padding-y-lg lg:py-section-padding-y-lg">
      <IntroStarter {...tools} />
      <SkillsWrapper />
    </section>
  );
};

export default Skills;
