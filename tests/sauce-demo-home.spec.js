// sauce-demo-home.spec.js
const { test, expect } = require('@playwright/test');

test('access Sauce Demo home page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('.login_logo')).toBeVisible();
  await expect(page.locator('input[data-test="username"]')).toBeVisible();
  await expect(page.locator('input[data-test="password"]')).toBeVisible();
  await expect(page.locator('input[data-test="login-button"]')).toBeVisible();
  await page.waitForTimeout(5000); // Pause browser for 5 seconds
});
