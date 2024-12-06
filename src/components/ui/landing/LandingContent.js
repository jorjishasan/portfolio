import { GoArrowUpRight } from "react-icons/go";

const LandingContent = () => {
  return (
    <div className="text-center text-gray-200 xl:text-left">
      <span className="text-sm md:text-base lg:text-left lg:text-xl">
        ☘️ I&apos;m Jorjis Hasan,
      </span>
      <h1 className="my-4 text-3xl font-black leading-[1.4] md:text-5xl lg:my-4 lg:text-6xl">
        10x <br />
        Full-Stack Software <br /> Developer
        <span className="text-purple-500"> .</span>
      </h1>

      <div className="md:text-md mt-6 flex flex-col items-center justify-center gap-4 text-xs md:mt-10 md:text-sm lg:mt-16 lg:flex-row lg:text-lg xl:justify-normal">
        <button className="w-fit rounded-md bg-purple-500 px-8 py-3 font-medium text-white lg:py-4">
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
