import cn from "@/utils/cn";
import { navItems } from "@/utils/constants";
import Hamburger from "./Hamburger";
import { useApp } from "@/contexts/AppContext";

const MobileNav = () => {
  const { isHamburgerOpen } = useApp();
  return (
    <>
      <Hamburger />

      <div
        className={cn(
          "absolute left-0 right-0 top-full",
          "bg-zinc-900/95 backdrop-blur-md",
          "border-t border-white/10",
          "origin-top transition-all duration-300 ease-out",
          isHamburgerOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <MobileNavLinks />
      </div>
    </>
  );
};

const MobileNavLinks = () => {
  const { isHamburgerOpen, setIsHamburgerOpen } = useApp();

  return (
    <div
      className={cn(
        "space-y-1 px-4 py-2",
        "bg-gray-900 transition-all duration-300 ease-out",
        isHamburgerOpen
          ? "translate-x-0 opacity-100"
          : "-translate-x-4 opacity-0",
      )}
    >
      {navItems.map((item) => (
        <a
          key={item.name}
          href={`#${item.href}`}
          onClick={() => setIsHamburgerOpen(false)}
          className="block rounded-md px-3 py-2 text-base font-medium text-purple-400 hover:bg-white/10 hover:text-white"
        >
          {"⏤ " + item.name}
        </a>
      ))}
    </div>
  );
};

export default MobileNav;
