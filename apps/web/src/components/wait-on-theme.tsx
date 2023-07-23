"use client";

import type { PropsWithChildren} from "react";
import { useEffect, useState } from "react";

interface WaitOnThemeProps {
  loadingDisplay?: React.ReactNode;
}
export function WaitOnTheme({
  loadingDisplay,
  children,
}: PropsWithChildren<WaitOnThemeProps>) {
  const [mounted, setMounted] = useState(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <>{loadingDisplay}</> ?? null;
  }
  return <>{children}</>;
}
