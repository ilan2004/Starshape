'use client';
import styles from './Style.module.scss'
import Character from './Character'
const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

export default function Scroll() {

  const words = paragraph.split(" ")
  return (
    <main className={styles.Scrolls}>
        <div className={styles.box} ></div>
        <Character paragraph={paragraph} />
    </main>
  )
}