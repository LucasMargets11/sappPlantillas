// Prepare MSW service worker (mainly for static build environments)
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import fs from "fs";
import { spawnSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function ensureWorker() {
  // Copy the distributed worker file into project root (served at /mockServiceWorker.js)
  // Path for msw >=2
  // projectRoot should be the repo root (themes-sandbox), which is ONE level up from src/mocks
  const projectRoot = resolve(__dirname, "..");
  const publicDir = resolve(projectRoot, "public");
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  const distWorkerCLI = resolve(
    projectRoot,
    "node_modules/msw/lib/cli/index.js"
  );
  // Real worker file lives under msw package at: node_modules/msw/dist/browser.js (the embedded script generator)
  // However msw now exposes an init CLI; instead we embed a minimal worker string if not found.
  const target = resolve(publicDir, "mockServiceWorker.js");
  if (fs.existsSync(target)) {
    console.log("[msw] worker already present");
    return;
  }
  if (fs.existsSync(distWorkerCLI)) {
    console.log("[msw] Initializing worker via CLI");
    const result = spawnSync(
      "node",
      [distWorkerCLI, "init", "public", "--save"],
      { cwd: projectRoot, stdio: "inherit" }
    );
    if (result.status !== 0) {
      console.warn(
        "[msw] CLI init failed, falling back to minimal placeholder worker"
      );
    } else if (fs.existsSync(target)) {
      console.log("[msw] worker generated successfully");
      return;
    }
  } else {
    console.warn(
      "[msw] CLI not found, writing placeholder worker (limited interception)"
    );
  }
  const workerContent = `/* mockServiceWorker (placeholder) */\nself.addEventListener('install',()=>self.skipWaiting());self.addEventListener('activate',()=>self.clients.claim());self.addEventListener('message',()=>{});self.addEventListener('fetch',()=>{});`;
  fs.writeFileSync(target, workerContent, "utf8");
  console.log("[msw] placeholder mockServiceWorker.js written");
}

ensureWorker().catch((e) => {
  console.error(e);
  process.exit(1);
});
