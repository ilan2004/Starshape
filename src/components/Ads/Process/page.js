import React from 'react';
import styles from './page.module.css';

export const Process = () => {
  return (
    <section className={styles.section}>
      <div className={styles.Container}>
        <div className={styles.Container_box}>
          <h1 className={styles.heading}>How Does Our Web Development Process Work?</h1>
          <div className={styles.approach}>
            <div className={styles.aproach_box}>
              <div className={styles.icon_box}>
                <div className={styles.wrapper}>
                  <img className={styles.icon} src="/ap1.svg" alt="Consultations Icon" />
                </div>
              </div>
              <div className={styles.head4}>
                Consultations
              </div>
              <div className={styles.desc}>
                We work with you to understand your project requirements, goals, and target audience.
              </div>
            </div>
            <div className={styles.aproach_box}>
              <div className={styles.icon_box}>
                <div className={styles.wrapper}>
                  <img className={styles.icon} src="/ap2.svg" alt="Design and Planning Icon" />
                </div>
              </div>
              <div className={styles.head4}>
                Design & Planning
              </div>
              <div className={styles.desc}>
                We create wireframes, mockups, and a detailed project plan to visualize the website and outline timelines and deliverables.
              </div>
            </div>
            <div className={styles.aproach_box}>
              <div className={styles.icon_box}>
                <div className={styles.wrapper}>
                  <img className={styles.icon} src="/ap3.svg" alt="Development Icon" />
                </div>
              </div>
              <div className={styles.head4}>
                Development
              </div>
              <div className={styles.desc}>
                Our developers bring the designs to life, ensuring responsive and robust functionality.
              </div>
            </div>
            <div className={styles.aproach_box}>
              <div className={styles.icon_box}>
                <div className={styles.wrapper}>
                  <img className={styles.icon} src="/ap1.svg" alt="Launch and Maintenance Icon" />
                </div>
              </div>
              <div className={styles.head4}>
                Launch & Maintenance
              </div>
              <div className={styles.desc}>
                We deploy the website, monitor its performance, and provide ongoing support, updates, and new features to keep your website running smoothly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
