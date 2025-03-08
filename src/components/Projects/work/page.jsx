"use client";
import './work.css'
import AnimatedH1 from "src/components/Animation/AnimatedH1/AnimatedH1";
import AnimatedCopy from "src/components/Animation/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "src/components/Animation/ParallaxImage/ParallaxImage";
import { Footer } from "src/components/Footer/page";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useRouter } from "next/navigation";

const Projectworks = () => {
  const router = useRouter();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => lenis.destroy();
  }, []);

  const projectsData = [
    {
      id: 1,
      name: "Dion power",
      imageUrl: "projects/scooter.jpg",
    },
    {
      id: 2,
      name: "WallpaperWale",
      imageUrl: "projects/wallpaper.jpg",
    },
    {
      id: 3,
      name: "Pulikkalfuels",
      imageUrl: "projects/petrol.jpg",
    },
    {
      id: 4,
      name: "Raphael media",
      imageUrl: "projects/camera.jpg",
    },

  ];

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "scale(1)",
        },
        {
          opacity: 0.4,
          transform: "scale(0.5)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleNavigation = (e, path) => {
    e.preventDefault();

    setTimeout(() => {
      router.push(path, {
        onTransitionReady: slideInOut,
      });
    }, 200);
  };

  return (
    <div className="page">
      <section className="work-hero">
        <div className="container">
          <AnimatedH1 delay={1}>From vision to victory</AnimatedH1>
          <AnimatedCopy delay={1.2} animateOnScroll={false}>
            Elevating digital marketing excellence through strategic innovation
          </AnimatedCopy>
        </div>
      </section>

      <section className="projects">
        {projectsData.map((project) => (
          <div className="project" key={project.id}>
            <div className="project-banner-img">
              <ParallaxImage src={project.imageUrl} alt={project.name} />
              <div className="project-title">
                <a
                  href="/project"
                  onClick={(e) => handleNavigation(e, "/project")}
                >
                  <AnimatedH1 animateOnScroll={true}>{project.name}</AnimatedH1>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Projectworks;
