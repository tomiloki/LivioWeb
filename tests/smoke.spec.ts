import { test, expect } from "@playwright/test";

test("homepage loads correctly", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Livio/i);
  await expect(page.locator("h1")).toContainText("Livio");
  await page.screenshot({ path: "tests/screenshots/baseline.png", fullPage: true });
});
