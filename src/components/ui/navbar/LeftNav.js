"use client";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useApp } from "@/contexts/AppContext";

const LeftNav = () => {
  const { isDesktop } = useApp();

  return isDesktop ? <DesktopNav /> : <MobileNav />;
};

export default LeftNav;
