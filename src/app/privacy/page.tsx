import styles from '../pricing/Pricing.module.css';
import Navbar from '@/components/Navbar';

export default function PrivacyPage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main className={styles.container} style={{ padding: '8rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Privacy Policy</h1>
        <p>Last updated: December 17, 2025</p>
        <br />
        <p>
          Your privacy is our priority. We process email headers locally or in transient memory to identify subscriptions.
          We do not store your email bodies or sell your data.
        </p>
        {/* Content would go here */}
      </main>
    </div>
  )
}
