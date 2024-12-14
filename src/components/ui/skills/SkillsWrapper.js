import Image from "next/image";
import skillsConfig from "./skillsConfig";
import SkillsCard from "./SkillsCard";
import skillsAndTools from "../../../../public/tools_mobile.svg";
const SkillsWrapper = () => {
  return (
    <>
      <Image src={skillsAndTools} className="mx-auto md:hidden" alt="image" />

      <div className="hidden flex-wrap justify-center gap-6 text-left md:flex">
        {Object.entries(skillsConfig).map((item, index) => {
          const margin = Math.max(60 - index * 30, 0);
          return (
            <SkillsCard
              className="flex-grow-1"
              marginTop={margin}
              key={item[0]}
              {...item}
            />
          );
        })}
      </div>
    </>
  );
};

export default SkillsWrapper;
