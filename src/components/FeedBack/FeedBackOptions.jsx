import React from 'react';
import styles from './FeedBackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.feedbackButtons}>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className={styles.button}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
