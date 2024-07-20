import React from 'react';
import styles from './Notification.module.css';
function Notification({ message }) {
  return <h3 className={styles.notification}>{message}</h3>;
}

export default Notification;
