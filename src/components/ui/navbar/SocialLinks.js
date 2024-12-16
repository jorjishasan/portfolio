"use client";
import Link from "next/link";
import Image from "next/image";
import cn from "@/utils/cn";
import aeroupIcon from "@icon/aero-up.svg";
import { profileLinks } from "@/utils/constants";

const SocialLinks = () => {
  const { social_links } = profileLinks;
  return Object.values(social_links).map((social) => (
    <Link
      key={social.name}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center px-4 py-3 text-sm",
        "text-gray-300 hover:bg-gray-700",
        "transition-all duration-200",
        "group first:rounded-t-lg last:rounded-b-lg",
      )}
    >
      <Image
        className="mr-3 text-gray-400 transition-colors group-hover:text-white"
        alt={`${social.name} icon`}
        src={social.icon}
        width={20}
        height={20}
      />
      <span className="transition-colors group-hover:text-white">
        {social.name}
      </span>
      <span className="ml-auto scale-90 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
        <Image src={aeroupIcon} alt="aero up icon" width={16} height={16} />
      </span>
    </Link>
  ));
};

export default SocialLinks;
