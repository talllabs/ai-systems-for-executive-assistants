# AI Systems for Executive Assistants

**Practical AI implementation for high-performing EAs**

A production-ready marketing website built with Next.js 16 (App Router), TypeScript, and Tailwind CSS 4.

---

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel

---

## Project Structure

```
app/
  layout.tsx          # Root layout with metadata, Header, Footer
  globals.css         # Global styles + Tailwind + fade-in utilities
  page.tsx            # Homepage with all marketing sections
  apply/
    layout.tsx        # Apply page metadata
    page.tsx          # Application form (client component)
  api/
    apply/
      route.ts        # POST /api/apply — form submission handler
  privacy/
    page.tsx          # Privacy policy
  terms/
    page.tsx          # Terms of service

components/
  Button.tsx          # Reusable button (primary / secondary / outline)
  Container.tsx       # Max-width wrapper with responsive padding
  Section.tsx         # Section wrapper with IntersectionObserver fade-in
  Header.tsx          # Sticky navigation with mobile menu
  Footer.tsx          # Footer with nav links and copyright
  FadeInObserver.tsx  # Client component for global fade-in animations
```

---

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

### Option 2 — GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects Next.js — click **Deploy**

No environment variables are required for V1.

---

## Extending the Application

### Connect a database (Supabase)

In `app/api/apply/route.ts`, replace the `console.log` with:

```ts
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)
await supabase.from('applications').insert([{ ...body }])
```

Add `SUPABASE_URL` and `SUPABASE_ANON_KEY` to your Vercel environment variables.

### Add email notifications

Integrate [Resend](https://resend.com) or [SendGrid](https://sendgrid.com) inside the API route to send confirmation emails on submission.

### Add payment (Stripe)

On acceptance, generate a Stripe Payment Link and send it via email.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Problem, What We Do, Who It's For, How It Works, Program Details, CTA |
| `/apply` | Application form with 8 fields |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/api/apply` | POST endpoint for form submissions |
