import styles from '../pricing/Pricing.module.css';
import Navbar from '@/components/Navbar';

export default function TermsPage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main className={styles.container} style={{ padding: '8rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Terms of Service</h1>
        <p>Last updated: December 17, 2025</p>
        <br />
        <p>Welcome to Unsub AI. By using our service, you agree to these terms.</p>
        {/* Content would go here */}
      </main>
    </div>
  )
}
