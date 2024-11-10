import { expect } from 'chai';
import { chromium } from 'playwright-chromium';

// it('should make screenshot', async () => {

//     const browser = await chromium.launch({ headless: true, slowMo: 500 })
//     const page = await browser.newPage();

//     await page.goto('http://127.0.0.1:5500/src/index.html');
//     await page.screenshot({ path: 'screenshot.png' });
//     await browser.close();

// })

it('should check if all articles are loaded', async () => {

    const browser = await chromium.launch({ headless: false, slowMo: 500 })
    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:5500/src/index.html');
    const isVisible = await page.isVisible('.accordion');
    expect(isVisible).to.be.true;
    await browser.close();
})
