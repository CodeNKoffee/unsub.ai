import styles from '../pricing/Pricing.module.css';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.container} style={{ padding: '8rem 1.5rem 4rem', maxWidth: '800px', margin: '0 auto' }}>
        <section className={styles.hero} style={{ background: 'none', padding: '0 0 4rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Clutter in the Gutter.</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.8 }}>
            Why we built Unsub AI: A personal vendetta against digital hoarding.
          </p>
        </section>

        <article style={{ lineHeight: 1.8, fontSize: '1.1rem', color: 'var(--foreground)' }}>
          <p style={{ marginBottom: '2rem' }}>
            I manage multiple email accounts. One for work, one for my startup, one for personal use, and a few others for specific personas.
            It used to be manageable, but somewhere along the way, my inbox turned into a war zone.
          </p>

          <p style={{ marginBottom: '2rem' }}>
            The problem is insidious. I sign up for a newsletter I think I want. Or I sign up for a service and forget to uncheck a box.
            Months later, the emails keep coming. I don't open them. They pile up. I tell myself I'll clean it up "someday", but I don't give a f*** at the end of the day.
            High-alert emails get buried in high-volume noise.
          </p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '3rem 0 1rem' }}>The Storage Trap</h2>
          <p style={{ marginBottom: '2rem' }}>
            Then comes the notification: <strong>"You have run out of storage."</strong>
          </p>
          <p style={{ marginBottom: '2rem' }}>
            This is the moment of defeat. I realized I wasn't just losing attention; I was paying actual money to store digital garbage.
            I often upgraded my cloud storage not because I had too many precious photos or important documents, but because I didn't have the time or mental energy to empty the trash bin.
            It was a tax on my laziness.
          </p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '3rem 0 1rem' }}>The Solution</h2>
          <p style={{ marginBottom: '2rem' }}>
            Unsub AI was born from this frustration. I wanted a tool that didn't ask me to sort, organize, or "manage" my email.
            I wanted a tool that would simply <strong>flush the pipe</strong>.
          </p>
          <p>
            Connect, scan, and unsub. No brain power allocated. No "someday". Just done.
          </p>
        </article>
      </main>
    </div>
  )
}
