import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function capture() {
  console.log('Launching Edge browser...');
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  });
  
  // 1. Desktop captures
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await desktopContext.newPage();
  
  console.log('Navigating to http://localhost:5173...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Capture Hero
  console.log('Capturing Hero...');
  await page.screenshot({ path: path.join(outDir, '01_inamigos_hero.png') });

  // Scroll to About
  console.log('Capturing About Us...');
  await page.locator('#about').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, '02_inamigos_about.png') });

  // Scroll to Initiatives / Services
  console.log('Capturing Initiatives & Services...');
  await page.locator('#initiatives').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, '03_inamigos_initiatives.png') });

  // Scroll to Internship Hub
  console.log('Capturing Internship Hub...');
  await page.locator('#internships').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, '04_inamigos_internship_hub.png') });

  // Scroll to Donation
  console.log('Capturing Donation & Impact...');
  await page.locator('#donate').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, '05_inamigos_donation_pledge.png') });

  // Scroll to Contact
  console.log('Capturing Contact Form...');
  await page.locator('#contact').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, '06_inamigos_contact_form.png') });

  // Full page screenshot
  console.log('Capturing Full Page Desktop...');
  await page.screenshot({ path: path.join(outDir, '07_inamigos_full_page.png'), fullPage: true });

  await desktopContext.close();

  // 2. Mobile captures
  console.log('Capturing Mobile Views...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);

  await mobilePage.screenshot({ path: path.join(outDir, '08_inamigos_mobile_view.png') });

  // Click hamburger
  console.log('Opening mobile menu...');
  await mobilePage.click('button[aria-label="Toggle menu"]');
  await mobilePage.waitForTimeout(500);
  await mobilePage.screenshot({ path: path.join(outDir, '09_inamigos_mobile_menu.png') });

  await mobileContext.close();
  await browser.close();
  console.log('All InAmigos Foundation screenshots captured successfully in /screenshots!');
}

capture().catch((err) => {
  console.error('Screenshot capture failed:', err);
  process.exit(1);
});
