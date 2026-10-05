import {test, expect} from '@playwright/test';

test('Open practicecart website', async ({ page }) => {
    await page.goto('file:///C:/Users/PC/Desktop/Typescript/practicekart-v6_1.html');
    await expect(page.getByText('Locator practice, in order.')).toBeVisible();
});

test("Capturing screenshot: with Timestamp", async ({ page}) => {
    await page.goto("https://www.way2automation.com/way2auto_jquery/registration.php#load_box");
    let time = new Date().toISOString().replace(/[:.]/g, "_");

    await page.screenshot({
        path:`Screenshot/AllScreen_${time}.png`,
        fullPage: true
    });
});
