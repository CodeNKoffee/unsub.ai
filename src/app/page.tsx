import Link from "next/link";
import styles from "./Landing.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <main className={styles.hero}>
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
          <button className={styles.ctaButton}>
            Clean My Inbox Now
          </button>
        </Link>
      </main>
    </div>
  );
}
