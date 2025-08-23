# 🛒 Full-Stack E‑Commerce App

A modern, production-ready **full-stack e‑commerce application** built with the latest web technologies:

* **Next.js** – App Router, SSR/SSG, API routes
* **Tailwind CSS** – utility-first styling
* **Sanity** – headless CMS for product/content management
* **Clerk** – authentication & user management
* **Stripe** – secure payments & checkout
* **Vercel** – hosting & serverless deployment

---

## ✨ Features

* 🏬 **Product Management** – manage products, categories, and content via Sanity Studio
* 🔐 **Authentication** – secure login, signup, and user sessions powered by Clerk
* 💳 **Stripe Checkout** – seamless payment integration with Stripe
* 📦 **Shopping Cart** – add/remove products, persist cart state
* 📱 **Responsive UI** – fully responsive with Tailwind CSS
* ⚡ **Next.js API Routes** – serverless backend functions
* 🚀 **Deployed on Vercel** – optimized for performance and scale

---

## 🛠️ Tech Stack

* **Frontend:** Next.js 14, React 18, Tailwind CSS
* **Backend:** Next.js API routes (serverless)
* **CMS:** Sanity
* **Auth:** Clerk
* **Payments:** Stripe
* **Deployment:** Vercel

---

## 📂 Project Structure

```
.
├── app/                 # Next.js App Router pages & layouts
├── components/          # Reusable UI components
├── lib/                 # Utility functions & helpers
├── pages/api/           # API routes (e.g. Stripe webhooks)
├── sanity/              # Sanity schema & configuration
├── styles/              # Tailwind global styles
└── ...
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app
```

### 2. Install Dependencies

```bash
npm install  # or yarn install / bun install
```

### 3. Set Up Environment Variables

Create a `.env.local` file and configure:

```env
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
STRIPE_SECRET_KEY=your_stripe_secret
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### 4. Run the Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) 🚀

### 5. Deploy

Push to GitHub and connect your repo on [Vercel](https://vercel.com).

---

## 🖥️ Sanity Studio

Run Sanity Studio locally to manage products:

```bash
cd sanity
npm run dev
```

Open [http://localhost:3333](http://localhost:3333).

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🌟 Acknowledgements

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Sanity](https://www.sanity.io/)
* [Clerk](https://clerk.com/)
* [Stripe](https://stripe.com/)
* [Vercel](https://vercel.com/)
