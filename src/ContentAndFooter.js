import React from 'react';
import styles from './ContentAndFooter.module.css';

const ContentAndFooter = () => {
  return (
    <>
      <div className={styles.content}>
        Hausaufgabe
      </div>
      <footer className={styles.footer}>
        22.10.2024
      </footer>
    </>
  );
};

export default ContentAndFooter;

