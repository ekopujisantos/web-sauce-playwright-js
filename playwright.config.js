// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
};

export default config;
