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

## Production Readiness & Integrations

To move from mock data to production, you will need the following API keys and configurations:

### 1. Email Providers (OAuth)
*   **Google Cloud Console** (for Gmail):
    *   Create a Project & Enable **Gmail API**.
    *   Configure OAuth Consent Screen (Scopes: `https://www.googleapis.com/auth/gmail.readonly`, `https://www.googleapis.com/auth/gmail.modify`).
    *   **Required**: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`.
*   **Microsoft Azure** (for Outlook):
    *   Register an App in **Azure Active Directory**.
    *   Permissions (Graph API): `Mail.Read`, `Mail.ReadWrite`.
    *   **Required**: `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_CLIENT_SECRET`.

### 2. AI Summarization
*   **Groq Cloud Console**:
    *   Create an account and generate an API Key.
    *   **Required**: `GROQ_API_KEY`.

### 3. Backend & Persistence
*   **Supabase**:
    *   Create a new project for Database & Auth.
    *   **Required**: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

## Contributing

We welcome contributions from the team. Please follow the standard PR workflow:

1.  Create a feature branch (`feature/amazing-feature`).
2.  Commit your changes (Conventional Commits preferred).
3.  Open a Pull Request against `main`.

## The Economics of Lifetime Deals
We are often asked: *"How can you offer a Lifetime Deal for $99 when AI costs money?"*

The answer lies in **Model Efficiency**. We use Groq's Llama 3 8B engine for summarization, which offers incredible intelligence at a fraction of the cost of larger models.

**The Math (Llama 3 8B Unit Economics):**
*   **Cost per 1,000 Emails**: ~$0.03
*   **Yearly Cost (Heavy User, 18k emails/yr)**: ~$0.54

A $99 lifetime payment covers roughly **183 years** of heavy usage. This allows us to offer a sustainable "Founder's Offer" while generating the cash flow needed to build the future of Unsub AI.

---

**Unsub AI Inc.**
*Reclaim your attention.*
