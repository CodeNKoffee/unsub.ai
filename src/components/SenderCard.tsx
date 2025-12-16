import React from 'react';
import styles from './SenderCard.module.css';
import { Sender } from '@/lib/mockData';

interface SenderCardProps {
  sender: Sender;
  onUnsubscribe: (id: string) => void;
}

export default function SenderCard({ sender, onUnsubscribe }: SenderCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
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
