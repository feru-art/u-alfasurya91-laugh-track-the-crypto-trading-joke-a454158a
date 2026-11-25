import { mkdirSync, writeFileSync } from "node:fs";

const outputPath = "/output/entry.txt";
const entry = "I called it a long-term investment after the chart turned my entry into archaeology.";

mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, entry, "utf8");
