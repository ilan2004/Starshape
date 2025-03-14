"use client";
import {
  useEffect,
  useState,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Fix import
import "./Nav.css";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import MenuBtn from "../MenuBtn/MenuBtn";
import Image from 'next/image';
import { logEvent } from "firebase/analytics";
import { analytics } from "utils/firebaseConfig";



const Nav = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const isInitializedRef = useRef(false);
  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );
  }, []);

  useEffect(() => {
    console.log("Initializing Nav component");
    if (menuRef.current) {
      const menu = menuRef.current;
      const links = menu.querySelectorAll(".link");
      const socialLinks = menu.querySelectorAll(".socials p");

      gsap.set(menu, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      });
      gsap.set(links, { y: 30, opacity: 0 });
      gsap.set(socialLinks, { y: 30, opacity: 0 });
      gsap.set(".header h1 span", {
        y: 500,
        rotateY: 90,
        scale: 0.8,
      });

      isInitializedRef.current = true;
    }
  }, []);

  // Close menu when pathname changes (page navigation)
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  const animateMenu = useCallback((open) => {
    if (!menuRef.current) {
      console.log("Menu ref is not available");
      return;
    }

    const menu = menuRef.current;
    const links = menu.querySelectorAll(".link");
    const socialLinks = menu.querySelectorAll(".socials p");

    setIsAnimating(true);

    if (open) {
      gsap.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1.5,
        onStart: () => {
          menu.style.pointerEvents = "all";
        },
        onComplete: () => {
          setIsAnimating(false);
          console.log("Open animation completed");
        },
      });

      gsap.to(links, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.85,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(socialLinks, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        delay: 0.85,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(".video-wrapper", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 2,
        delay: 0.5,
      });

      gsap.to(".header h1 span", {
        rotateY: 0,
        stagger: 0.05,
        delay: 0.75,
        duration: 1.5,
        ease: "power4.out",
      });

      gsap.to(".header h1 span", {
        y: 0,
        scale: 1,
        stagger: 0.05,
        delay: 0.5,
        duration: 1.5,
        ease: "power4.out",
      });
    } else {
      gsap.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "hop",
        duration: 1.5,
        onComplete: () => {
          menu.style.pointerEvents = "none";
          gsap.set(menu, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          });

          gsap.set(links, { y: 30, opacity: 0 });
          gsap.set(socialLinks, { y: 30, opacity: 0 });
          gsap.set(".header h1 span", {
            y: 500,
            rotateY: 90,
            scale: 0.8,
          });

          setIsAnimating(false);
          console.log("Close animation completed");
        },
      });
    }
  }, []);

  useEffect(() => {
    if (isInitializedRef.current) {
      console.log(`isOpen changed: ${isOpen}`);
      animateMenu(isOpen);
    }
  }, [isOpen, animateMenu]);

  const toggleMenu = useCallback(() => {
    if (!isAnimating) {
      setIsOpen((prevIsOpen) => !prevIsOpen);
      logEvent(analytics, "menu_button_click"); // Log event only when menu actually toggles
    }
  }, [isAnimating]); 
  

  const closeMenu = useCallback(() => {
    if (!isAnimating && isOpen) {
      setIsOpen(false);
    }
  }, [isAnimating, isOpen]);

  const handleClick = (e) => {
    e.preventDefault();
  
    if (pathname === "/") {
      // Scroll to the services section
      document.getElementById("hover")?.scrollIntoView({ behavior: "smooth" });
      
      // Close menu if open
      closeMenu();
    } else {
      // Navigate to home, then scroll after page loads
      router.push("/");
      setTimeout(() => {
        document.getElementById("hover")?.scrollIntoView({ behavior: "smooth" });
        
        // Close menu after navigating
        closeMenu();
      }, 500);
    }

      
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <Link href="/">
            <img className="logoicon" src="/Logos/star.svg" />
          </Link>
        </div>

        <MenuBtn isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      <div className="menu" ref={menuRef}>
        <div className="col col-1">
          <div className="links">
            <div className="link">
              <Link href="/" onClick={closeMenu}>Home</Link>
            </div>
            <div className="link">
              <Link href="/Works" onClick={closeMenu}>Portfolio</Link>
            </div>
            <div className="link">
              <a onClick={handleClick} style={{ cursor: "pointer" }}>Services</a>
            </div>
            <div className="link">
              <Link href="/Contact" onClick={closeMenu}>Contact</Link>
            </div>
          </div>
         
        </div>
        <div className="col col-2">
        <div className="socials">
  <div className="sub-col">
    <p>
      <a href="https://www.instagram.com/thestarshape/" target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
    </p>
    <p>
      <a href="https://www.linkedin.com/company/star-shape" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </p>
    <p>
      <a href="https://wa.me/7034926395" target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
    </p>
    <p>
    </p>
    <br />
  </div>
</div>

          <div className="video-wrapper">
            <video src="" muted autoPlay loop />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Nav;