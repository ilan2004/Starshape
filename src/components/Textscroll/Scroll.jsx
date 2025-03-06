'use client';
import styles from './Style.module.scss'
import Character from './Character'
const paragraph = "Place where well-crafted web projects are born."

export default function Scroll() {

  const words = paragraph.split(" ")
  return (
    <main className={styles.Scrolls}>
        <div className={styles.box} ></div>
        <Character paragraph={paragraph} />
    </main>
  )
}