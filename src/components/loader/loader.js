"use client"

import { useEffect } from "react"
import gsap from "gsap"
import './loader.css'

export default function Loader({ onComplete }) {
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const windowWidth = window.innerWidth
    const wrapperWidth = isMobile ? 90 : 180
    const finalPosition = windowWidth - wrapperWidth
    const stepDistance = finalPosition / 6
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
      width: isMobile ? 540 : 1080,
      height: isMobile ? 180 : 360,
      x: isMobile ? -540 : -1080,
    })

    gsap.set(".digit", {
      width: wrapperWidth,
      height: isMobile ? 180 : 360,
    })

    tl.to(".count", {
      x: isMobile ? -450 : -900,
      duration: 0.85,
      delay: 0.5,
      ease: "power4.inOut",
    })

    for (let i = 1; i <= 6; i++) {
      const xPosition = (isMobile ? -450 : -900) + i * wrapperWidth
      tl.to(".count", {
        x: xPosition,
        duration: 0.85,
        ease: "power4.inOut",
        onStart: () => {
          gsap.to(".count-wrapper", {
            x: stepDistance * i,
            duration: 0.85,
            ease: "power4.inOut",
          })
        },
      })
    }

    gsap.set(".revealer svg", { scale: 0 })

    const delays = [6, 6.5, 7]
    const maxScale = isMobile ? 25 : 45

    document.querySelectorAll(".revealer svg").forEach((el, i) => {
      gsap.to(el, {
        scale: maxScale,
        duration: 1.5,
        ease: "power4.inOut",
        delay: delays[i],
        onComplete: () => {
          if (i === delays.length - 1) {
            // Don't manually remove the DOM element
            // Just call the onComplete callback to let React handle unmounting
            if (onComplete) onComplete()
          }
        },
      })
    })

    gsap.to(".header h1", {
      onStart: () => {
        gsap.to(".toggle-btn", {
          scale: 1,
          duration: 1,
          ease: "power4.inOut",
        })
        gsap.to(".line p", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        })
      },
      rotateY: 0,
      opacity: 1,
      duration: 2,
      ease: "power3.out",
      delay: 8,
    })
  }, [onComplete])

  return (
    <div className="loader">
      <div className="count-wrapper">
        <div className="count">
          <div className="digit">
            <h1>9</h1>
          </div>
          <div className="digit">
            <h1>8</h1>
          </div>
          <div className="digit">
            <h1>7</h1>
          </div>
          <div className="digit">
            <h1>4</h1>
          </div>
          <div className="digit">
            <h1>2</h1>
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
            <h1>9</h1>
          </div>
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

      <div className="revealer revealer-1">
        <svg width="151" height="148" viewBox="0 0 151 148" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M75.9817 0L77.25 34.2209C78.0259 55.1571 94.8249 71.9475 115.762 72.7127L150.982 74L115.762 75.2873C94.8249 76.0525 78.0259 92.8429 77.25 113.779L75.9817 148L74.7134 113.779C73.9375 92.8429 57.1385 76.0525 36.2019 75.2873L0.981689 74L36.2018 72.7127C57.1384 71.9475 73.9375 55.1571 74.7134 34.2209L75.9817 0Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="revealer revealer-2">
        <svg width="151" height="148" viewBox="0 0 151 148" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M75.9817 0L77.25 34.2209C78.0259 55.1571 94.8249 71.9475 115.762 72.7127L150.982 74L115.762 75.2873C94.8249 76.0525 78.0259 92.8429 77.25 113.779L75.9817 148L74.7134 113.779C73.9375 92.8429 57.1385 76.0525 36.2019 75.2873L0.981689 74L36.2018 72.7127C57.1384 71.9475 73.9375 55.1571 74.7134 34.2209L75.9817 0Z"
            fill="#f24822"
          />
        </svg>
      </div>

      <div className="revealer revealer-3">
        <svg width="151" height="148" viewBox="0 0 151 148" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M75.9817 0L77.25 34.2209C78.0259 55.1571 94.8249 71.9475 115.762 72.7127L150.982 74L115.762 75.2873C94.8249 76.0525 78.0259 92.8429 77.25 113.779L75.9817 148L74.7134 113.779C73.9375 92.8429 57.1385 76.0525 36.2019 75.2873L0.981689 74L36.2018 72.7127C57.1384 71.9475 73.9375 55.1571 74.7134 34.2209L75.9817 0Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  )
}