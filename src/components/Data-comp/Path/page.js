import React from 'react';
import styles from './page.module.css';

export const Pathdata = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.data}>
        <h1 className={styles.heading}>
             Our Process: How We Approach Data Analysis
        </h1>
        <p className={styles.para}>
        At hexaIntelli, we understand that deriving meaningful insights from data can be challenging, especially when handling vast datasets. That's where we step in. Let's walk through how we make data analysis efficient, insightful, and impactful for you.
        </p>
        
        <h4 className={styles.parahead}>
          <strong>1. Understanding Your Data Needs</strong> 
        </h4>
        <ul className={styles.list}>
            <li className={styles.tips}> 
                <strong>Initial Consultation</strong>
                We begin by understanding your business and data challenges. What insights are you looking for? What decisions do you want to drive with data? We listen carefully to tailor our approach.
            </li>
            <li className={styles.tips}>
                <strong>Defining Objectives</strong>
                Based on our discussion, we define key objectives for your data analysis. Whether it’s predictive analytics, real-time reporting, or trend analysis, we create a roadmap to achieve your goals.
            </li>
        </ul>
        <h4 className={styles.parahead}>
          <strong>2. Data Processing & Preparation</strong> 
        </h4>
        <ul className={styles.list}>
            <li className={styles.tips}> 
                <strong>Cleaning & Structuring</strong>
                We clean, structure, and preprocess raw data to ensure accuracy and consistency. Our expertise in data engineering helps create a strong foundation for analysis.
            </li>
            <li className={styles.tips}>
                <strong>Data Integration</strong> 
                We consolidate data from multiple sources, ensuring seamless integration and accessibility for analysis through tools like Power BI and Python-based analytics.
            </li>
        </ul>
        <h4 className={styles.parahead}>
          <strong>3. Analysis & Visualization</strong> 
        </h4>
        <ul className={styles.list}>
            <li className={styles.tips}> 
                <strong>Advanced Analytics</strong>
                We apply statistical models, machine learning techniques, and business intelligence tools to extract meaningful insights and predict trends.
            </li>
            <li className={styles.tips}>
                <strong>Interactive Dashboards</strong> 
                We create visually compelling dashboards using Power BI, allowing you to explore data insights in real time and make data-driven decisions effectively.
            </li>
        </ul>
        <h4 className={styles.parahead}>
          <strong>4. Continuous Support & Optimization</strong> 
        </h4>
        <ul className={styles.list}>
            <li className={styles.tips}> 
                <strong>Training & Documentation</strong> 
                We ensure your team understands the data insights, providing training sessions and documentation for seamless adoption.
            </li>
            <li className={styles.tips}>
                <strong>Ongoing Improvement</strong>
                Data needs evolve, and so do our solutions. We offer continuous support, updates, and enhancements to ensure long-term success.
            </li>
        </ul>
        <img className={styles.image} src='/img5.webp' alt="Data Analysis Process" />
      </div>
    </div>
  );
};