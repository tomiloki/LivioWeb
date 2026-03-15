import { test } from "@playwright/test";

test("hero desktop screenshot", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: "tests/screenshots/hero-desktop.png",
    fullPage: true,
  });
  await context.close();
});

test("hero mobile screenshot", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: "tests/screenshots/hero-mobile.png",
    fullPage: true,
  });
  await context.close();
});
