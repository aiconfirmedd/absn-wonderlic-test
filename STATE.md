# State

- Objective: Ship Wonderholic Guide, Quiz & Understanding — ABSN under the project operating policy in `CLAUDE.md` / `AGENTS.md`.
- Completed: Verified the 50-question bank and pinned its SHA-256; built the study landing page, select-then-Next timed quiz, and no-stakes Explore Mode with free navigation plus visible answers and tips; added sourced strategy guidance; corrected privacy, accessibility, mobile, claims, and results issues; renamed the product, quiz route, research file, package, favicon, and memory pointer to Wonderholic Guide, Quiz & Understanding — ABSN; local lint, build, tests, and browser flow passed on 2026-08-20.
- Key decisions: `DECISIONS.md`. Questions remain unchanged; first name is required; detailed result upload is optional and consent-gated.
- Important files/systems: `app/page.tsx`, `app/globals.css`, `public/wonderholic-guide-quiz-understanding-absn.html`, `tests/rendered-html.test.mjs`, `sources/wonderholic-guide-quiz-understanding-absn-research.md`, `.openai/hosting.json`, OpenAI Sites, and insert-only Supabase results.
- Unresolved: Review corrections are uncommitted and the corrected Sites version has not been deployed or production-verified. 21st.dev component search returned HTTP 401, so no registry component was added.
- Next: Review and commit the existing application diff, deploy the exact commit to Sites, then run production landing/exam verification without a live result upload.
- Blockers: None.
