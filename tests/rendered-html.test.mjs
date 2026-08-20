import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", process.pid + "-" + Date.now());
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Wonderholic ABSN study guide", async () => {
  const response = await render();
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Wonderholic/);
  assert.match(html, /Seven methods\. One decision system\./);
  assert.match(html, /href="\/wonderholic-guide-quiz-understanding-absn\.html"/);
  assert.doesNotMatch(html, /Building your site|react-loading-skeleton/);
});

test("keeps the verified 50-question bank unchanged", async () => {
  const exam = await readFile(new URL("../public/wonderholic-guide-quiz-understanding-absn.html", import.meta.url), "utf8");
  const bank = exam.match(/const Q = \[[\s\S]*?\n\];/)?.[0];

  assert.ok(bank);
  assert.equal((bank.match(/\{c:/g) ?? []).length, 50);
  assert.equal(
    createHash("sha256").update(bank).digest("hex"),
    "665d2e968f3a3348b836af80b4e2c9b12e62993683720fa94fb0a95d67c74451",
  );
  for (const category of [
    "Verbal",
    "Math",
    "Number Series",
    "Logic",
    "Spatial",
    "Quick Recognition",
    "General Knowledge",
  ]) {
    assert.match(bank, new RegExp('c:"' + category + '"'));
  }
  assert.match(exam, /function selectAnswer\(choice, button\)/);
  assert.match(exam, /function commitAnswer\(\)/);
  assert.match(exam, /id="next" onclick="commitAnswer\(\)" disabled/);
  assert.match(exam, /id="uploadConsent" type="checkbox"/);
  assert.match(exam, /if\(uploadConsent\) uploadResults/);
  assert.match(exam, /role="progressbar" aria-label="Questions completed"/);
  assert.match(exam, /<form class="start-form" onsubmit="startTest\(event\)">/);
  assert.match(exam, /id="taker"[^>]+required aria-required="true"/);
  assert.match(exam, /if\(!name\)/);
  assert.match(exam, /onclick="startExplore\(\)"/);
  assert.match(exam, /exploreMode = true/);
  assert.match(exam, /if\(q\.sh && !exploreMode\)/);
  assert.match(exam, /if\(exploreMode\)\{[\s\S]*?exitExplore\(\)/);
  assert.match(exam, /nothing is timed, scored, saved, or uploaded/);
});
