'use client';

import { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Check, ShieldCheck, Zap, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import styles from './Pricing.module.css';

type BillingPeriod = 'annual' | 'monthly' | 'lifetime';

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingPeriod>('annual');

  const plans = {
    annual: {
      price: '2.42',
      period: '/ month',
      subtext: '$29 billed annually',
      savings: 'Save 50%',
    },
    monthly: {
      price: '4.99',
      period: '/ month',
      subtext: 'Cancel anytime',
      savings: '',
    },
    lifetime: {
      price: '99',
      period: ' one-time',
      subtext: 'Pay once, yours forever',
      savings: "Limited Founder's Offer",
    },
  };

  const handleBuy = () => {
    // Placeholder for actual checkout integration
    console.log(`Checkout initiated for ${billing} plan`);
    alert(`Redirecting to checkout for ${billing} plan...`);
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.container}>
        <div className={styles.hero}>
          <h1>
            A small price to<br />
            declutter your inbox.
          </h1>
          <p>
            Choose the plan that fits your workflow.
            All plans include full access to every feature.
          </p>

          <LayoutGroup>
            <div className={styles.toggleContainer}>
              {/* Animated Background Pill */}
              <motion.div
                layoutId="activePill"
                className={styles.activePill}
                style={{
                  position: 'absolute',
                  background: 'var(--background)',
                  borderRadius: '99px',
                  inset: '4px',
                  width: 'calc(33.33% - 6px)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  zIndex: 1,
                  // Simple left positioning based on index
                  left: billing === 'annual' ? '4px' : billing === 'monthly' ? 'calc(33.33% + 2px)' : 'auto',
                  right: billing === 'lifetime' ? '4px' : 'auto'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />

              {/* We need a cleaner way to handle the pill position since simple CSS calc implies fixed widths or equal flex.
                   Let's use a simpler approach: just map buttons and use layoutId on the active background. 
               */}
            </div>

            {/* RETRYING TOGGLE STRUCTURE with simpler map for layoutId support */}
            <div className={styles.toggleContainer} style={{ display: 'inline-flex', position: 'relative', background: 'var(--secondary)', padding: '4px', borderRadius: '99px', gap: '0' }}>
              {(['annual', 'monthly', 'lifetime'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => setBilling(period)}
                  className={styles.toggleBtn}
                  style={{ position: 'relative', zIndex: 2, background: 'transparent' }}
                  data-active={billing === period}
                >
                  {period === 'annual' && 'Annually'}
                  {period === 'monthly' && 'Monthly'}
                  {period === 'lifetime' && 'Lifetime'}

                  {billing === period && (
                    <motion.div
                      layoutId="toggleHighlight"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'var(--background)',
                        borderRadius: '99px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        zIndex: -1
                      }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </LayoutGroup>

          <motion.div
            className={styles.pricingCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {billing === 'annual' && <div className={styles.popularBadge}>Most Popular</div>}

            <div className={styles.cardHeader}>
              <div className={styles.cardLogo}>▼</div>
              <h2>Standard Plan</h2>
              <p>Everything you need to regain control.</p>
            </div>

            <div className={styles.priceDisplay}>
              <span className={styles.currency}>$</span>
              <motion.span
                key={billing} // Re-animate on change
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={styles.amount}
              >
                {plans[billing].price}
              </motion.span>
              <span className={styles.period}>{plans[billing].period}</span>
            </div>

            <motion.div
              className={styles.savings}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={`savings-${billing}`}
            >
              {plans[billing].savings}
            </motion.div>

            <div className={styles.featureList}>
              <FeatureItem text="Connect Unlimited Gmail & Outlook" icon={<Mail size={20} />} />
              <FeatureItem text="One-Click Bulk Unsubscribe" icon={<Zap size={20} />} />
              <FeatureItem text="AI Content Summaries (Groq)*" icon={<Zap size={20} />} />
              <FeatureItem text="Privacy First (Local Processing)" icon={<ShieldCheck size={20} />} />
              <FeatureItem text="Priority Support" icon={<Check size={20} />} />
            </div>

            <button className={styles.ctaButton} onClick={handleBuy}>
              Buy Now
            </button>
            <div className={styles.guarantee}>
              <ShieldCheck size={14} /> 30-day money-back guarantee
            </div>

            <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', opacity: 0.5, fontStyle: 'italic' }}>
              * Subject to fair use policy (approx. 5,000 summaries/mo) to prevent abuse.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

function FeatureItem({ text, icon }: { text: string; icon: React.ReactNode }) {
  return (
    <div className={styles.featureItem}>
      <span className={styles.checkIcon}>{icon}</span>
      <span>{text}</span>
    </div>
  );
}
