// filename: pages/LoginPage.js
const BasePage = require('./BasePage')
const USERNAME_INPUT = { id: 'username' }
const PASSWORD_INPUT = { id: 'password' }
const SUBMIT_BUTTON = { css: 'button' }
const SUCCESS_MESSAGE = { css: '.flash.success' }
const FAILURE_MESSAGE = {css: '.flash.error'}
const LOGIN_FORM = { id: 'login' }

class LoginPage extends BasePage {
  constructor(driver) {
    super(driver)
  }

  async load() {
    await this.visit('/login')
    if (await !this.isDisplayed(LOGIN_FORM))
      throw new Error('Login form not loaded')
  }

  async authenticate(username, password) {
    await this.type(USERNAME_INPUT, username)
    await this.type(PASSWORD_INPUT, password)
    await this.click(SUBMIT_BUTTON)
  }

  successMessagePresent() {
    return this.isDisplayed(SUCCESS_MESSAGE)
  }

  failureMessagePresent() {
    return this.isDisplayed(FAILURE_MESSAGE)
  }
}

module.exports = LoginPage
