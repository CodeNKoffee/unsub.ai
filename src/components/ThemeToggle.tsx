"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div style={{ display: 'flex', gap: '0.25rem', backgroundColor: 'var(--card-bg)', padding: '0.25rem', borderRadius: '999px', border: '1px solid var(--card-border)' }}>
      {['light', 'system', 'dark'].map((mode) => (
        <button
          key={mode}
          onClick={() => setTheme(mode)}
          style={{
            background: theme === mode ? 'var(--primary)' : 'transparent',
            color: theme === mode ? 'var(--primary-fg)' : 'var(--foreground)',
            border: 'none',
            borderRadius: '999px',
            padding: '0.4rem 0.8rem',
            fontSize: '0.8rem',
            fontWeight: 500,
            cursor: 'pointer',
            textTransform: 'capitalize',
            transition: 'all 0.2s',
            opacity: theme === mode ? 1 : 0.6
          }}
        >
          {mode}
        </button>
      ))}
    </div>
  );
}
