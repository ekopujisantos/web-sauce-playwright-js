import { test, expect } from '@playwright/test'
import { LoginPage } from '../pageobject/loginPage.js'

let loginPage

test.describe('Login Page', () => {

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.open()
  })

  test('login with valid credentials', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce')
    await expect(page).toHaveURL(/inventory/)
  })

  test('login with invalid credentials shows error', async ({ page }) => {
    await loginPage.login('invalid_user', 'wrong_password')
    const errorMsg = await loginPage.getErrorMessage()
    expect(errorMsg).toContain('Username and password do not match')
  })
})
