'use client';
import styles from './Style.module.scss'
import Character from './Character'
const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

export default function TextScroll() {

  const words = paragraph.split(" ")
  return (
    <main >
        <div className={styles.bag}></div>
    <div className={styles.new}>
        <Character paragraph={paragraph} />
        </div>
    </main>
  )
}