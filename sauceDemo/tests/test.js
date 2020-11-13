import {
  Selector
} from 'testcafe';
import {
  clickLogin
} from './shared/actions.js';

import Page from './shared/page.js'
import Creds from './shared/creds.js'
import Functions from './shared/functions.js'
import Inventory from './shared/inventory.js'

const page = new Page();
const creds = new Creds();
const func = new Functions();
const inv = new Inventory();

fixture `Sauce Demo`
  .page `https://www.saucedemo.com/`
  .beforeEach(async t => {
    await t
      .navigateTo(page.baseUrl)
    await t
      .expect(func.getPageUrl()).eql(page.baseUrl)
  });

test('Home Page Title', async t => {
  await t
    .expect(page.pageTitle.innerText).eql(page.homeTitle)
});


test('Home Page Locators + Blank Creds', async t => {
  await t
    .hover(page.loginLogo)
  await t
    .hover(page.botLogo)
  await t
    .click(page.userName)
  await t
    .click(page.passWord)
  await clickLogin(t)
  await t
    .expect(page.loginError.innerText).eql(page.userReq)

});
