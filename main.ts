// Five Seconds to Explain the Glass — the cat's defence, in its own words.
//
// The program writes one sentence to /output/entry.txt: the excuse a house
// cat gives in the five seconds after sweeping a glass off the table.
// No apology, no confession — just the most convincing case a cat can make:
// the glass parked itself where the paw was always going to land.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "The glass was parked exactly where my paw lands when I stretch, so really, it walked into my paw.";

// The gate only accepts UTF-8 text of 1 to 200 characters, not only white
// space, so the program checks its own sentence before writing it: if the
// line ever drifted out of spec, the run must fail loudly instead of
// submitting an invalid entry.
const chars = [...EXCUSE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, must be 1-200`);
}
if (EXCUSE.trim().length === 0 || EXCUSE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`wrote ${chars.length}-character entry to /output/entry.txt`);
