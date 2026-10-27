# Karthikeyan G — Full Stack Developer Portfolio

A production-ready, dark-themed developer portfolio built for **Karthikeyan G**, an experienced Full Stack Developer specializing in **React.js, TypeScript, Node.js, Express.js, PostgreSQL, and MySQL**.

Designed with an engineering-first aesthetic: deep charcoal/near-black backgrounds, electric blue and violet accents, crisp typography, subtle borders, and smooth interactive components.

---

## 🌟 Key Features

- **Engineering Aesthetic**: Refined dark theme (`#080c14`), subtle border tokens, restrained glowing accents, and zero generic template clutter.
- **Interactive Code Window**: Dynamic architecture preview in the Hero section showcasing real typed code across Frontend (React + TS), Backend API (Node.js/Express), and Relational Database Schema (PostgreSQL/MySQL) with live simulation.
- **Clean Single-Page Flow**:
  - **Hero**: Professional elevator pitch, core stack pills, smooth scroll CTAs, and resume trigger.
  - **About**: Narrative on cross-stack engineering, 8 functional capability cards, and verified profile summary.
  - **Technical Skills**: Clear categorized cards for Frontend, Backend, Databases, State Management, APIs, and Tools without arbitrary percentages.
  - **Professional Experience**: Vertical career timeline featuring Praxio IT Consulting, Enthu Technology Solutions, and Abytz Technology Solutions with verified responsibilities.
  - **Featured Projects**: 3 editable architecture blueprints (IoT Dashboard & Data Visualization, Full Stack Web Application, API-Driven Management Platform) with deep-dive technical modals.
  - **Education**: B.Tech in Information Technology from Anna University (2016–2020, CGPA: 6.58/10).
  - **Contact**: Validated inquiry form, one-click email client dispatch, and contact card with clipboard copy actions.
  - **Footer**: Brand monogram, quick links, tech declarations, and smooth back-to-top navigation.
- **Truthful & Credible**: Zero fabricated stats, no unverified certifications or fake metrics, and honest handling of resume downloads and contact message routing.
- **Mobile-First & Accessible**: Fully responsive across 320px, 375px, 768px, 1024px, and 1440px+ with visible focus states, ARIA landmarks, and reduced-motion support.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/) |
| **Bundler & Tooling** | [Vite 8](https://vite.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with custom dark design tokens |
| **Icons** | [Lucide React](https://lucide.dev/) + Crisp SVG vectors |
| **Typography** | Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*) |

---

## 📁 Project Structure

```text
├── public/
│   ├── favicon.svg              # Custom developer terminal SVG icon
│   └── resume.pdf               # Drop your official resume PDF here
├── src/
│   ├── types/
│   │   └── portfolio.ts         # Strictly typed data interfaces
│   ├── data/
│   │   └── portfolio.ts         # Centralized portfolio data (Easy to edit)
│   ├── hooks/
│   │   └── useActiveSection.ts  # Scroll-spy navigation hook
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky nav with mobile drawer
│   │   ├── Hero.tsx             # Hero with interactive code terminal
│   │   ├── About.tsx            # Capability grid & profile summary
│   │   ├── Skills.tsx           # Categorized skill badges & filters
│   │   ├── Experience.tsx       # Verified career timeline
│   │   ├── Projects.tsx         # Project cards with abstract UI previews
│   │   ├── ProjectDetailModal.tsx # Architecture specs & decision modal
│   │   ├── Education.tsx        # Anna University academic card
│   │   ├── Contact.tsx          # Form validation & direct mail dispatch
│   │   ├── Footer.tsx           # Footer & back-to-top button
│   │   └── ResumeModal.tsx      # Resume preview and setup dialog
│   ├── App.tsx                  # Root layout
│   ├── main.tsx                 # React entry point
│   └── index.css                # Tailwind CSS v4 & theme rules
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. Clone or open the project directory:
   ```bash
   cd new
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/` (or the port indicated in your terminal).

---

## 📦 Building for Production

Compile TypeScript and build the optimized production bundle:

```bash
npm run build
```

The output will be placed in the `dist/` directory.

To preview the production bundle locally:
```bash
npm run preview
```

---

## ⚙️ How to Personalize & Update Details

All personal data, employment history, and project schemas are separated into a single, clean file:
[`src/data/portfolio.ts`](file:///c:/workspace/local/local-workspace/new/src/data/portfolio.ts)

### 1. Activating Direct Resume Download
Place your official PDF file inside the `public/` folder with the filename `resume.pdf`:
```text
public/
  ├── favicon.svg
  └── resume.pdf
```
Then update `src/data/portfolio.ts`:
```ts
resume: {
  filename: 'Karthikeyan_G_Resume.pdf',
  available: true, // set to true
  path: '/resume.pdf',
}
```

### 2. Updating Social Profiles
Update the `socials` object in `src/data/portfolio.ts`:
```ts
socials: {
  github: {
    url: 'https://github.com/your-actual-github-username',
    label: 'github.com/your-username',
    isPlaceholder: false,
  },
  linkedin: {
    url: 'https://linkedin.com/in/your-actual-linkedin-profile',
    label: 'linkedin.com/in/your-profile',
    isPlaceholder: false,
  },
  // ...
}
```

### 3. Adding Real Project Repositories & Demo URLs
In `src/data/portfolio.ts`, update `projectPlaceholders` with your GitHub repo URLs and deployed sites:
```ts
githubUrl: 'https://github.com/your-username/iot-dashboard',
liveDemoUrl: 'https://iot-dashboard-demo.com',
isPlaceholder: false,
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel

1. Push your repository to GitHub / GitLab.
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**.

### Deploy to Netlify

1. Log in to [Netlify](https://www.netlify.com/) and choose **"Import from Git"**.
2. Select your repository.
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy Site**.

---

## 📄 License

This portfolio codebase is created for **Karthikeyan G**. Feel free to customize and adapt it for personal professional presentation.
