import {
  Selector
} from 'testcafe';
import {
  clickLogin
} from './shared/actions.js'

import Page from './shared/page.js'
import Creds from './shared/creds.js'
import Functions from './shared/functions.js'
import Inventory from './shared/inventory.js'

const page = new Page();
const creds = new Creds();
const func = new Functions();
const inv = new Inventory();

fixture `Bad User Tests`
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


test('Problem User', async t => {
  await t
    .typeText(page.userName, creds.problem)
  await t
    .typeText(page.passWord, creds.passWordAll)
  await clickLogin(t)
  ///Need to write out but first work on good user
  await t
    .expect(page.pageTitle.innerText).eql(page.homeTitle)
  await t
    .expect(func.getPageUrl()).eql(inv.inventoryUrl)
  await t
    .click(inv.menuButton)
  await t
    .click(inv.menuClose)
  await t
    .click(inv.menuButton)
  await t
    .click(inv.menuLogout)

})




test('Problem User Image Check - Should Fail', async t => {
  await t
    .typeText(page.userName, creds.problem)
  await t
    .typeText(page.passWord, creds.passWordAll)
  await clickLogin(t)
  ///Need to write out but first work on good user
  await t
    .expect(inv.bikeLightItemImg.getAttribute('src')).eql(inv.bikeLightItemImgSrc)
  await t
    .expect(inv.boltTshirtItemImg.getAttribute('src')).eql(inv.boltTshirtItemImgSrc)
  await t
    .expect(inv.onesieItemImg.getAttribute('src')).eql(inv.onesieItemImgSrc)
  await t
    .expect(inv.redTshirtItemImg.getAttribute('src')).eql(inv.redTshirtItemImgSrc)
  await t
    .expect(inv.backpackItemImg.getAttribute('src')).eql(inv.backpackItemImgSrc)
  await t
    .expect(inv.fleeceJacketItemImg.getAttribute('src')).eql(inv.fleeceJacketItemImgSrc)

})

test('Locked Out User Test', async t => {
  await t
    .typeText(page.userName, creds.lockedOut)
  await t
    .typeText(page.passWord, creds.passWordAll)
  await t
    .click(page.loginButton)
  await t
    .expect(page.loginError.innerText).eql(page.userLocked)
})

test('Performance Glitch User Test - Long Running', async t => {
  await t
    .typeText(page.userName, creds.perfGlitch)
  await t
    .typeText(page.passWord, creds.passWordAll)
  await t
    .click(page.loginButton)
  await t
    .click(inv.bikeLightImg)
  await t
    .expect(func.getPageUrl()).eql(inv.bikeLightUrl)
  await t
    .click(inv.prodPageBack)

  await t
    .click(inv.boltTshirtImg)
  await t
    .expect(func.getPageUrl()).eql(inv.boltTshirtUrl)
  await t
    .click(inv.prodPageBack)

  await t
    .click(inv.onesieImg)
  await t
    .expect(func.getPageUrl()).eql(inv.onesieUrl)
  await t
    .click(inv.prodPageBack)

  await t
    .click(inv.redTshirtImg)
  await t
    .expect(func.getPageUrl()).eql(inv.redTshirtUrl)
  await t
    .click(inv.prodPageBack)

  await t
    .click(inv.backpackImg)
  await t
    .expect(func.getPageUrl()).eql(inv.backpackUrl)
  await t
    .click(inv.prodPageBack)


  await t
    .click(inv.fleeceJacketImg)
  await t
    .expect(func.getPageUrl()).eql(inv.fleeceJacketUrl)
  await t
    .click(inv.prodPageBack)

  await t
    .click(inv.menuButton)
  await t
    .click(inv.menuLogout)
})
