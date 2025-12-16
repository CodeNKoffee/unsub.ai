"use client";

import Link from "next/link";
import styles from "@/app/Landing.module.css";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container} ${styles.navContent}`}>
        <Link href="/" className={styles.logo}>
          <span style={{ fontSize: '1.5rem' }}>▼</span> Unsub AI
        </Link>
        <div className={styles.navLinks}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/pricing">Pricing</Link>
            <ThemeToggle />
            <Link href="/dashboard">
              <button className={styles.navButton}>Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
