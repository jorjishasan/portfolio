import cn from "@/utils/cn";
import { useApp } from "@/contexts/AppContext";
import { navItems } from "@/utils/constants";

const DesktopNav = () => {
  const { activeItem, setActiveItem } = useApp();

  return (
    <div className="hidden items-center space-x-8 lg:flex">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={`#${item.href}`}
          className={cn(
            "px-4 py-2 text-base font-medium text-gray-300",
            "transition-all duration-300",
            "relative hover:text-white",
            activeItem && activeItem !== item.name && "opacity-40",
          )}
          onMouseEnter={() => setActiveItem(item.name)}
          onMouseLeave={() => setActiveItem(null)}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default DesktopNav;
