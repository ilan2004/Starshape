"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { logPageView, logEvent } from "utils/analytics";

export default function ClientWrapper() {
  const pathname = usePathname();

  useEffect(() => {
    logPageView(pathname);

    // Capture referral parameter
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = urlParams.get("ref") || "direct"; // Default to "direct" if no ref

    // Track session duration
    const sessionStart = Date.now();

    const handleUnload = () => {
      const sessionEnd = Date.now();
      const durationInSeconds = Math.round((sessionEnd - sessionStart) / 1000);

      logEvent("session_duration", {
        duration: durationInSeconds,
        referrer: referrer, // Attach referrer info
      });
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [pathname]);

  return null; 
}
