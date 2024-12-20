"use client";

import React from "react";
import FooterLeft from "@ui/footer/FooterLeft";
import FooterRight from "@ui/footer/FooterRight";

import { maxContainerWidth } from "@/utils/constants";
const Footer = () => {
  return (
    <footer className="mt-section-padding-y bg-[#070707] p-4 py-section-padding-y md:mt-section-margin-y-md md:py-section-padding-y-md lg:mt-section-margin-y-lg lg:py-section-padding-y-lg">
      <div
        className="mx-auto flex flex-col items-center justify-center gap-12 md:gap-16"
        style={{ maxWidth: maxContainerWidth }}
      >
        <FooterLeft />
        <FooterRight />
      </div>
    </footer>
  );
};

export default Footer;
