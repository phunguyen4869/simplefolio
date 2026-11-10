// Builds src/vi.html, the Vietnamese page, from src/index.html (the English
// source) and the Vietnamese copy in src/data/translations.mjs.
//
//   node scripts/build-vi.mjs           build once
//   node scripts/build-vi.mjs --watch   rebuild when either source changes
//
// It reads the HTML with regular expressions instead of a parser, which holds
// as long as a translated element does not contain another element with the
// same tag name, and its attributes contain no "<" or ">".
import { readFileSync, writeFileSync, watchFile } from "node:fs";
import { fileURLToPath } from "node:url";

const SOURCE = new URL("../src/index.html", import.meta.url);
const COPY = new URL("../src/data/translations.mjs", import.meta.url);
const OUTPUT = new URL("../src/vi.html", import.meta.url);
const PAGE = "vi.html";

const escapeText = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escapeAttr = (text) =>
  text.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

async function build() {
  // The query string makes --watch re-read the file instead of the module cache
  const { default: translations } = await import(`${COPY.href}?${Date.now()}`);
  const source = readFileSync(SOURCE, "utf8");

  const canonical = source.match(/rel="canonical"[^>]*\shref="([^"]+)"/);
  if (!canonical) throw new Error("index.html has no canonical link");
  // The page URLs are not copy: they follow from the English canonical URL
  const copy = {
    ...translations.vi,
    "meta.url": canonical[1] + PAGE,
    "meta.otherUrl": canonical[1],
  };

  const used = new Set();
  const translate = (key) => {
    if (!(key in copy)) throw new Error(`No Vietnamese copy for "${key}"`);
    used.add(key);
    return copy[key];
  };

  // Every opening tag that carries a data-i18n attribute
  const openTag = /<([a-z][a-z0-9]*)\b([^<>]*\bdata-i18n[^<>]*)>/gi;
  let html = "";
  let position = 0;
  let match;

  while ((match = openTag.exec(source))) {
    const tag = match[1];
    let content = null;
    const attributes = [];

    let rest = match[2].replace(
      /\s*\bdata-i18n(-[a-z-]+)?="([^"]*)"/g,
      (_, suffix, key) => {
        if (!suffix) content = escapeText(translate(key));
        else if (suffix === "-html") content = translate(key);
        else attributes.push([suffix.slice(1), translate(key)]);
        return "";
      },
    );

    for (const [name, value] of attributes) {
      const attribute = new RegExp(`(\\s${name}=")[^"]*"`);
      if (!attribute.test(rest)) {
        throw new Error(`<${tag}> has data-i18n-${name} but no ${name}`);
      }
      rest = rest.replace(
        attribute,
        (_, start) => `${start}${escapeAttr(value)}"`,
      );
    }

    html += source.slice(position, match.index) + `<${tag}${rest}>`;
    position = openTag.lastIndex;

    if (content !== null) {
      const closeTag = new RegExp(`</${tag}\\s*>`, "gi");
      closeTag.lastIndex = position;
      const close = closeTag.exec(source);
      if (!close) throw new Error(`<${tag}> is never closed`);
      html += content;
      position = openTag.lastIndex = close.index;
    }
  }
  html += source.slice(position);

  const unused = Object.keys(copy).filter((key) => !used.has(key));
  if (unused.length) {
    throw new Error(`Copy not used in index.html: ${unused.join(", ")}`);
  }

  html = html.replace(
    /<!DOCTYPE html>/i,
    "$&\n<!-- Generated from index.html by scripts/build-vi.mjs. Do not edit. -->",
  );
  writeFileSync(OUTPUT, html);
  console.log(`Built ${fileURLToPath(OUTPUT)}`);
}

if (process.argv.includes("--watch")) {
  const rebuild = () => build().catch((error) => console.error(error.message));
  [SOURCE, COPY].forEach((file) => watchFile(file, { interval: 300 }, rebuild));
  rebuild();
} else {
  await build();
}
