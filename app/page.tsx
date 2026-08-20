const chapters = [
  {
    number: "01",
    title: "Quick recognition",
    budget: "5–8 sec",
    cue: "Scan, don’t read",
    copy: "Compare years before months, surnames before initials, and duplicate pairs one character at a time.",
    trap: "Comparing the first visible detail instead of the most decisive one.",
  },
  {
    number: "02",
    title: "Verbal",
    budget: "3–25 sec",
    cue: "Name the relationship",
    copy: "Define word pairs in two words. For analogies, say the exact relationship before looking at choices.",
    trap: "Choosing a word that is associated but does not preserve the relationship.",
  },
  {
    number: "03",
    title: "Math",
    budget: "10–18 sec",
    cue: "Find the base",
    copy: "Read the final question first, normalize units, then calculate only the quantity being asked for.",
    trap: "Solving correctly for the wrong person, item, unit, or percent base.",
  },
  {
    number: "04",
    title: "Series",
    budget: "8–14 sec",
    cue: "Ratio, then gaps",
    copy: "Test multiplication on two pairs. If it fails, inspect differences and alternating patterns.",
    trap: "Seeing ×2 and forgetting the repeated +1 or −1 adjustment.",
  },
  {
    number: "05",
    title: "Logic",
    budget: "10–15 sec",
    cue: "Use only the premises",
    copy: "Translate every statement literally. Never reverse an implication or import outside knowledge.",
    trap: "Calling an unsupported conclusion false when it is only not certain.",
  },
  {
    number: "06",
    title: "Spatial",
    budget: "10–15 sec",
    cue: "Track one feature",
    copy: "For mirrors, height stays fixed while left and right swap. For rotations, both position and orientation move.",
    trap: "Mistaking a 180° turn for a left-right mirror.",
  },
  {
    number: "07",
    title: "General knowledge",
    budget: "3–5 sec",
    cue: "Know or move",
    copy: "Recall the fact immediately. If it is not available, make the best supported choice and protect the clock.",
    trap: "Spending twenty seconds reconstructing a one-point fact.",
  },
];

const formulas = [
  ["Percent of", "part = percent × whole"],
  ["Percent change", "change ÷ original"],
  ["Distance", "rate × time"],
  ["Average speed", "total distance ÷ total time"],
  ["Work together", "add rates, not times"],
  ["Successive discounts", "multiply what remains"],
];

const videos = [
  {
    source: "JobTestPrep",
    title: "Wonderlic Test — Learn How to Ace This Cognitive Test",
    note: "A broad overview of format, question families, repeated practice, and full timed simulations.",
    href: "https://www.youtube.com/watch?v=Ordmd9PZB_U",
  },
  {
    source: "Online Training for Everyone",
    title: "Pass the Wonderlic Assessment Test",
    note: "Recent worked-question review focused on recognizing common types and moving quickly.",
    href: "https://www.youtube.com/watch?v=LAW2bOqcH5w",
  },
  {
    source: "Mometrix Test Preparation",
    title: "Practice Wonderlic Test Questions",
    note: "A useful 25-question practice set for pausing, solving, and checking the method.",
    href: "https://www.youtube.com/watch?v=FUkGOYPC8kI",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Wonderholic ABSN study guide home">
          <span className="brand-mark">WH</span>
          <span>
            <strong>Wonderholic</strong>
            <small>Guide · Quiz · Understanding</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#textbook">Textbook</a>
          <a href="#evidence">Watch</a>
          <a href="#memory">Memory sheet</a>
          <a className="nav-cta" href="/wonderholic-guide-quiz-understanding-absn.html">Open quiz</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Wonderholic guide · quiz · understanding · ABSN</p>
          <h1>Think clearly<br />under twelve minutes.</h1>
          <p className="hero-lede">
            A verified 50-question practice exam paired with a compact textbook
            for pace, memory, and decision-making under pressure.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/wonderholic-guide-quiz-understanding-absn.html">Start the timed quiz</a>
            <a className="button button-secondary" href="#textbook">Study the method first</a>
          </div>
          <p className="independent-note">Independent practice resource. Not affiliated with Wonderlic or a university.</p>
        </div>
        <aside className="exam-card" aria-label="Exam format">
          <div className="exam-card-top">
            <span>Practice Form 01</span>
            <span className="verified-dot">Verified</span>
          </div>
          <div className="exam-metric">
            <strong>50</strong>
            <span>questions</span>
          </div>
          <div className="exam-metric">
            <strong>12:00</strong>
            <span>total time</span>
          </div>
          <div className="exam-card-grid">
            <span><b>14.4s</b> per item</span>
            <span><b>1 point</b> each</span>
            <span><b>1 / 0</b> practice scoring</span>
            <span><b>A–E</b> keys</span>
          </div>
          <p>All 50 answer keys were independently re-solved before release.</p>
        </aside>
      </section>

      <section className="pace-strip" aria-label="Exam mindset">
        <p><span>01</span> Bank the easy points</p>
        <p><span>02</span> Stop at twenty seconds</p>
        <p><span>03</span> Eliminate and commit</p>
        <p><span>04</span> Best choice, then move</p>
      </section>

      <section className="section textbook" id="textbook">
        <div className="section-heading">
          <p className="eyebrow">The field textbook</p>
          <h2>Seven methods. One decision system.</h2>
          <p>Memorize the cue, not the paragraph. Each cue tells you what to do in the first two seconds.</p>
        </div>
        <div className="chapter-grid">
          {chapters.map((chapter) => (
            <article className="chapter" key={chapter.number}>
              <div className="chapter-meta">
                <span>{chapter.number}</span>
                <span>{chapter.budget}</span>
              </div>
              <h3>{chapter.title}</h3>
              <p className="chapter-cue">{chapter.cue}</p>
              <p>{chapter.copy}</p>
              <p className="chapter-trap"><b>Watch for:</b> {chapter.trap}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section evidence" id="evidence">
        <div className="section-heading">
          <p className="eyebrow">Research shelf</p>
          <h2>Watch the method. Then solve it.</h2>
          <p>
            These are three free starting videos for format recognition and worked practice.
            Official Wonderlic guidance remains the authority for timing and test-day rules.
          </p>
        </div>
        <div className="video-grid">
          {videos.map((video, index) => (
            <a className="video-card" href={video.href} target="_blank" rel="noreferrer" key={video.href}>
              <span className="video-number">0{index + 1}</span>
              <p>{video.source}</p>
              <h3>{video.title}</h3>
              <small>{video.note}</small>
              <b>Watch on YouTube <span aria-hidden="true">↗</span></b>
            </a>
          ))}
        </div>
        <p className="source-note">
          Policy check: the official sample says 50 questions in 12 minutes, no calculator or dictionary,
          work in order, avoid spending too long on one item, and mark a best choice when reasonably unsure.{" "}
          <a href="https://wonderlic.com/wp-content/uploads/2024/07/07.11.24-Select-Sample-Assessment-Downloadable.pdf" target="_blank" rel="noreferrer">Read the official sample ↗</a>
        </p>
      </section>

      <section className="section memory" id="memory">
        <div className="memory-copy">
          <p className="eyebrow">One-page memory sheet</p>
          <h2>Write less. Recall faster.</h2>
          <p>
            Put these six lines on scratch paper from memory before a practice run.
            They cover the recurring calculations without turning the test into a formula hunt.
          </p>
          <div className="mindset-card">
            <span className="quote-mark">“</span>
            <blockquote>
              My job is not to solve every hard question. My job is to collect
              the most correct answers before the clock ends.
            </blockquote>
            <p>Exam mindset</p>
          </div>
        </div>
        <div className="formula-sheet" aria-label="Formulas to memorize">
          <div className="sheet-header">
            <span>Memory deck</span>
            <span>6 cards</span>
          </div>
          {formulas.map(([name, formula], index) => (
            <div className="formula" key={name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{name}</strong>
              <code>{formula}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="section ritual">
        <div className="section-heading compact">
          <p className="eyebrow">Before you press start</p>
          <h2>The ninety-second reset.</h2>
        </div>
        <ol className="ritual-list">
          <li><span>01</span><div><strong>Clear the surface</strong><p>Pencil, one sheet of paper, water. Close every other tab.</p></div></li>
          <li><span>02</span><div><strong>Write the six formulas</strong><p>Recall them before the timer creates pressure.</p></div></li>
          <li><span>03</span><div><strong>Set the pace rule</strong><p>At twenty seconds, choose the best remaining option and move.</p></div></li>
          <li><span>04</span><div><strong>Start calm</strong><p>The first questions are where accuracy compounds. Fast is smooth, not frantic.</p></div></li>
        </ol>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>One clean run. No interruptions.</h2>
          <p>Your answers, category accuracy, and time per question appear after submission.</p>
        </div>
        <a className="button button-gold" href="/wonderholic-guide-quiz-understanding-absn.html">Begin the ABSN practice quiz</a>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark">WH</span><span><strong>Wonderholic</strong><small>Guide · Quiz · Understanding — ABSN</small></span></div>
        <p>Prepared for focused practice. Questions remain unchanged from the verified Form 01 bank.</p>
      </footer>
    </main>
  );
}
