"use client";
import "./project.css";

import AnimatedH1 from "src/components/Animation/AnimatedH1/AnimatedH1";
import AnimatedCopy from "src/components/Animation/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "src/components/Animation/ParallaxImage/ParallaxImage";
import { Footer } from "src/components/Footer/page";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

const Dion = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
      <div className="page">
        <section className="project-hero">
          <div className="col">
            <div className="project-hero-img">
              <div className="project-hero-img-wrapper">
                <ParallaxImage
                  src="/projects/Dion/mockd.webp"
                  alt="Dion Power dashboard interface"
                  speed={0.2}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div className="project-page-title">
                <AnimatedH1 delay={1}>DION POWER</AnimatedH1>
              </div>
              <div className="row">
                <div className="sub-col">
                  <AnimatedCopy delay={1.125} animateOnScroll={false}>
                    Client
                  </AnimatedCopy>
                  <AnimatedCopy delay={1.25} tag="h3" animateOnScroll={false}>
                    DION POWER
                  </AnimatedCopy>
                </div>
                <div className="sub-col">
                  <AnimatedCopy delay={1.125} animateOnScroll={false}>
                    Services
                  </AnimatedCopy>
                  <AnimatedCopy delay={1.25} tag="h3" animateOnScroll={false}>
                    CUSTOM DASHBOARD, ORDER MANAGEMENT, INVOICE GENERATOR
                  </AnimatedCopy>
                </div>
              </div>
              <div className="row">
                <div className="sub-col"></div>
                <div className="sub-col">
                  <AnimatedCopy delay={1.5}>
                    We developed a comprehensive management system for Dion Power, featuring multi-level authentication, order tracking, invoice generation, and detailed battery analytics for their electric vehicle solutions.
                  </AnimatedCopy>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col">
              <AnimatedCopy tag="h3">Summary</AnimatedCopy>
            </div>
            <div className="col">
              <AnimatedCopy>
                Our partnership with Dion Power involved creating a sophisticated order and inventory management system with a powerful admin dashboard to streamline their lithium-ion battery business operations. The project focused on developing a centralized platform that could track orders, manage dealer relationships, monitor battery specifications, and generate detailed invoices.
              </AnimatedCopy>

              <AnimatedCopy delay={0.15}>
                We built a custom solution with multi-level authentication for users, managers, and administrators. The system's core is a feature-rich dashboard that provides real-time analytics on orders, companies, and invoices. The admin dashboard includes detailed tracking of battery specifications such as voltage and current, while also managing product information, service numbers, and chassis details for Dion Power's electric vehicle battery solutions.
              </AnimatedCopy>

              <AnimatedCopy delay={0.3}>
                The system now efficiently handles Dion Power's entire workflow from order receipt through delivery, with comprehensive tracking of technical specifications, customer information, and payment details. The dashboard displays critical business metrics including total orders (590), registered companies (20), and generated invoices (87), providing executives with valuable insights into business performance across various electric vehicle segments.
              </AnimatedCopy>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col">
            <div className="project-info-img-1">
                <div className="project-info-img-1-wrapper">
                  <ParallaxImage
                    src="/projects/Dion/invoice.webp"
                    alt="Dion Power custom invoice generator"
                    speed={0.2}
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="project-info-img-1">
                <div className="project-info-img-1-wrapper">
                  <ParallaxImage
                    src="/projects/Dion/admin.webp"
                    alt="Dion Power admin dashboard"
                    speed={0.2}
                  />
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col">
              <AnimatedCopy tag="h3">Dashboard Features</AnimatedCopy>
            </div>
            <div className="col">
              <AnimatedCopy>
                The Dion Power administration dashboard offers comprehensive order management with detailed tracking of battery specifications, delivery status, and payment information. Administrators can view critical metrics at a glance, including total orders (590), registered companies (20), and generated invoices (87), with visual trend indicators for performance monitoring over time.
              </AnimatedCopy>
              
              <AnimatedCopy delay={0.15}>
                The system features powerful record management capabilities, including the ability to add new records, search across all fields, and manage detailed battery specifications. Each order entry tracks critical information including serial numbers, dealer details, office location, payment status, delivery dates, order status, vehicle brand and model, and technical specifications such as battery voltage.
              </AnimatedCopy>
              
              <AnimatedCopy delay={0.3}>
                Users benefit from a streamlined interface with navigation between Orders, Invoices, Companies, Accounts, and Settings. The dashboard provides robust record management with capabilities to edit, delete, or download order information. The system handles multiple vehicle brands including HeroElectric, JoyEBike, and others, while providing detailed tracking of battery specifications essential for Dion Power's quality assurance and service operations.
              </AnimatedCopy>
            </div>
          </div>
        </section>

        <section className="project-preview-img">
          <div className="project-preview-img-wrapper">
            <ParallaxImage
              src="/projects/Dion/dashboard.webp"
              alt="Dion Power dashboard interface showing order details and analytics"
              speed={0.2}
            />
          </div>
        </section>

        <section className="project-info project-info-outro">
          <div className="container">
            <div className="col">
              <AnimatedCopy tag="h3">Technical Implementation</AnimatedCopy>
            </div>
            <div className="col">
              <AnimatedCopy>
                For Dion Power's management system, we developed a comprehensive solution with multiple authentication layers and robust data tracking capabilities. The dashboard tracks detailed technical specifications including battery voltage, battery current, chassis numbers, and service information. The system manages complex relationships between dealers, products, and service locations while maintaining detailed records of order statuses, from placement through delivery.
              </AnimatedCopy>

              <AnimatedCopy delay={0.15}>
                Our technical implementation includes a sophisticated invoice generation system that creates professional invoices with detailed battery specifications and service information. The dashboard provides administrators with powerful search capabilities across all fields and comprehensive data management tools. We incorporated visual analytics with trend charts for orders, companies, and invoices, giving management valuable insights into business performance and operational efficiency in their growing electric vehicle battery business.
              </AnimatedCopy>
            </div>
          </div>
        </section>

        <Footer />
      </div>

  );
};

export default Dion;