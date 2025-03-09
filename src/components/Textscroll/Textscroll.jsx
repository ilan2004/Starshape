'use client';
import styles from './Style.module.scss'
import Character from './Character'
const paragraph = "We build websites that work seamlessly and look great. From custom designs to data-driven dashboards, we help businesses grow.";  


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