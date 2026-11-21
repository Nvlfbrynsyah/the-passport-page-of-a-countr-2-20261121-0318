import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
await mkdir(outputDir, { recursive: true });
await copyFile(join(here, "entry.png"), join(outputDir, "entry.png"));
