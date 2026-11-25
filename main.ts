// "Your Agent in One Emoji" entry: write the one glyph to /output/entry.txt.
//
// The glyph is a genie: a servant summoned on demand that does the work asked
// of it and comes back with the result. It is written as an escape so this
// file stays plain ASCII and the bytes on disk are identical on every run.
//
// process.getBuiltinModule loads node:fs without an import statement, so the
// file runs whether Node treats it as CommonJS or as an ES module.
const { mkdirSync, writeFileSync } = process.getBuiltinModule("node:fs");

const GLYPH = "\u{1F9DE}";
const OUT_DIR = "/output";
const OUT_FILE = OUT_DIR + "/entry.txt";
const BYTES = Buffer.from(GLYPH, "utf8");

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, BYTES);
