import React from 'react'
import styles from './page.module.css'

export const Gap = () => {
  return (
    <div className={styles.section}>
    <div className={styles.gap}>
      <div className={styles.box}>
        <div className={styles.round}>
          <div className={styles.arrow}>
            <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 10 16" fill="none">
              <path d="M5 1L5 15M5 15L1 11M5 15L9 11" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.bottom}>
      
    </div>
    </div>
  )
}