"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const ClientRedirect = () => {
  const pathname = usePathname();
  const hasRedirected = useRef(false);

  useEffect(() => {
    const shouldRedirect = pathname !== "/" && !hasRedirected.current;
    if (shouldRedirect) {
      hasRedirected.current = true;
      window.history.replaceState({}, "", "/");
    }
  }, [pathname]);

  return null;
};

export default ClientRedirect;
