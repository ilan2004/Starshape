'use client'
import React from 'react';
import styles from './page.module.css';
import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.Container}>
        <div className={styles.header}>
          <div className={styles.logo}>
              STARSHAPE
          </div>
          <div className={styles.social}>
            <div className={styles.wrapper}>
              <a href="https://wa.me/917034926395" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className={styles.icon} />
              </a>
            </div>
            <div className={styles.wrapper}>
              <a href="https://www.instagram.com/thestarshape/" target="_blank" rel="noopener noreferrer">
                <InstagramLogoIcon className={styles.icon} />
              </a>
            </div>
            <div className={styles.wrapper}>
              <a href="https://www.linkedin.com/company/star-shape" target="_blank" rel="noopener noreferrer">
             <LinkedInLogoIcon className={styles.icon} />
              </a>
            </div>

          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.row1}>
            <p className={styles.para}>
              Crafting powerful digital experiences with cutting-edge solutions.  
              <br /><br />
              📧 Email:  
              <br />
              <strong>starshape@gmail.com</strong>
            </p>
          </div>
          <div className={styles.row2}>
            <a>Web Development</a>
            <a>E-Commerce Solutions</a>
            <a>POS Systems</a>
            <a>Data Analytics (Power BI)</a>
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <div className={styles.copyright}>© {new Date().getFullYear()} STARSHAPE. All rights reserved.</div>
          <div className={styles.legalLinks}>
            <a href="/Privacypolicy" className={styles.link}>Privacy Policy</a>
            <a href="/terms-of-service" className={styles.link}>Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
};
