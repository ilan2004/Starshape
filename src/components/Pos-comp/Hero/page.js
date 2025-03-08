import React from 'react';
import styles from './page.module.css';

export const Poshero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.box}>
        <div className={styles.service}>
          <div className={styles.orange}>SERVICES (coming soon)</div>
        </div>
        <div className={styles.title}>POS Solutions</div>
        <div className={styles.description}>
          Efficiently manage sales, inventory, and billing with our expert POS solutions. 
          We specialize in custom POS development**, ensuring seamless transactions, real-time reporting, and inventory tracking. 
          Whether you're a retail store, restaurant, or enterprise, our solutions are built to **enhance business efficiency and customer experience**.
        </div>
      </div>
    </div>
  );
};
