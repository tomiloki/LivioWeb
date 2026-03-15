import { test } from "@playwright/test";

async function scrollThroughPage(page: import("@playwright/test").Page) {
  const height = await page.evaluate(() => document.body.scrollHeight);
  const step = 400;
  for (let y = 0; y < height; y += step) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(150);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
}

test("full page desktop screenshot", async ({ browser }) => {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  await scrollThroughPage(page);
  await page.screenshot({ path: "tests/screenshots/full-desktop.png", fullPage: true });
  await ctx.close();
});

test("full page mobile screenshot", async ({ browser }) => {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  await scrollThroughPage(page);
  await page.screenshot({ path: "tests/screenshots/full-mobile.png", fullPage: true });
  await ctx.close();
});
