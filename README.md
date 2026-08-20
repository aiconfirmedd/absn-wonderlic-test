# Wonderlic SLE Practice Test

50 questions, 12 minutes — a practice simulator matching the structure, category
mix, and mechanics of the Wonderlic Scholastic Level Exam used for nursing/ABSN
admissions.

`index.html` is fully self-contained. Results are posted to a Supabase table
(`wonderlic_results`) using a publishable key with insert-only row-level
security — the embedded key cannot read any submissions.

Scoring: 1 point per correct answer, no penalty for wrong answers, auto-submit
at 0:00, unreached questions counted as incorrect.
