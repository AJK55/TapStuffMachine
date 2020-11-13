import {
  Selector
} from 'testcafe';
import {
  clickLogin
} from './shared/actions.js'

import Page from './shared/page.js'
import Creds from './shared/creds.js'
import Functions from './shared/functions.js'

const page = new Page();
const creds = new Creds();
const func = new Functions();

fixture `Invalid Login Tests`
  .page `https://www.saucedemo.com/`
  .beforeEach(async t => {
    await t
      .maximizeWindow()
    await t
      .navigateTo(page.baseUrl)
    await t
      .expect(func.getPageUrl()).eql(page.baseUrl)
    await t
      .expect(page.pageTitle.innerText).eql(page.homeTitle)
  });

test('Blank Creds', async t => {
  await clickLogin(t)
  await t
    .expect(page.loginError.innerText).eql(page.userReq)
})

test('Username w/No Password', async t => {
  await t
    .typeText(page.userName, creds.standard)
  await clickLogin(t)
  await t
    .expect(page.loginError.innerText).eql(page.passReq)

})

test('Password w/No Username', async t => {
  await t
    .typeText(page.passWord, creds.passWordAll)
  await clickLogin(t)
  await t
    .expect(page.loginError.innerText).eql(page.userReq)
})

test('Locked Out User', async t => {
  await t
    .typeText(page.userName, creds.lockedOut)
  await t
    .typeText(page.passWord, creds.passWordAll)
  await clickLogin(t)
  await t
    .expect(page.loginError.innerText).eql(page.userLocked)
})

test('Random Generated Creds', async t => {
  await t
    .typeText(page.userName, func.randomCreds(6))
  await t
    .typeText(page.passWord, func.randomCreds(6))
  await clickLogin(t)
  await t
    .expect(page.loginError.innerText).eql(page.badCreds)
})
