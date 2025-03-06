import React from 'react'
import Cubed from '../Cube'
import styles from './styles.module.scss'
import Scroll from '../Textscroll/Scroll'
import TextScroll from '../Textscroll/Textscroll'
export const Hook = () => {
  return (
    <div className={styles.plaan}>
        <h1 className={styles.head} >ABOUT</h1>
        <div className={styles.main} >
        <Scroll/>
        <Cubed/>
        <TextScroll/>
        </div>
    </div>
  )
}
