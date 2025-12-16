"use client";

import React, { useState } from 'react';
import { fetchSenders, Sender } from '@/lib/mockData';
import SenderCard from '@/components/SenderCard';

export default function Home() {
  const [senders, setSenders] = useState<Sender[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [scanned, setScanned] = useState(false);

  const handleScan = async () => {
    setIsLoading(true);
    // Simulate API call
    const data = await fetchSenders();
    setSenders(data);
    setIsLoading(false);
    setScanned(true);
  };

  const handleUnsubscribe = (id: string) => {
    // In a real app, this would call an API
    console.log(`Unsubscribing from sender ${id} `);

    // Optimistic UI update
    setSenders(current => current.filter(s => s.id !== id));

    // Optional: Show toast or feedback
    alert("Unsubscribed successfully!");
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--foreground)' }}>Inbox Cleanup</h1>
          <p style={{ color: '#86868b', fontSize: '1.1rem' }}>Review and unsubscribe from unwanted emails.</p>
        </div>
        <button
          onClick={handleScan}
          disabled={isLoading}
          style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '999px',
            fontWeight: 600,
            cursor: isLoading ? 'not-allowed' : 'pointer',
            fontSize: '0.9rem',
            opacity: isLoading ? 0.7 : 1,
            transition: 'opacity 0.2s'
          }}
        >
          {isLoading ? 'Scanning...' : 'Scan Inbox'}
        </button>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {!scanned && (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <p style={{ color: '#86868b', fontSize: '1.1rem' }}>Ready to declutter? Click "Scan Inbox" to find subscriptions.</p>
          </div>
        )}

        {scanned && senders.length === 0 && (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <p style={{ color: 'var(--foreground)', fontSize: '1.2rem', fontWeight: 600 }}>All Clean! 🎉</p>
            <p style={{ color: '#86868b', marginTop: '0.5rem' }}>No active subscriptions found.</p>
          </div>
        )}

        {senders.map(sender => (
          <SenderCard
            key={sender.id}
            sender={sender}
            onUnsubscribe={handleUnsubscribe}
          />
        ))}
      </div>
    </div>
  );
}

