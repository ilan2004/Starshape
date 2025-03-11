"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { logPageView, logEvent } from "utils/analytics";
import { database } from "utils/firebase"; // Import Firebase DB
import { ref, push } from "firebase/database";

export default function ClientWrapper() {
  const pathname = usePathname();

  useEffect(() => {
    logPageView(pathname);

    // Get referral source
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = urlParams.get("ref") || "direct"; // Default to "direct" if no ref

    // Capture device information
    const deviceInfo = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
    };

    // Track session duration
    const sessionStart = Date.now();

    const handleUnload = () => {
      const sessionEnd = Date.now();
      const durationInSeconds = Math.round((sessionEnd - sessionStart) / 1000);

      // Log session duration in Firebase Analytics
      logEvent("session_duration", {
        duration: durationInSeconds,
        referrer: referrer,
        device: deviceInfo,
      });

      // Store session duration & device info in Realtime Database
      const referralsRef = ref(database, "referrals");
      push(referralsRef, {
        referrer: referrer,
        timestamp: new Date().toISOString(),
        sessionDuration: durationInSeconds,
        device: deviceInfo,
      });
    };

    // Prevent duplicate tracking per session
    if (!sessionStorage.getItem("trackedRef")) {
      const referralsRef = ref(database, "referrals");
      push(referralsRef, {
        referrer: referrer,
        timestamp: new Date().toISOString(),
        device: deviceInfo,
      });
      sessionStorage.setItem("trackedRef", "true");
    }

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [pathname]);

  return null;
}
