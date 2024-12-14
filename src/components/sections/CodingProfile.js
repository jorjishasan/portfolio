import React from "react";

import { maxContainerWidth, profileLinks } from "@/utils/constants";
import ProfileCard from "@ui/codingprofile/ProfileCard";
import { sectionIntros } from "@/utils/constants";
const CodingProfile = () => {
  const { coding_profiles } = profileLinks;
  const { coding_profile } = sectionIntros;
  return (
    <div
      className="py-section-padding-y md:py-section-padding-y-md lg:py-section-padding-y-lg mt-section-margin-y md:mt-section-padding-y-md lg:mt-section-padding-y-lg mx-auto flex w-full flex-col items-center justify-center px-3"
      style={{ maxWidth: maxContainerWidth }}
    >
      <h2 className="text-center text-xs font-semibold uppercase text-purple-500">
        {coding_profile.tag}
      </h2>
      <div className="mx-auto mt-8 flex w-full justify-between gap-2 md:gap-4 lg:gap-6">
        {Object.values(coding_profiles).map((profile) => (
          <ProfileCard
            className="flex-grow-1"
            key={profile.name}
            profile={profile}
          />
        ))}
      </div>
    </div>
  );
};

export default CodingProfile;
