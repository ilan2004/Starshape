'use client'
import React from 'react'
import styles from './page.module.css';
import { InstagramLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.Container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src='/Logos/footer.svg'></img>
          </div>
          <div className={styles.social}>
            <div className={styles.wrapper}>
            <GitHubLogoIcon className={styles.icon} />
            </div>
        <div className={styles.wrapper}>
            <InstagramLogoIcon className={styles.icon} />
        </div>
        <div className={styles.wrapper}>
            <LinkedInLogoIcon className={styles.icon} />
        </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.row1}>
            <p className={styles.para}>
              We are a team of CS students Focusing On Growth and understanding the tech industry on Top level  
              <br />
              Email:
              <br />
              Netgenie@gmail.com
              <br />
            </p>
          </div>
          <div className={styles.row2}>
            <a>Web Development</a>
            <a>Cyber Security</a>
            <a>Enterprise Resource Planning</a>
            <a>Data Analysis</a>
            <a>Cloud Computing</a>
            <a>Mobile App development</a>
            <a>Desktop App development</a>
          </div>
        </div>
      </div>
    </section>
  )
}
