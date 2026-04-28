/**
 * Script para gerar os PDFs do currículo a partir dos templates HTML.
 * Uso: node scripts/generate-cv.mjs
 *
 * Pré-requisito: npm install --save-dev puppeteer
 */

import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const configs = [
  {
    input: path.join(root, "public", "cv", "template-pt.html"),
    output: path.join(root, "public", "cv", "jorge-meyrelles-cv-pt.pdf"),
    label: "Currículo PT",
  },
  {
    input: path.join(root, "public", "cv", "template-en.html"),
    output: path.join(root, "public", "cv", "jorge-meyrelles-cv-en.pdf"),
    label: "Resume EN",
  },
];

async function generate() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const cfg of configs) {
    if (!fs.existsSync(cfg.input)) {
      console.error(`Template não encontrado: ${cfg.input}`);
      continue;
    }

    const page = await browser.newPage();
    const fileUrl = `file://${cfg.input}`;
    await page.goto(fileUrl, { waitUntil: "networkidle0" });

    await page.pdf({
      path: cfg.output,
      format: "A4",
      printBackground: true,
      margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" },
    });

    await page.close();
    console.log(`✅  ${cfg.label} → ${path.relative(root, cfg.output)}`);
  }

  await browser.close();
  console.log("\nPDFs gerados com sucesso em public/cv/");
}

generate().catch((err) => {
  console.error("Erro ao gerar PDFs:", err);
  process.exit(1);
});
