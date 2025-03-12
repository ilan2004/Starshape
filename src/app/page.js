"use client";
import { Footer } from "src/components/Footer/page";
import Hero from "../components/Hero/Page";
import { Services } from "../components/Services/Page";
import { Work } from "src/components/Work/page";
import { useEffect, useState } from "react";
import { useMobile } from "src/hooks/use-mobile";
import { Hook } from "src/components/Creativehook/Hook";
import Loader from "src/components/loader/loader";

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


  return (
    <div>
      <Loader/>
      <Hero videoSrc={videoSrc} />
      <Hook />
      <Services />
      <Work />
      <Footer />
    </div>
  );
}
