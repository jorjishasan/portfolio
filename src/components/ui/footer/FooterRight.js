import { profileLinks } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";
import Tooltip from "@/components/ui/Tooltip";
import githubIcon from "@icon/github.svg";
const FooterRight = () => {
  const selectedLinks = {
    twitter: profileLinks.social_links.twitter,
    devdotto: profileLinks.social_links.devdotto,
    github: {
      ...profileLinks.coding_profiles.github,
      icon: githubIcon, // update with new icon
    },
    linkedin: profileLinks.social_links.linkedin,
  };

  return (
    <div className="flex flex-col gap-4 pb-4 lg:place-self-end">
      <span className="flex items-center justify-center gap-4 md:gap-6 lg:gap-6 lg:place-self-start">
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
                className="md:w-8 lg:w-10"
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
