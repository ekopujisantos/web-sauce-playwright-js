import * as el from '../element/loginElements.js'
import { gotoBaseUrl } from './baseUrl.js'

export class LoginPage {
  constructor(page) {
    this.page = page
  }

  async open() {
    await gotoBaseUrl(this.page)
  }

  async login(username, password) {
    await this.page.fill(el.usernameInput, username)
    await this.page.fill(el.passwordInput, password)
    await this.page.click(el.loginButton)
  }

  async getErrorMessage() {
    return await this.page.textContent(el.errorMessage)
  } 
}
