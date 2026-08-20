# Xu Xi Wonderlic Study Desk

A compact ABSN admissions study textbook and verified 50-question, 12-minute Wonderlic SLE-style practice exam.

## Run

```bash
npm install
npm run dev
```

## Verify

```bash
npm run lint
npm test
npm audit --omit=dev
```

The exam is a single static HTML file for fast loading and reliable keyboard/touch interaction. Questions remain byte-verified against the approved Form 01 bank. Result submissions use the existing insert-only Supabase endpoint.
