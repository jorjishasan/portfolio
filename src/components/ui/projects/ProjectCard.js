"use client";

import { GoArrowUpRight } from "react-icons/go";

export const ProjectCard = ({ name, embed, links }) => {
  const { github, live, youtube } = links;
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-lg border-[0.4px] border-white/10 bg-[#070707] md:flex-row lg:rounded-xl">
      {/* Left Container: Project Info */}
      <div className="order-2 w-fit flex-col self-center p-8 md:order-1 md:w-2/6 md:self-center lg:my-10">
        <h3 className="mb-4 font-['Press_Start_2P'] text-xs font-bold text-white/90 md:text-sm lg:text-base">
          {name}
        </h3>

        <div className="flex items-center gap-2">
          <LinkButton linkObj={{ name: "Github", link: github }} />
          <span className="h-1 w-1 rounded-full bg-gray-400" />
          <LinkButton linkObj={{ name: "Live", link: live }} />
          <span className="h-1 w-1 rounded-full bg-gray-400" />
          <LinkButton linkObj={{ name: "Youtube", link: youtube }} />
        </div>
      </div>

      {/* Right Container: Video Embed */}
      <div className="order-1 flex w-full flex-1 md:order-2 lg:p-4">
        <div
          className="relative aspect-video w-full overflow-hidden lg:rounded-lg"
          dangerouslySetInnerHTML={{
            __html: embed.replace(
              "<iframe",
              '<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain;"',
            ),
          }}
        />
      </div>
    </div>
  );
};

const LinkButton = ({ linkObj }) => {
  return (
    <a
      href={linkObj.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-sm text-purple-500 transition-colors duration-300 hover:text-purple-400"
    >
      {linkObj.name}
      <GoArrowUpRight className="h-3 w-3" />
    </a>
  );
};

export default ProjectCard;
