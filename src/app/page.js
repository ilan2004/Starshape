"use client";
import { Footer } from "src/components/Footer/page";
import Hero from "../components/Hero/Page";
import { Services } from "../components/Services/Page";
import { Work } from "src/components/Work/page";
import { useEffect, useState } from "react";
import { useMobile } from "src/hooks/use-mobile";
import { Hook } from "src/components/Creativehook/Hook";
import Loader from "src/components/loader/loader";
import { database } from "utils/firebaseConfig";
import { ref, push } from "firebase/database";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const isMobile = useMobile();
  const videoSrc = "/background.mp4";

  useEffect(() => {
    console.log("isMobile:", isMobile); // Debug mobile detection
    if (isMobile) {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
      const handleResize = () => {
        document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isMobile]);

  // Capture and store referral parameter in Firebase
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = urlParams.get("ref"); // Extract ?ref= value

    if (referrer) {
      console.log("Referral source:", referrer);

      // Check if already tracked in sessionStorage (to avoid duplicate entries)
      if (!sessionStorage.getItem("trackedRef")) {
        const referralsRef = ref(database, "referrals"); // Firebase database path

        // Push referral data
        push(referralsRef, {
          referrer: referrer,
          timestamp: new Date().toISOString(),
        });

        sessionStorage.setItem("trackedRef", "true"); // Prevent duplicate tracking
      }
    }
  }, []);

  return (
    <div>
      {showLoader && <Loader onComplete={() => setShowLoader(false)} isMobile={isMobile} />}
      <Hero videoSrc={videoSrc} />
      <Hook />
      <Services />
      <Work />
      <Footer />
    </div>
  );
}
