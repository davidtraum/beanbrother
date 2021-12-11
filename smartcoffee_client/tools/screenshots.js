/**
 * @author dtraum
 * @date 06.12.2021
 */

const puppeteer = require("puppeteer");
const fs = require('fs');

const resolutions = [
    {
        id: 'phone',
        size: [411, 823],
        rotated: true
    },
    {
        id: 'desktop',
        size: [1920, 1080]
    },
    {
        id: '4k',
        disabled: true,
        size: [1920 * 2, 1080 * 2]
    },
    {
        id: 'tablet',
        size: [720, 480],
        rotated: true
    },
    {
      id: 'iphone_lg',
      size: [1242, 2688]
    },
    {
     id: 'iphone_sm',
     size: [1242, 2208]
    },
    {
      id: 'ipad',
      size: [2048, 2732]
    }
];

let total = 0;
let totalDone = 0;

const base = './graphics/screenshots';

if (!fs.existsSync(base)) {
    fs.mkdir(base);
}

function onProgress() {
    totalDone++;
    console.log("Progress:", `${(((totalDone / total) * 100) | 0)}%`);
}

async function capture(page, path) {
    console.log("Capturing", path);
    const basePath = `${base}/${path}`;
    if (!fs.existsSync(basePath)) {
        fs.mkdirSync(basePath);
    }
    for (const res of resolutions) {
        if (!res.disabled) {
            console.log("Taking screenshot '", res.id, "'...");
            await page.setViewport({ width: res.size[0], height: res.size[1] });
            await page.screenshot({ path: `${basePath}/${res.id}.webp` });
            onProgress();
            await page.screenshot({ path: `${basePath}/${res.id}.png` });
            onProgress();
            if (res.rotated) {
                console.log("Taking rotated screenshot '", res.id, "'...");
                await page.setViewport({ width: res.size[1], height: res.size[0] });
                await page.screenshot({ path: `${basePath}/${res.id}_rotated.webp` });
                onProgress();
                await page.screenshot({ path: `${basePath}/${res.id}_rotated.png` });
                onProgress();
            }
        }
    }
}

async function gotoUrl(page, url) {
    await page.goto(`http://localhost:8100/${url}`);
    page.waitForNetworkIdle();
    await page.evaluate(() => {
        localStorage.setItem('CapacitorStorage.name', 'Demo');
    });
    await page.goto(`http://localhost:8100/${url}`);
    await page.waitForNetworkIdle();
    await page.waitForTimeout(1000);
}

async function captureHome(page) {
    await gotoUrl(page, 'view/brew');
    await capture(page, 'home');
}

async function captureSocial(page) {
    await gotoUrl(page, 'view/social');
    await capture(page, 'social');
}

async function captureHistory(page) {
    await gotoUrl(page, 'view/history');
    await capture(page, 'history');
}

const captures = [
    captureHome,
    captureSocial,
    captureHistory
];

for (const res of resolutions) {
    if (!res.disabled) {
        total += 2;
        if (res.rotated) {
            total += 2;
        }
    }
}
total *= captures.length;

console.log("Total estimated images: ", total);

const captureTask = async () => {
    const before = Date.now();
    console.log("Running screenshot tool...");
    const browser = await puppeteer.launch({ headless: !process.argv.includes('debug') });
    console.log("Loading...");
    for(const cap of captures) {
        await cap(await browser.newPage());
    }
    await browser.close();
    console.log("Done.", Math.floor((Date.now() - before) / 1000), "s");
    console.log('Wrote', totalDone, 'images.');
};
captureTask();
