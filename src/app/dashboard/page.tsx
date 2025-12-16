'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckSquare, Square, Trash2, AlertTriangle, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SenderCard from '@/components/SenderCard';
import { MOCK_SENDERS } from '@/lib/mockData';
import styles from './Dashboard.module.css';

// Mock Stats Data
const stats = [
  { label: 'Emails Cleaned', value: '1,240' },
  { label: 'Time Saved', value: '4.5 hrs' },
  { label: 'Storage Saved', value: '120 MB' },
];

type FilterType = 'All' | 'Promotion' | 'Newsletter' | 'Update';

export default function DashboardPage() {
  const [filter, setFilter] = useState<FilterType>('All');
  const [senders, setSenders] = useState(MOCK_SENDERS);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [batchSize, setBatchSize] = useState(10);

  // Confirmation Modal State
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingUnsubIds, setPendingUnsubIds] = useState<string[]>([]);
  const [dontAskAgain, setDontAskAgain] = useState(false);

  // Filter Logic
  const filteredSenders = senders.filter(s => {
    if (filter === 'All') return true;
    return s.category === filter;
  });

  // Selection Logic
  const toggleSelection = (id: string) => {
    const newSet = new Set(selectedIds);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedIds(newSet);
  };

  const selectNextBatch = () => {
    const newSet = new Set(selectedIds);
    let count = 0;
    for (const sender of filteredSenders) {
      if (count >= batchSize) break;
      if (!newSet.has(sender.id)) {
        newSet.add(sender.id);
        count++;
      }
    }
    setSelectedIds(newSet);
  };

  const clearSelection = () => setSelectedIds(new Set());

  // Unsubscribe Logic
  const initiateUnsubscribe = (ids: string[]) => {
    if (dontAskAgain) {
      performUnsubscribe(ids);
    } else {
      setPendingUnsubIds(ids);
      setShowConfirm(true);
    }
  };

  const performUnsubscribe = (ids: string[]) => {
    setSenders(prev => prev.filter(s => !ids.includes(s.id)));
    setSelectedIds(prev => {
      const newSet = new Set(prev);
      ids.forEach(id => newSet.delete(id));
      return newSet;
    });
    setShowConfirm(false);
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.welcomeText}>Welcome back, Hatem.</h1>
          <p className={styles.subText}>You've reclaimed 4.5 hours of focus this month.</p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={styles.statValue}>{stat.value}</span>
            </div>
          ))}
        </div>

        <div className={styles.contentArea}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Active Subscriptions</h2>

            {/* Batch Controls */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div className={styles.filters}>
                <button
                  className={styles.filterBtn}
                  onClick={selectNextBatch}
                  style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                >
                  <CheckSquare size={16} /> Select Next {batchSize}
                </button>
                <select
                  className={styles.batchSelect}
                  value={batchSize}
                  onChange={(e) => setBatchSize(Number(e.target.value))}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
                {selectedIds.size > 0 && (
                  <button
                    className={styles.filterBtn}
                    onClick={clearSelection}
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    Clear ({selectedIds.size})
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className={styles.tabsContainer}>
            {(['All', 'Promotion', 'Newsletter', 'Update'] as FilterType[]).map(f => (
              <button
                key={f}
                className={styles.tabInput}
                data-active={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* List */}
          <div className={styles.senderList}>
            {filteredSenders.map(sender => (
              <SenderCard
                key={sender.id}
                sender={sender}
                selected={selectedIds.has(sender.id)}
                onToggle={toggleSelection}
                onUnsubscribe={(id) => initiateUnsubscribe([id])}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Floating Bulk Action Bar */}
      <AnimatePresence>
        {selectedIds.size > 0 && (
          <motion.div
            className={styles.floatingBar}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
          >
            <span style={{ fontWeight: 600 }}>{selectedIds.size} items selected</span>
            <button
              className={styles.bulkUnsubBtn}
              onClick={() => initiateUnsubscribe(Array.from(selectedIds))}
            >
              <Trash2 size={16} /> Unsubscribe All
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirm && (
          <div className={styles.modalOverlay}>
            <motion.div
              className={styles.modal}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className={styles.modalHeader}>
                <h3>Confirm Action</h3>
                <button onClick={() => setShowConfirm(false)}><X size={20} /></button>
              </div>
              <div className={styles.modalBody}>
                <div className={styles.warningIcon}><AlertTriangle size={32} /></div>
                <p>
                  Are you sure you want to unsubscribe from <strong>{pendingUnsubIds.length}</strong> sender(s)?
                  <br /><span style={{ fontSize: '0.9rem', opacity: 0.7 }}>This action cannot be undone.</span>
                </p>

                <label className={styles.dontAskLabel}>
                  <input
                    type="checkbox"
                    checked={dontAskAgain}
                    onChange={(e) => setDontAskAgain(e.target.checked)}
                  />
                  Don't ask me again this session
                </label>
              </div>
              <div className={styles.modalActions}>
                <button className={styles.cancelBtn} onClick={() => setShowConfirm(false)}>Cancel</button>
                <button className={styles.confirmBtn} onClick={() => performUnsubscribe(pendingUnsubIds)}>
                  Yes, Unsubscribe
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
