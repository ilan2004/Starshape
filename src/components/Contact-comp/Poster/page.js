import React from 'react'
import styles from './page.module.css'
export const Poster = () => {
  return (
    <section className={styles.section} >
    <div className={styles.poster}>
        <div className={styles.details}>
            <div className={styles.title}>
            Let’s dive into your
            amazing project
            </div>
             <button className={styles.button}>
            Contact us
            </button> 
        </div>
    </div>
    </section>
  )
}
