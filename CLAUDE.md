# Wonderholic Guide, Quiz & Understanding — ABSN project operating policy

Apply root `CLAUDE.md` / `AGENTS.md` first, then this file. This file is the canonical project-scoped policy for Claude, Codex, and compatible agents.

@PROJECT.md
@STATE.md
@DECISIONS.md

## Priorities

- Maximize correct work per compute: correctness → reliability → performance → speed → usage efficiency.
- Preserve security, privacy, accessibility, and required verification even when a cheaper path exists.
- Follow parent runtime, safety, approval, and tool policies when they are stricter.

## Communication

- Default quiet. Do not narrate routine progress or successful checks.
- Communicate only blockers, required decisions, material risks/findings, and completion.
- `verbose`, `status`, or `explain` temporarily enables useful detail for that request; return to quiet afterward.
- Keep durable evidence for important decisions without storing routine narration or hidden reasoning.

## Execution and routing

1. Read `STATE.md`, then retrieve only files relevant to the requested change.
2. Classify complexity and risk before selecting tools, models, or agents.
3. Use the fastest, lowest-cost available model that can reliably complete the task. Escalate for architecture, root-cause debugging, ambiguity, security/production risk, interconnected refactors, conflicting evidence, or difficult failures; de-escalate afterward. Do not hard-code model names.
4. Understand → execute the smallest correct change → run targeted checks → escalate only on failure, conflict, uncertainty, or material risk → run final verification.
5. Reuse existing code, platform features, dependencies, and verified evidence before adding anything.

## Verification

- Prefer deterministic evidence in this order when applicable: tests → compiler/type checker → linter → static analysis → scripted validation → model judgment.
- Never reduce necessary verification to save usage. Never report a check as passed unless it ran and passed.
- For UI flows, verify the affected keyboard and touch journey in a rendered browser after deterministic checks.
- Routine passing checks terminate quietly. Record only material failures, corrections, deployment evidence, and unresolved limits.

## Agents and context

- Use the minimum agents needed. Parallelize only independent work that benefits from it.
- Give each agent one distinct job and the minimum required context. Do not duplicate expensive reviews or create recursive review loops.
- Search narrowly first. Expand only when evidence is missing or conflicting.
- Do not repeatedly reread unchanged files, reload broad history, or resend identical context.

## Project constraints

- Keep all 50 Form 01 questions and keys unchanged. `tests/rendered-html.test.mjs` pins the bank SHA-256.
- Keep study mode separate from timed exam mode.
- Require a non-blank first name before the quiz starts; result upload remains optional.
- Selection uses tap or keys `1`–`5` / `A`–`E`; only Next or Enter commits the answer.
- Preserve fast static exam loading, mobile no-overflow behavior, keyboard access, visible focus, and 44px touch targets.
- Do not imply affiliation with Wonderlic or a university. Keep official guidance distinct from community tactics and avoid unsupported universal score claims.
- Detailed result upload is optional and requires explicit consent. Unchecked means local-only. Preserve insert-only Supabase access; do not create live test records unless the task requires it and cleanup is verified.
- Before release, run `npm run lint`, `npm test`, and `npm audit --omit=dev`, then verify the production user story without submitting a live result unless authorized.

## Canonical memory ownership

- `PROJECT.md`: stable purpose, route, kind, stage, and outcome.
- `DECISIONS.md`: accepted project/product decisions; change only when a decision changes.
- `STATE.md`: compact canonical checkpoint—objective, completed work, key files/systems, unresolved issues, next action. Update at material phase boundaries and completion.
- `sources/`: verified external evidence and provenance.
- `/Users/aiconfirmed/vaults/Command-Ring/10-projects/Wonderholic Guide Quiz and Understanding ABSN.md`: cross-project discovery pointer, not a duplicate checkpoint.
- `/Users/aiconfirmed/vaults/Command-Ring/20-agent-runs/Agent Event Ledger.md`: concise material event chronology only.
- Ponytail: implementation minimization and YAGNI; no project-memory ownership.
- Caveman: response compression; no project-memory ownership.
- Obsidian Command Ring: durable cross-project retrieval, organization, source traceability, and pointers to canonical repo state. Never copy the repo, raw logs, credentials, or routine narration into it.

## Conflict and retrieval rules

- Prefer current verified code/tests for behavior, `DECISIONS.md` for accepted decisions, `STATE.md` for current status, and `sources/` for research provenance.
- Command Ring project notes point to canonical repo files and must not override them.
- Resolve conflicts using the newest verified authoritative source. If authority or verification is unclear, flag the conflict instead of guessing.
