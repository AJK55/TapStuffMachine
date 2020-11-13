import {
  Selector
} from 'testcafe';

export default class Page {
  constructor() {

    this.pageUrls = [
this.baseUrl = `https://www.saucedemo.com/`,
      this.baseIndexUrl = 'https://www.saucedemo.com/index.html',
      ]

    this.pageTitles = [
    this.homeTitle = 'Swag Labs',
]

    this.pageLocators = [
    this.pageTitle = Selector("title"),
]

    this.homePage = [
    this.loginLogo = Selector('.login_logo'),
    this.botLogo = Selector('.bot_column'),
    this.userName = Selector('#user-name'),
    this.passWord = Selector('#password'),
    this.loginButton = Selector('#login_button_container input.btn_action'),
    this.loginError = Selector('#login_button_container h3')
]

    this.images = [
      this.swagLabsLogo = Selector('https://www.saucedemo.com/img/SwagLabs_logo.png'),
      this.loginBot = Selector('https://www.saucedemo.com/img/Login_Bot_graphic.png')
    ]

    this.errorMsgsText = [
      this.userReq = 'Epic sadface: Username is required',
      this.passReq = 'Epic sadface: Password is required',
      this.badCreds = 'Epic sadface: Username and password do not match any user in this service',
      this.userLocked = 'Epic sadface: Sorry, this user has been locked out.',
    ]

  }
};
