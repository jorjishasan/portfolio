"use client";
import { profileLinks } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";
import Tooltip from "@/components/ui/Tooltip";
import gitthubIcon from "@icon/github_light.svg";
import linkedinIcon from "@icon/linkedin_light.svg";
const FooterRight = () => {
  const selectedLinks = {
    twitter: profileLinks.social_links.twitter,
    linkedin: { ...profileLinks.social_links.linkedin, icon: linkedinIcon },
    devdotto: profileLinks.social_links.devdotto,
    github: {
      ...profileLinks.coding_profiles.github,
      icon: gitthubIcon, // update with new icon
    },
  };

  return (
    <div className="flex flex-col gap-3 lg:pb-4">
      <span className="flex items-center justify-center gap-3 md:gap-6">
        {Object.values(selectedLinks).map((link) => (
          <Tooltip key={link.name} content={link.name}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-90"
            >
              <Image
                src={link.icon}
                alt={link.name}
                width={24}
                height={24}
                className="md:w-8"
              />
            </Link>
          </Tooltip>
        ))}
      </span>

      <p className="text-gray-300 md:text-lg">
        <strong className="font-medium">Design X Developed</strong> by{" "}
        <span className="text-purple-500">@jorjis.</span>
      </p>
    </div>
  );
};

export default FooterRight;
