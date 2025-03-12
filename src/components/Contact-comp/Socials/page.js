import React from 'react'
import styles from './page.module.css'

export const Socials = () => {
  return (
    <div className={styles.socialsdiv}>
      <div className={styles.socials}>
        <a className={styles.link} href="https://www.linkedin.com/company/star-shape" target="_blank" rel="noopener noreferrer">
          LINKEDIN
        </a>
        <a className={styles.link} href="https://www.instagram.com/thestarshape/" target="_blank" rel="noopener noreferrer">
          INSTAGRAM
        </a>
        <a className={styles.link} href="https://wa.me/7034926395" target="_blank" rel="noopener noreferrer">
          WHATSAPP
        </a>
      </div>
    </div>
  )
}
