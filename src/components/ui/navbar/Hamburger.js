import cn from "@/utils/cn";
import { useApp } from "@/contexts/AppContext";

const HamburgerMenu = () => {
  const { isHamburgerOpen, setIsHamburgerOpen } = useApp();

  return (
    <button
      className="relative flex h-[30px] w-10 items-center justify-center rounded-[4px] border-[0.4px] border-gray-700/60 xl:hidden"
      onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
    >
      {/* Top Line */}
      <span
        className={cn(
          "absolute h-[2.2px] w-[50%] rounded bg-purple-500 transition-all duration-300",
          isHamburgerOpen ? "rotate-45" : "-translate-y-[3px]",
        )}
      ></span>

      {/* Bottom Line */}
      <span
        className={cn(
          "absolute h-[2.2px] w-[50%] rounded bg-purple-500 transition-all duration-300",
          isHamburgerOpen ? "-rotate-45" : "translate-y-[3px]",
        )}
      ></span>
    </button>
  );
};

export default HamburgerMenu;
