import React from 'react'
import { Hover } from './Hover/Page'
import styles from './Services.module.css'
import { CardHover } from './Items/Page'
export const Services = () => {
  return (
    <div className={styles.Services}>
        <div className={styles.h1}>
        <h1 >Our Services</h1>
        </div>
        <div id="hover">
            <CardHover/>
        </div>
    </div>
  )
}
