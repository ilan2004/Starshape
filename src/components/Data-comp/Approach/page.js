import React from 'react'
import styles from './page.module.css';
export const Approachdata = () => {
  return (
    <div className={styles.Container}>
        <h1 className={styles.heading}>Our Approach to Data Analysis</h1>
        <div className={styles.approach}>
        <div className={styles.aproach_box}>
                <div className={styles.icon_box}>
                    <div className={styles.wrapper}>
                    <img className={styles.icon} src="/ap1.svg"/>
                    </div>
                </div>
                <div className={styles.head4}>
                    Scalable Data Models
                </div>
                <div className={styles.desc}>
                    We build scalable data models that grow with your business, allowing seamless integration of new data sources and insights.
                </div>
        </div>
            <div className={styles.aproach_box}>
                <div className={styles.icon_box}>
                    <div className={styles.wrapper}>
                        <img className={styles.icon} src="/ap2.svg"/>
                    </div>
                </div>
                <div className={styles.head4}>
                Leveraging Business Intelligence
                </div>
                <div className={styles.desc}>
                Our data analysis solutions incorporate Power BI to turn raw data into actionable insights, enhancing decision-making and operational efficiency.
                </div>
            </div>
            <div className={styles.aproach_box}>
                <div className={styles.icon_box}>
                    <div className={styles.wrapper}>
                    <img className={styles.icon} src="/ap3.svg"/>
                    </div>
                </div>
                <div className={styles.head4}>
                    Data-Driven Decision Making
                </div>
                <div className={styles.desc}>
                Our approach ensures that your business decisions are backed by real-time analytics, predictive insights, and comprehensive reporting.
                </div>
            </div>
            </div>
        </div>
  )
}
