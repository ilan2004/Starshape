import React from 'react'
import styles from './page.module.css';
import Link from 'next/link';
export const Work = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.box}>
        <div className={styles.service}>
            <div className={styles.orange}>Let's build!!</div>
        </div>
        <div className={styles.title}>WORK WITH US</div>
        <div className={styles.description}></div>
        <Link href='/Works'>
        <button  className={styles.button}>
            Our Works
        </button> 
        </Link>
        </div>
    </div>
  )
}

