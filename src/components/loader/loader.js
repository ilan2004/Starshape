"use client"
import { useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import './loader.css';

// Global variable to persist across route changes but reset on page refresh
let hasVisitedInThisSession = false;

export default function Loader({ onComplete, isMobile: propIsMobile }) {
  const [shouldAnimate, setShouldAnimate] = useState(!hasVisitedInThisSession);
  // Use propIsMobile if provided, otherwise fall back to window check
  const isMobile = propIsMobile !== undefined ? propIsMobile : (typeof window !== "undefined" && window.innerWidth < 768);
  const svgSize = isMobile ? 200 : 400;

  useLayoutEffect(() => {
    if (hasVisitedInThisSession) {
      setShouldAnimate(false);
      if (onComplete) setTimeout(onComplete, 0);
      return;
    }
    hasVisitedInThisSession = true;
  }, [onComplete]);

  useEffect(() => {
    if (!shouldAnimate) return;

    const windowWidth = window.innerWidth;
    const wrapperWidth = isMobile ? 90 : 180;
    const finalPosition = windowWidth - wrapperWidth;
    const stepDistance = finalPosition / 3;
    const tl = gsap.timeline();

    gsap.set(".digit h1", { fontSize: isMobile ? "180px" : "360px" });
    gsap.set(".count-wrapper", {
      width: `${wrapperWidth}px`,
      height: isMobile ? "180px" : "360px",
      overflow: "hidden",
    });
    gsap.set(".count", {
      width: isMobile ? "270px" : "540px",
      height: isMobile ? "180px" : "360px",
      x: isMobile ? "-270px" : "-540px",
    });
    gsap.set(".digit", {
      width: `${wrapperWidth}px`,
      height: isMobile ? "180px" : "360px",
    });

    tl.to(".count", {
      x: isMobile ? "-180px" : "-360px",
      duration: 0.5,
      delay: 0.3,
      ease: "power4.inOut",
    });

    for (let i = 1; i <= 3; i++) {
      const xPosition = (isMobile ? -180 : -360) + i * wrapperWidth;
      tl.to(".count", {
        x: `${xPosition}px`,
        duration: 0.5,
        ease: "power4.inOut",
        onStart: () => {
          gsap.to(".count-wrapper", {
            x: `${stepDistance * i}px`,
            duration: 0.5,
            ease: "power4.inOut",
          });
        },
      });
    }

    gsap.set(".revealer svg", { scale: 0 });
    const delays = [3, 3.3, 3.6];
    const maxScale = isMobile ? 25 : 45;

    const revealers = document.querySelectorAll(".revealer svg");
    if (revealers.length > 0) {
      revealers.forEach((el, i) => {
        gsap.to(el, {
          scale: maxScale,
          duration: 1,
          ease: "power4.inOut",
          delay: delays[i],
          onComplete: () => {
            if (i === delays.length - 1 && onComplete) onComplete();
          },
        });
      });
    } else {
      console.warn("No .revealer svg elements found");
      setTimeout(() => onComplete && onComplete(), 1000); // Fallback timeout
    }

    const header = document.querySelector(".header h1");
    if (header) {
      gsap.to(header, {
        onStart: () => {
          gsap.to(".toggle-btn", { scale: 1, duration: 0.7, ease: "power4.inOut" });
          gsap.to(".line p", { y: 0, duration: 0.7, stagger: 0.07, ease: "power3.out" });
        },
        rotateY: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 4.2,
      });
    }
  }, [onComplete, shouldAnimate, isMobile]);

  if (!shouldAnimate) return null;

  return (
    <div className="loader">
      <div className="count-wrapper">
        <div className="count">
          <div className="digit"><h1>7</h1></div>
          <div className="digit"><h1>4</h1></div>
          <div className="digit"><h1>0</h1></div>
        </div>
      </div>
      <div className="count-wrapper">
        <div className="count">
          <div className="digit"><h1>9</h1></div>
          <div className="digit"><h1>5</h1></div>
          <div className="digit"><h1>0</h1></div>
        </div>
      </div>
      <div className="revealer revealer-1">
        <svg width={svgSize} height={svgSize} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 115.73 20 L 98.2 91.46 L 195 193 L 192 195 
                L 91.46 99.55 L 20 117.08 L 195.28 200.67 
                L 20 284.27 L 90.11 301.8 L 192 207 
                L 194 209 L 98.2 309.89 L 117.08 380 
                L 200.67 204.72 L 284.27 380 L 301.8 309.89 
                L 206.07 208.76 L 207 208 L 309.89 301.8 
                L 380 282.92 L 204.72 200.67 L 380 115.73 
                L 308.54 99.55 L 208 195 L 207 193 
                L 301.8 91.46 L 284.27 20 L 199.33 195.28 Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="revealer revealer-2">
        <svg width={svgSize} height={svgSize} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 115.73 20 L 98.2 91.46 L 195 193 L 192 195 
                L 91.46 99.55 L 20 117.08 L 195.28 200.67 
                L 20 284.27 L 90.11 301.8 L 192 207 
                L 194 209 L 98.2 309.89 L 117.08 380 
                L 200.67 204.72 L 284.27 380 L 301.8 309.89 
                L 206.07 208.76 L 207 208 L 309.89 301.8 
                L 380 282.92 L 204.72 200.67 L 380 115.73 
                L 308.54 99.55 L 208 195 L 207 193 
                L 301.8 91.46 L 284.27 20 L 199.33 195.28 Z"
            fill="#f24822"
          />
        </svg>
      </div>
      <div className="revealer revealer-3">
        <svg width={svgSize} height={svgSize} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 115.73 20 L 98.2 91.46 L 195 193 L 192 195 
                L 91.46 99.55 L 20 117.08 L 195.28 200.67 
                L 20 284.27 L 90.11 301.8 L 192 207 
                L 194 209 L 98.2 309.89 L 117.08 380 
                L 200.67 204.72 L 284.27 380 L 301.8 309.89 
                L 206.07 208.76 L 207 208 L 309.89 301.8 
                L 380 282.92 L 204.72 200.67 L 380 115.73 
                L 308.54 99.55 L 208 195 L 207 193 
                L 301.8 91.46 L 284.27 20 L 199.33 195.28 Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
}