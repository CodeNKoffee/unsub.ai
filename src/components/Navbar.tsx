"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/Landing.module.css";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const isDashboard = pathname === '/dashboard';

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container} ${styles.navContent}`}>
        <Link href={isDashboard ? "/dashboard" : "/"} className={styles.logo}>
          <span style={{ fontSize: '1.5rem' }}>▼</span> Unsub AI
        </Link>
        <div className={styles.navLinks}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {!isDashboard ? (
              <>
                <Link href="/#how-it-works">How it works</Link>
                <Link href="/pricing">Pricing</Link>
                <ThemeToggle />
                <Link href="/dashboard">
                  <button className={styles.navButton}>Get Started</button>
                </Link>
              </>
            ) : (
              <>
                <ThemeToggle />
                <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>hatem@example.com</span>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', color: 'var(--primary-fg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  H
                </div>
                <Link href="/" style={{ opacity: 0.7, fontSize: '0.9rem' }}>Logout</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
