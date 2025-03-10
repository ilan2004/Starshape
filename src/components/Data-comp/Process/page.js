import React from 'react';
import styles from './page.module.css';

export const Processdata = () => {
  return (
    <section className={styles.section}>
      <div className={styles.Container}>
        <div className={styles.Container_box}>
          <h1 className={styles.heading}>How Do We Approach Data Analysis?</h1>
          <div className={styles.approach}>
            <div className={styles.aproach_box}>
              <div className={styles.icon_box}>
                <div className={styles.wrapper}>
                  <img className={styles.icon} src="/v1.svg" alt="Understanding Data Needs Icon" />
                </div>
              </div>
              <div className={styles.head4}>
                Understanding Data Needs
              </div>
              <div className={styles.desc}>
                We assess your business challenges and define key data objectives.
              </div>
            </div>
            <div className={styles.aproach_box}>
              <div className={styles.icon_box}>
                <div className={styles.wrapper}>
                  <img className={styles.icon} src="/v2.svg" alt="Processing & Preparation Icon" />
                </div>
              </div>
              <div className={styles.head4}>
                Processing & Preparation
              </div>
              <div className={styles.desc}>
                We clean, structure, and integrate data for seamless analysis.
              </div>
            </div>
            <div className={styles.aproach_box}>
              <div className={styles.icon_box}>
                <div className={styles.wrapper}>
                  <img className={styles.icon} src="/v3.svg" alt="Analysis & Visualization Icon" />
                </div>
              </div>
              <div className={styles.head4}>
                Analysis & Visualization
              </div>
              <div className={styles.desc}>
                We apply analytics, machine learning, and create interactive dashboards.
              </div>
            </div>
            <div className={styles.aproach_box}>
              <div className={styles.icon_box}>
                <div className={styles.wrapper}>
                  <img className={styles.icon} src="/ap4.svg" alt="Continuous Support & Optimization Icon" />
                </div>
              </div>
              <div className={styles.head4}>
                Continuous Support & Optimization
              </div>
              <div className={styles.desc}>
                We provide ongoing training, updates, and long-term support.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
