"use client"

import { useEffect, useState, useLayoutEffect } from "react"
import gsap from "gsap"
import './loader.css'

export default function Loader({ onComplete }) {
  // Start with loader enabled by default for initial page load
  const [shouldAnimate, setShouldAnimate] = useState(true)

  useLayoutEffect(() => {
    // We need a way to detect if this is a page reload vs route navigation
    // For this, we'll use sessionStorage which clears on page reload but persists during route navigation
    const pageLoadTimestamp = sessionStorage.getItem('pageLoadTimestamp');
    const routeChangeTimestamp = localStorage.getItem('routeChangeTimestamp');
    const currentTime = new Date().getTime();
    
    // If there's no pageLoadTimestamp, this is either first visit or a page reload
    if (!pageLoadTimestamp) {
      // This is a fresh page load (either first visit or reload)
      sessionStorage.setItem('pageLoadTimestamp', currentTime.toString());
      setShouldAnimate(true);
    } else {
      // This is route navigation, not a page reload
      localStorage.setItem('routeChangeTimestamp', currentTime.toString());
      setShouldAnimate(false);
      if (onComplete) setTimeout(onComplete, 0);
    }
  }, [onComplete])

  useEffect(() => {
    // Skip all animations if we shouldn't animate
    if (!shouldAnimate) {
      return
    }

    const isMobile = window.innerWidth < 768
    const windowWidth = window.innerWidth
    const wrapperWidth = isMobile ? 90 : 180
    const finalPosition = windowWidth - wrapperWidth
    const stepDistance = finalPosition / 3 // Reduced steps to 3
    const tl = gsap.timeline()

    // Set initial styles based on device
    gsap.set(".digit h1", {
      fontSize: isMobile ? "180px" : "360px",
    })

    gsap.set(".count-wrapper", {
      width: wrapperWidth,
      height: isMobile ? 180 : 360,
    })

    gsap.set(".count", {
      width: isMobile ? 270 : 540, // Reduced width for 3 digits
      height: isMobile ? 180 : 360,
      x: isMobile ? -270 : -540, // Adjusted position for 3 digits
    })

    gsap.set(".digit", {
      width: wrapperWidth,
      height: isMobile ? 180 : 360,
    })

    // Faster initial animation
    tl.to(".count", {
      x: isMobile ? -180 : -360,
      duration: 0.5, // Reduced from 0.85
      delay: 0.3, // Reduced from 0.5
      ease: "power4.inOut",
    })

    // Animation for each step (3 instead of 6)
    for (let i = 1; i <= 3; i++) {
      const xPosition = (isMobile ? -180 : -360) + i * wrapperWidth
      tl.to(".count", {
        x: xPosition,
        duration: 0.5, // Reduced from 0.85
        ease: "power4.inOut",
        onStart: () => {
          gsap.to(".count-wrapper", {
            x: stepDistance * i,
            duration: 0.5, // Reduced from 0.85
            ease: "power4.inOut",
          })
        },
      })
    }

    gsap.set(".revealer svg", { scale: 0 })

    // Faster reveal animations
    const delays = [3, 3.3, 3.6] // Reduced from [6, 6.5, 7]
    const maxScale = isMobile ? 25 : 45

    document.querySelectorAll(".revealer svg").forEach((el, i) => {
      gsap.to(el, {
        scale: maxScale,
        duration: 1, // Reduced from 1.5
        ease: "power4.inOut",
        delay: delays[i],
        onComplete: () => {
          if (i === delays.length - 1) {
            if (onComplete) onComplete()
          }
        },
      })
    })

    gsap.to(".header h1", {
      onStart: () => {
        gsap.to(".toggle-btn", {
          scale: 1,
          duration: 0.7, // Reduced from 1
          ease: "power4.inOut",
        })
        gsap.to(".line p", {
          y: 0,
          duration: 0.7, // Reduced from 1
          stagger: 0.07, // Reduced from 0.1
          ease: "power3.out",
        })
      },
      rotateY: 0,
      opacity: 1,
      duration: 1.2, // Reduced from 2
      ease: "power3.out",
      delay: 4.2, // Reduced from 8
    })
  }, [onComplete, shouldAnimate])

  // If we're not animating, don't render the loader
  if (!shouldAnimate) {
    return null
  }

  return (
    <div className="loader">
      <div className="count-wrapper">
        <div className="count">
          <div className="digit">
            <h1>7</h1>
          </div>
          <div className="digit">
            <h1>4</h1>
          </div>
          <div className="digit">
            <h1>0</h1>
          </div>
        </div>
      </div>

      <div className="count-wrapper">
        <div className="count">
          <div className="digit">
            <h1>9</h1>
          </div>
          <div className="digit">
            <h1>5</h1>
          </div>
          <div className="digit">
            <h1>0</h1>
          </div>
        </div>
      </div>

      <div className="revealer revealer-1">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  )
}