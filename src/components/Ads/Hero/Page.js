import React from 'react'
import styles from './Hero.module.css';
export const AdHero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.box}>
        <div className={styles.service}>
        <div className={styles.orange}>SERVICES (coming soon)</div>
        </div>
        <div className={styles.title}>AI Animated ADS</div>
        <div className={styles.description}>Capture attention with AI-powered animated ads. We create engaging, high-quality visuals that enhance brand identity and boost conversions. Whether for social media, websites, or marketing campaigns, our AI-driven animations bring your message to life.</div>
        </div>
    </div>
  )
}
