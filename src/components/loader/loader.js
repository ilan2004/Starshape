"use client"

import { useEffect, useState, useRef } from "react"
import gsap from "gsap"
import './loader.css'

export default function Loader({ onComplete }) {
  const [loaderShown, setLoaderShown] = useState(false)
  const loaderRef = useRef(null)
  
  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem('loaderShown') === 'true'
    
    if (!hasSeenLoader) {
      runAnimation()
      sessionStorage.setItem('loaderShown', 'true')
    } else {
      setLoaderShown(true)
      if (onComplete) onComplete()
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [onComplete])
  
  const handleResize = () => {
    if (!loaderShown && loaderRef.current) {
      gsap.killTweensOf(".count, .count-wrapper, .revealer svg, .header h1, .toggle-btn, .line p")
      runAnimation()
    }
  }
  
  const runAnimation = () => {
    const screenWidth = window.innerWidth
    const isMobile = screenWidth < 768
    const isSmallMobile = screenWidth < 375
    
    const baseSize = Math.min(screenWidth * 0.25, isMobile ? 180 : 360)
    const wrapperWidth = baseSize * 0.5
    const wrapperHeight = baseSize
    const countWidth = baseSize * 1.5
    const finalPosition = screenWidth - wrapperWidth
    const stepDistance = finalPosition / 3
    
    // Adjusted scale values with better mobile optimization
    const svgScale = isMobile ? (isSmallMobile ? 12 : 16) : 40
    
    const stepDuration = isMobile ? 0.4 : 0.5
    const revealDelay = isMobile ? 0.2 : 0.3
    const baseDelay = isMobile ? 2.5 : 3
    
    const tl = gsap.timeline()

    // Initial setups
    gsap.set(".digit h1", { 
      fontSize: `${baseSize}px`
    })

    gsap.set(".count-wrapper", { 
      width: wrapperWidth, 
      height: wrapperHeight 
    })

    gsap.set(".count", { 
      width: countWidth, 
      height: wrapperHeight, 
      x: -countWidth 
    })

    gsap.set(".digit", { 
      width: wrapperWidth, 
      height: wrapperHeight 
    })

    // Enhanced SVG setup for better quality
    gsap.set(".revealer svg", { 
      scale: 0,
      transformOrigin: "center center",
      willChange: "transform",
      overwrite: true
    })
    
    document.querySelectorAll(".revealer svg").forEach(svg => {
      svg.setAttribute('shape-rendering', 'geometricPrecision')
      svg.setAttribute('vector-effect', 'non-scaling-stroke')
      svg.style.overflow = 'visible'
      
      const baseWidth = 800
      svg.setAttribute('width', baseWidth)
      svg.setAttribute('height', baseWidth)
      svg.setAttribute('viewBox', `0 0 ${baseWidth} ${baseWidth}`)
    })

    // Counter animation
    tl.to(".count", {
      x: -baseSize,
      duration: stepDuration,
      delay: 0.3,
      ease: "power4.inOut",
    })

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

    // Reveal animations
    const delays = [
      baseDelay, 
      baseDelay + revealDelay, 
      baseDelay + (revealDelay * 2)
    ]

    document.querySelectorAll(".revealer svg").forEach((el, i) => {
      el.style.backfaceVisibility = 'hidden'
      el.style.perspective = '1000'
      
      gsap.to(el, {
        scale: svgScale,
        duration: isMobile ? 0.8 : 1,
        ease: "power4.inOut",
        delay: delays[i],
        force3D: true,
        onUpdate: () => {
          el.style.transform = `scale(${gsap.getProperty(el, "scale")}) translateZ(0)`
        },
        onComplete: () => {
          if (i === delays.length - 1) {
            setLoaderShown(true)
            if (onComplete) onComplete()
          }
        },
      })
    })

    // Final animations
    gsap.to(".header h1", {
      onStart: () => {
        gsap.to(".toggle-btn", { 
          scale: 1, 
          duration: 0.7, 
          ease: "power4.inOut" 
        })
        gsap.to(".line p", { 
          y: 0, 
          duration: 0.7, 
          stagger: isMobile ? 0.05 : 0.07, 
          ease: "power3.out" 
        })
      },
      rotateY: 0,
      opacity: 1,
      duration: isMobile ? 1 : 1.2,
      ease: "power3.out",
      delay: delays[2] + 0.6,
    })
  }

  if (loaderShown) return null

  return (
    <div className="loader" ref={loaderRef}>
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
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M232 40L196 182L390 386L384 390L182 200L40 234L390 402L40 568L180 604L384 414L388 418L196 620L234 760L402 410L568 760L604 620L412 418L414 416L620 604L760 566L410 402L760 232L618 200L416 390L414 386L604 182L568 40L398 390Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            vector-effect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="revealer revealer-2">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M232 40L196 182L390 386L384 390L182 200L40 234L390 402L40 568L180 604L384 414L388 418L196 620L234 760L402 410L568 760L604 620L412 418L414 416L620 604L760 566L410 402L760 232L618 200L416 390L414 386L604 182L568 40L398 390Z"
            fill="#f24822"
            stroke="#f24822"
            strokeWidth="2"
            vector-effect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="revealer revealer-3">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M232 40L196 182L390 386L384 390L182 200L40 234L390 402L40 568L180 604L384 414L388 418L196 620L234 760L402 410L568 760L604 620L412 418L414 416L620 604L760 566L410 402L760 232L618 200L416 390L414 386L604 182L568 40L398 390Z"
            fill="black"
            stroke="black"
            strokeWidth="2"
            vector-effect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  )
}