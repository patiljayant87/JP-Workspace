import {test, expect} from '@playwright/test';

test('Open practicecart website', async ({ page }) => {
    await page.goto('file:///C:/Users/PC/Desktop/Typescript/practicekart-v6_1.html');
    await expect(page.getByText('Locator practice, in order.')).toBeVisible();
});