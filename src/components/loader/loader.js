"use client"

import { useEffect, useState, useRef } from "react"
import gsap from "gsap"
import './loader.css'

export default function Loader({ onComplete }) {
  // Track if the loader has already been shown in this session
  const [loaderShown, setLoaderShown] = useState(false)
  const loaderRef = useRef(null)
  
  useEffect(() => {
    // On component mount, check if loader has been shown before
    const hasSeenLoader = sessionStorage.getItem('loaderShown') === 'true'
    
    if (!hasSeenLoader) {
      // First visit - show the loader
      runAnimation()
      // Mark loader as shown for this session
      sessionStorage.setItem('loaderShown', 'true')
    } else {
      // Returning visit or internal navigation - skip the loader
      setLoaderShown(true)
      if (onComplete) onComplete()
    }
    
    // Add resize handler for better responsiveness
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [onComplete])
  
  const handleResize = () => {
    if (!loaderShown && loaderRef.current) {
      // Reset and re-run animation on resize
      gsap.killTweensOf(".count, .count-wrapper, .revealer svg, .header h1, .toggle-btn, .line p")
      runAnimation()
    }
  }
  
  const runAnimation = () => {
    // Improved mobile detection with breakpoints
    const screenWidth = window.innerWidth
    const isMobile = screenWidth < 768
    const isSmallMobile = screenWidth < 375
    
    // Dynamic sizing based on screen width
    const baseSize = Math.min(screenWidth * 0.25, isMobile ? 180 : 360)
    const wrapperWidth = baseSize * 0.5
    const wrapperHeight = baseSize
    const countWidth = baseSize * 1.5
    const finalPosition = screenWidth - wrapperWidth
    const stepDistance = finalPosition / 3
    
    // Scale SVGs appropriately for mobile
    const svgScale = isMobile ? Math.max(15, screenWidth / 16) : 45
    
    // Adjust timing for mobile (faster on mobile)
    const stepDuration = isMobile ? 0.4 : 0.5
    const revealDelay = isMobile ? 0.2 : 0.3
    const baseDelay = isMobile ? 2.5 : 3
    
    const tl = gsap.timeline()

    // Set initial styles dynamically based on screen size
    gsap.set(".digit h1", {
      fontSize: `${baseSize}px`,
    })

    gsap.set(".count-wrapper", {
      width: wrapperWidth,
      height: wrapperHeight,
    })

    gsap.set(".count", {
      width: countWidth,
      height: wrapperHeight,
      x: -countWidth,
    })

    gsap.set(".digit", {
      width: wrapperWidth,
      height: wrapperHeight,
    })

    // Optimize performance by using transform instead of x/y where possible
    gsap.set(".revealer svg", { 
      scale: 0,
      transformOrigin: "center center",
      willChange: "transform"
    })

    // Faster initial animation
    tl.to(".count", {
      x: -baseSize,
      duration: stepDuration,
      delay: 0.3,
      ease: "power4.inOut",
    })

    // Animation for each step
    for (let i = 1; i <= 3; i++) {
      const xPosition = -baseSize + i * wrapperWidth
      tl.to(".count", {
        x: xPosition,
        duration: stepDuration,
        ease: "power4.inOut",
        onStart: () => {
          gsap.to(".count-wrapper", {
            x: stepDistance * i,
            duration: stepDuration,
            ease: "power4.inOut",
          })
        },
      })
    }

    // Faster reveal animations with staggered timing
    const delays = [
      baseDelay, 
      baseDelay + revealDelay, 
      baseDelay + (revealDelay * 2)
    ]

    // Use staggered animations for better performance
    document.querySelectorAll(".revealer svg").forEach((el, i) => {
      gsap.to(el, {
        scale: svgScale,
        duration: isMobile ? 0.8 : 1,
        ease: "power4.inOut",
        delay: delays[i],
        onComplete: () => {
          if (i === delays.length - 1) {
            // Animation complete - mark as shown
            setLoaderShown(true)
            if (onComplete) onComplete()
          }
        },
      })
    })

    // Optimize final animations
    gsap.to(".header h1", {
      onStart: () => {
        gsap.to(".toggle-btn", {
          scale: 1,
          duration: 0.7,
          ease: "power4.inOut",
        })
        gsap.to(".line p", {
          y: 0,
          duration: 0.7,
          stagger: isMobile ? 0.05 : 0.07,
          ease: "power3.out",
        })
      },
      rotateY: 0,
      opacity: 1,
      duration: isMobile ? 1 : 1.2,
      ease: "power3.out",
      delay: delays[2] + 0.6,
    })
  }

  // If loader has already been shown, don't render it
  if (loaderShown) {
    return null
  }

  return (
    <div className="loader" ref={loaderRef}>
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
            d="M 115.73 20 L 98.2 91.46 L 195 193 L 192 195 L 91.46 99.55 L 20 117.08 L 195.28 200.67 L 20 284.27 L 90.11 301.8 L 192 207 L 194 209 L 98.2 309.89 L 117.08 380 L 200.67 204.72 L 284.27 380 L 301.8 309.89 L 206.07 208.76 L 207 208 L 309.89 301.8 L 380 282.92 L 204.72 200.67 L 380 115.73 L 308.54 99.55 L 208 195 L 207 193 L 301.8 91.46 L 284.27 20 L 199.33 195.28 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="revealer revealer-2">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 115.73 20 L 98.2 91.46 L 195 193 L 192 195 L 91.46 99.55 L 20 117.08 L 195.28 200.67 L 20 284.27 L 90.11 301.8 L 192 207 L 194 209 L 98.2 309.89 L 117.08 380 L 200.67 204.72 L 284.27 380 L 301.8 309.89 L 206.07 208.76 L 207 208 L 309.89 301.8 L 380 282.92 L 204.72 200.67 L 380 115.73 L 308.54 99.55 L 208 195 L 207 193 L 301.8 91.46 L 284.27 20 L 199.33 195.28 Z"
            fill="#f24822"
          />
        </svg>
      </div>

      <div className="revealer revealer-3">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 115.73 20 L 98.2 91.46 L 195 193 L 192 195 L 91.46 99.55 L 20 117.08 L 195.28 200.67 L 20 284.27 L 90.11 301.8 L 192 207 L 194 209 L 98.2 309.89 L 117.08 380 L 200.67 204.72 L 284.27 380 L 301.8 309.89 L 206.07 208.76 L 207 208 L 309.89 301.8 L 380 282.92 L 204.72 200.67 L 380 115.73 L 308.54 99.55 L 208 195 L 207 193 L 301.8 91.46 L 284.27 20 L 199.33 195.28 Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  )
}