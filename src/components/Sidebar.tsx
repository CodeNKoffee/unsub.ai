import React from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <span>Unsub AI</span>
      </div>
      <nav className={styles.nav}>
        <a className={`${styles.navItem} ${styles.active}`} href="#">
          Inbox Cleanup
        </a>
        <a className={styles.navItem} href="#">
          History
        </a>
        <a className={styles.navItem} href="#">
          Settings
        </a>
      </nav>
    </aside>
  );
}
