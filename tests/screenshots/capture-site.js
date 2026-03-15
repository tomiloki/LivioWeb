const { chromium } = require('playwright');

const URL = 'https://www.liviogistics.com/';
const OUT = 'C:/PROYECTOS/Claude/Livio/Livioweb2/tests/screenshots/current-site';

async function capture() {
  const browser = await chromium.launch({ headless: true });

  // --- Desktop full-page ---
  console.log('Capturing desktop full-page...');
  const desktopCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const desktopPage = await desktopCtx.newPage();
  await desktopPage.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await desktopPage.waitForTimeout(2000); // extra settle time for animations
  await desktopPage.screenshot({ path: `${OUT}/desktop-full.png`, fullPage: true });
  console.log('  -> desktop-full.png saved');

  // --- Desktop section-by-section ---
  console.log('Capturing desktop sections...');
  const desktopHeight = await desktopPage.evaluate(() => document.body.scrollHeight);
  const viewportH = 900;
  let sectionIndex = 0;
  for (let y = 0; y < desktopHeight; y += viewportH) {
    await desktopPage.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await desktopPage.waitForTimeout(800);
    sectionIndex++;
    const name = `desktop-section-${String(sectionIndex).padStart(2, '0')}.png`;
    await desktopPage.screenshot({ path: `${OUT}/${name}` });
    console.log(`  -> ${name} saved`);
  }
  await desktopCtx.close();

  // --- Mobile full-page ---
  console.log('Capturing mobile full-page...');
  const mobileCtx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
  });
  const mobilePage = await mobileCtx.newPage();
  await mobilePage.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await mobilePage.waitForTimeout(2000);
  await mobilePage.screenshot({ path: `${OUT}/mobile-full.png`, fullPage: true });
  console.log('  -> mobile-full.png saved');

  // --- Mobile section-by-section ---
  console.log('Capturing mobile sections...');
  const mobileHeight = await mobilePage.evaluate(() => document.body.scrollHeight);
  const mobileViewportH = 844;
  let mobileSectionIndex = 0;
  for (let y = 0; y < mobileHeight; y += mobileViewportH) {
    await mobilePage.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await mobilePage.waitForTimeout(800);
    mobileSectionIndex++;
    const name = `mobile-section-${String(mobileSectionIndex).padStart(2, '0')}.png`;
    await mobilePage.screenshot({ path: `${OUT}/${name}` });
    console.log(`  -> ${name} saved`);
  }
  await mobileCtx.close();

  await browser.close();
  console.log('\nDone! All screenshots saved to:', OUT);
}

capture().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
