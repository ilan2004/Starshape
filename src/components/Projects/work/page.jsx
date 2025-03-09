'use client'
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { caseStudies, getAllCategories } from "./caseStudies.js";
import styles from "./work.module.css";

export default function CaseStudiesPortfolio() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const allCategories = getAllCategories();

  // Filter case studies based on active category
  const filteredCaseStudies =
    activeCategory === "ALL" 
      ? caseStudies 
      : caseStudies.filter((study) => study.categories.includes(activeCategory));
      const handleCaseStudyClick = (link) => {
        if (link) {
          window.location.href = link;
        }
      };
  return (
    <section className={styles.section}>
      {/* Radial gradient background effect */}
      <div className={styles.container}>
        <div className={styles.backgroundGradient}></div>

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.categoryLabel}>Our Works</h2>
          <h1 className={styles.title}>
            Get inspired by our
            <br className={styles.lineBreak} /> awesome work
          </h1>
        </div>

        {/* Category filters */}
        <div className={styles.categoryFilter}>
          <p className={styles.categoryText}>Category:</p>
          <div className={styles.filterButtons}>
            <button
              onClick={() => setActiveCategory("ALL")}
              className={`${styles.filterButton} ${
                activeCategory === "ALL" ? styles.activeFilter : styles.inactiveFilter
              }`}
            >
              ALL
            </button>

            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`${styles.filterButton} ${
                  activeCategory === category ? styles.activeFilter : styles.inactiveFilter
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Case study cards */}
        <div className={styles.caseStudyGrid}>
          {filteredCaseStudies.map((study) => (
            <div 
              key={study.id} 
              className={styles.caseStudyCard}
              onClick={() => handleCaseStudyClick(study.link)}
              style={{ cursor: study.link ? 'pointer' : 'default' }}
            >
              <div className={styles.caseStudyLogo}>
                {/* Using regular img tag instead of next/image */}
                <img
                  src={study.logoSrc || "/placeholder.svg"}
                  alt={`${study.title} logo`}
                  width={80}
                  height={80}
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* Main image */}
              <div className={styles.caseStudyImage}>
                {/* Using regular img tag with absolute positioning to mimic the fill property */}
                <img 
                  src={study.imageSrc || "/placeholder.svg"} 
                  alt={study.title}
                  style={{ 
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                  }}
                />
              </div>

              {/* Content */}
              <div className={styles.caseStudyContent}>
                <h3 className={styles.caseStudyTitle}>{study.title}</h3>

                {/* Tags */}
                <div className={styles.tagContainer}>
                  {study.categories.map((category) => (
                    <span key={`${study.id}-${category}`} className={styles.tag}>
                      {category}
                    </span>
                  ))}
                </div>

                <p className={styles.caseStudyDescription}>{study.description}</p>

                <div className={styles.arrowContainer}>
                  <ArrowRight className={styles.arrow} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}