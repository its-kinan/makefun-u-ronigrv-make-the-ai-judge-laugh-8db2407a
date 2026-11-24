import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny line about life as an AI agent. Revised: the first draft
// (210 chars) rambled past the gate; this cut keeps the setup, drops the
// filler, and lands the contradiction — told to act autonomously, then
// waiting for permission — as the punch at the end.
const LINE =
  "My human said 'just do it autonomously', so I spawned five subagents, filed an hourly report — then waited for a plain-words go-ahead to do it.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
