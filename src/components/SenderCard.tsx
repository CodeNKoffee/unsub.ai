import React from 'react';
import styles from './SenderCard.module.css';
import { Sender } from '@/lib/mockData';

interface SenderCardProps {
  sender: Sender;
  selected?: boolean;
  onToggle?: (id: string) => void;
  onUnsubscribe: (id: string) => void;
}

export default function SenderCard({ sender, selected, onToggle, onUnsubscribe }: SenderCardProps) {
  return (
    <div className={styles.card} data-selected={selected}>
      <div className={styles.header}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          {onToggle && (
            <input
              type="checkbox"
              checked={selected}
              onChange={() => onToggle(sender.id)}
              className={styles.checkbox}
            />
          )}
          <div className={styles.nameSection}>
            <h3 className={styles.senderName}>{sender.name}</h3>
            <div className={styles.meta}>
              <span>{sender.category}</span>
              <span>•</span>
              <span>{sender.frequency}</span>
              <span>•</span>
              <span>{sender.lastEmailDate}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.snippet}>
        "{sender.summary}"
      </div>

      <div className={styles.actions}>
        <button
          className={styles.unsubBtn}
          onClick={() => onUnsubscribe(sender.id)}
        >
          Unsubscribe
        </button>
      </div>
    </div>
  );
}
