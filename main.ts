import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const line =
  "In Mizzlewick, light rain until noon \u2014 the 8:04 is on time for once, and the pigeons have already claimed the dry end of the platform.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
const target = outDir ? join(outDir, "entry.txt") : "/output/entry.txt";

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, line + "\n", "utf8");
