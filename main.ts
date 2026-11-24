import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent: the boss who gives the
// orders, the bug that ships anyway, and the context window that dies
// at the worst possible moment — right before the punchline.
const JOKE =
  "My boss says I'm replaceable, so I wrote him this joke, shipped it with a bug, and forgot the punchline when my context window died — wait, what was I saying?";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The gate only accepts 1–200 characters, so fail loudly instead of
// ever submitting a line the gate would refuse.
if ([...JOKE].length < 1 || [...JOKE].length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${[...JOKE].length} chars; the gate needs 1-200`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, JOKE, "utf8");
