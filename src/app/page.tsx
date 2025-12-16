import Link from "next/link";
import styles from "./Landing.module.css";
import ThemeToggle from "@/components/ThemeToggle";

import Navbar from "@/components/Navbar";

export default function LandingPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <main className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.particles}>
            <div className={styles.particle}>✉️</div>
            <div className={styles.particle}>@</div>
            <div className={styles.particle}>✉️</div>
            <div className={styles.particle}>@</div>
            <div className={styles.particle}>∅</div>
          </div>
          <h1>
            Stop Drowning in <br />
            Email Garbage.
          </h1>
          <p>
            Your inbox is a war zone. We are the nuclear option.
            One click to unsubscribe from the noise.
            Reclaim your attention.
          </p>
          <Link href="/dashboard">
            <button className={styles.navButton} style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Clean My Inbox Now
            </button>
          </Link>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>How It Works</span>
            <h2 className={styles.sectionTitle}>Start in under 1 min.</h2>
            <p style={{ color: '#666', marginTop: '1rem' }}>
              We empower you to reliably clean your digital life with ease.
            </p>
          </div>

          <div className={styles.howItWorksGrid}>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>1. Connect</span>
                <h3 className={styles.stepTitle}>Link your account</h3>
                <p className={styles.stepDesc}>Securely connect your Gmail or Outlook via OAuth. We never store your credentials.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>2. Scan</span>
                <h3 className={styles.stepTitle}>AI Analysis</h3>
                <p className={styles.stepDesc}>Our AI scans headers to identify bulk senders and creates 3-second summaries.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>3. Clean</span>
                <h3 className={styles.stepTitle}>One-Click Freedom</h3>
                <p className={styles.stepDesc}>Review the list and unsubscribe from junk instantly. No login barriers.</p>
              </div>
            </div>

            <div className={styles.visualContainer}>
              <div className={styles.globe}></div>
              <div className={styles.globeRing}>
                <div className={styles.globeDot}></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Infrastructure you can trust.</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#666', fontSize: '1.2rem' }}>
            Built on global standards. Secure, fast, and respectful of your privacy.
          </p>
          <Link href="/dashboard">
            <button className={styles.navButton} style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Start for Free
            </button>
          </Link>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerCol}>
              <div className={styles.logo} style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.2rem' }}>▼</span> Unsub AI
              </div>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.5 }}>
                The modern email decluttering platform for professionals.
              </p>
            </div>
            <div className={styles.footerCol}>
              <h4>Product</h4>
              <Link href="/#how-it-works">Features</Link>
              <Link href="/pricing">Pricing</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>Company</h4>
              <Link href="/about">About</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>Legal</h4>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
          <div className={styles.copyright}>
            © 2025 Unsub AI Inc. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
