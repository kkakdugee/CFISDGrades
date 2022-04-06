const puppeteer = require('puppeteer');
require('dotenv').config();

(async () => {
    const browser = puppeteer.launch();
    const page = browser.newPage();

    await CFISDLogin(page);
    await HomeAccessCenter(page);
})();

async function CFISDLogin(page) {
    await page.goto("my.cfisd.net");
    await page.type('#username', process.env.username);
    await page.type('#password', process.env.password);
    await page.click('#signin');
    await page.waitForTimeout(3000);
}

async function HomeAccessCenter(page) {
    await page.click('body > app-root > secure > div > app-apps-container > application:nth-child(17)');
    await page.click('#hac-Grades');
    await page.click('#hac-nav-submenu-Grades-Transcript');
    await scrapeTranscript(page);
}

async function scrapeTranscript(page) {

}

