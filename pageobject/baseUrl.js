export const baseUrl = 'https://www.saucedemo.com/'

export async function gotoBaseUrl(page) {
  await page.goto(baseUrl)
}
