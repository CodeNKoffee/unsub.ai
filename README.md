# Unsub AI - One-Click Email Freedom

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Next.js](https://img.shields.io/badge/framework-Next.js-black) ![Status](https://img.shields.io/badge/status-active-success)

## Overview

**Unsub AI** is the modern solution to identifying and eliminating digital noise. We empower professionals to reclaim their inbox attention through intelligent scanning and one-click unsubscriptions.

Built on a strictly web-based stack, Unsub AI leverages OAuth integration with major providers (Gmail, Outlook) to scan headers without compromising privacy, delivering a centralized dashboard for managing your digital subscriptions.

## Features

-   **Intelligent Scanning**: Uses Gmail/Outlook APIs to detect "List-Unsubscribe" headers.
-   **AI Summarization**: Generates 3-second summaries of newsletter content using lightweight SLMs (Small Language Models).
-   **Centralized Dashboard**: A unified view of all active subscriptions across multiple accounts.
-   **One-Click Action**: Instant unsubscribe functionality without navigating third-party login flows.
-   **Privacy First**: We process headers, not bodies. Your data never leaves the execution environment for training.

## Architecture

The project is built for speed, scalability, and modern aesthetics.

-   **Frontend**: Next.js 15 (App Router)
-   **Styling**: Pure CSS (Vanilla) with Apple/Linear-inspired "ManyPI" design system.
-   **State Management**: React Hooks (Optimistic UI updates).
-   **AI Integration**: Modular architecture ready for Groq/Llama 3.2 integration.

## Quick Start

### Prerequisites
-   Node.js 18+
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-org/unsub-ai.git
    cd unsub-ai
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Navigate to `http://localhost:3000` to view the Landing Page.
    -   Access the dashboard directly at `http://localhost:3000/dashboard`.

## Project Structure

```bash
src/
├── app/
│   ├── (dashboard)/      # Dashboard routes & layout
│   ├── layout.tsx        # Root layout (Fonts, Meta)
│   ├── page.tsx          # Marketing Landing Page
│   └── Landing.module.css
├── components/           # Shared UI components
│   ├── Sidebar.tsx
│   └── SenderCard.tsx
└── lib/                  # Utilities & Mock Data
```

## Contributing

We welcome contributions from the team. Please follow the standard PR workflow:

1.  Create a feature branch (`feature/amazing-feature`).
2.  Commit your changes (Conventional Commits preferred).
3.  Open a Pull Request against `main`.

---

**Unsub AI Inc.**
*Reclaim your attention.*
