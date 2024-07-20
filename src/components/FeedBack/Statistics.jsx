import React from 'react';
import styles from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.statistics}>
      <p className={styles.statItem}>
        Good:{' '}
        <span className={styles.statValue} id="good-count">
          {good}
        </span>
      </p>
      <p className={styles.statItem}>
        Neutral:{' '}
        <span className={styles.statValue} id="neutral-count">
          {neutral}
        </span>
      </p>
      <p className={styles.statItem}>
        Bad:{' '}
        <span className={styles.statValue} id="bad-count">
          {bad}
        </span>
      </p>
      <p className={styles.statItem}>
        Total:{' '}
        <span className={styles.statValue} id="total-count">
          {total}
        </span>
      </p>
      <p className={styles.statItem}>
        Positive Feedback:{' '}
        <span className={styles.statValue} id="positive-feedback">
          {positivePercentage}%
        </span>
      </p>
    </div>
  );
};

export default Statistics;
