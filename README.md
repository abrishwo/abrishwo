# Next.js & Strapi Portfolio Website

This is a production-ready portfolio website built with Next.js, TypeScript, and Tailwind CSS. It is designed to be backed by a headless CMS (Strapi is recommended) for managing content like projects, blog posts, and testimonials.

## Features

- **CMS-Powered**: Content is fetched from a headless CMS with a graceful fallback to local mock data.
- **Responsive Design**: Fully responsive layout built with Tailwind CSS.
- **Contact Form**: API endpoint with rate-limiting and honeypot spam protection.
- **Testing**: Includes unit tests (Jest) and E2E tests (Playwright).
- **CI/CD**: GitHub Actions workflow for continuous integration.

---

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- Yarn

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file by copying the example file:

```bash
cp .env.example .env.local
```

Now, fill in the variables in `.env.local`:
- `NEXT_PUBLIC_API_URL`: The URL of your Strapi instance. If you leave this blank, the app will use local mock data, which is useful for frontend development without a running backend.
- `SENDGRID_API_KEY`, `CONTACT_RECEIVER_EMAIL`, `SENDGRID_FROM`: (Optional) If you want to enable email forwarding for the contact form.

### 4. Run the development server

```bash
yarn dev
```

The application should now be running at [http://localhost:3000](http://localhost:3000).

---

## Testing

This project includes both unit and end-to-end tests.

### Running Unit Tests

Unit tests are written with Jest and React Testing Library.

```bash
yarn test
```

### Running End-to-End Tests

E2E tests are written with Playwright. These tests will start the development server automatically.

```bash
yarn playwright test
```

---

## Deployment

For detailed instructions on deploying the frontend (Next.js) and a backend CMS (Strapi), please see the [Deployment Guide](./deploy-guide.md).
