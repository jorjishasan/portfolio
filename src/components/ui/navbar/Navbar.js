import { maxContainerWidth } from "@/utils/constants";
import LeftNav from "./LeftNav";
import QuickLinksMenu from "./QuickLinksMenu";

const Navbar = () => {
  return (
    <nav
      className="relative mx-auto flex items-center justify-between p-4 transition-all duration-300 lg:px-0"
      style={{ maxWidth: `${maxContainerWidth}px` }}
    >
      <LeftNav />
      <QuickLinksMenu />
    </nav>
  );
};

export default Navbar;
