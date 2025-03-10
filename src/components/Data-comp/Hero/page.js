import React from 'react';
import styles from './page.module.css';

export const Datahero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.box}>
        <div className={styles.service}>
          <div className={styles.orange}>SERVICES</div>
        </div>
        <div className={styles.title}>Data Analysis</div>
        <div className={styles.description}>
          Unlock the power of data with our tailored analytics solutions. We transform raw data into meaningful insights, helping businesses optimize performance and drive strategic decisions. Whether it's predictive analytics, reporting, or real-time monitoring, our expertise ensures data-driven success.
        </div>
      </div>
    </div>
  );
};

