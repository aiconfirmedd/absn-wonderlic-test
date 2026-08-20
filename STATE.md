# State

- Objective: Ship Wonderholic ABSN Guide under the project operating policy in `CLAUDE.md` / `AGENTS.md`.
- Completed: Verified the 50-question bank and pinned its SHA-256; built the study landing page, select-then-Next timed quiz, and no-stakes Explore Mode with free navigation plus visible answers and tips; added sourced strategy guidance; corrected privacy, accessibility, mobile, claims, and results issues; renamed the product to Wonderholic ABSN Guide; published the exact verified source to GitHub and production at `https://absn-wonderlic-test.vercel.app`; local and production checks passed on 2026-08-20.
- Key decisions: `DECISIONS.md`. Questions remain unchanged; first name is required; detailed result upload is optional and consent-gated.
- Important files/systems: `app/page.tsx`, `app/globals.css`, `public/wonderholic-guide-quiz-understanding-absn.html`, `tests/rendered-html.test.mjs`, `sources/wonderholic-guide-quiz-understanding-absn-research.md`, `vercel.json`, GitHub `aiconfirmedd/absn-wonderlic-test`, Vercel production, OpenAI Sites, and insert-only Supabase results.
- Unresolved: 21st.dev component search returned HTTP 401, so no registry component was added.
- Next: Share the Vercel production URL with the test taker; avoid creating a live result during verification.
- Blockers: None.
