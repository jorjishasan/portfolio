import { GoArrowUpRight } from "react-icons/go";

const LandingContent = () => {
  return (
    <div className="text-center text-gray-200 xl:text-left">
      <span className="text-base md:text-xl lg:text-left lg:text-2xl">
        ☘️ I&apos;m Jorjis Hasan,
      </span>
      <h1 className="mb-8 mt-4 text-5xl font-black leading-tight md:text-6xl md:leading-[1.4] lg:mb-6 xl:text-[56px]">
        10x <br />
        Full-Stack Software <br /> Developer
        <span className="text-purple-500"> .</span>
      </h1>

      <div className="md:text-md flex flex-col items-center justify-center gap-2 text-xs md:mt-10 lg:mt-16 lg:flex-row lg:gap-4 lg:text-lg xl:justify-normal">
        <button className="w-fit rounded-md bg-purple-600 px-8 py-3 font-medium text-white hover:bg-purple-700 lg:py-4 xl:py-[14px]">
          Preview Resume
        </button>

        <button className="group flex items-center gap-1 px-8 py-3 text-purple-400/80">
          <span className="text-nowrap group-hover:underline">
            Book a consult
          </span>
          <GoArrowUpRight className="transform transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110" />
        </button>
      </div>
    </div>
  );
};

export default LandingContent;
