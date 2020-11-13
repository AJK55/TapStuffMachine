import {
  Selector
} from 'testcafe';
//import {
//  clickLogin
//} from './shared/actions.js'
import {
  standardLogin
} from './shared/actions.js'
//import {
//  loopsortItems
//} from './shared/actions.js'
import {
  goToCartPg
} from './shared/actions.js'
import {
  addRandomProduct
} from './shared/actions.js'

import Page from './shared/page.js'
import Creds from './shared/creds.js'
import Functions from './shared/functions.js'
import Inventory from './shared/inventory.js'
import Cart from './shared/cart.js'
import CO from './shared/cOut.js'

const page = new Page();
const creds = new Creds();
const func = new Functions();
const inv = new Inventory();
const cart = new Cart();
const co = new CO();

fixture `Testing of Checkout Page Functionality`
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
    await standardLogin(t)
  })
  .afterEach(async t => {
    await t
      .click(inv.menuButton)
    await t
      .click(inv.menuLogout)
    await t
      .expect(func.getPageUrl()).eql(page.baseIndexUrl)
    await t
      .expect(page.pageTitle.innerText).eql(page.homeTitle)
  });


test('Checkout Page Element Check Adding Random Product', async t => {
  await addRandomProduct(t)
  await t
    .hover(co.coYourInfo)
  await t
    .expect(co.coYourInfo.innerText).eql(co.coYourInfoText)

  var i;
  for (i = 0; i < inv.footers.length; i++) {
    await t
      .hover(inv.footers[i])
  }

  var b;
  for (b = 0; b < co.buttons.length; b++) {
    await t
      .hover(co.buttons[b])
  }

  var f;
  for (f = 0; f < co.formFields.length; f++) {
    await t
      .hover(co.formFields[f])
  }

  await t
    .expect(co.firstName.getAttribute('placeholder')).eql(co.firstNamePH)
  await t
    .expect(co.lastName.getAttribute('placeholder')).eql(co.lastnamePH)
  await t
    .expect(co.zipCode.getAttribute('placeholder')).eql(co.zipCodePH)


})


test('CheckOut Form Error Validation', async t => {

  await addRandomProduct(t)
  await t
    .click(co.continue)
  await t
    .expect(co.errorContainer.innerText).eql(co.firstNameReq)
  await t
    .typeText(co.firstName, creds.firstNameText)
  await t
    .expect(co.firstName.getAttribute('value')).eql(creds.firstNameText)
  await t
    .click(co.continue)
  await t
    .expect(co.errorContainer.innerText).eql(co.lastNameReq)
  await t
    .typeText(co.lastName, creds.lastnameText)
  await t
    .expect(co.lastName.getAttribute('value')).eql(creds.lastnameText)
  await t
    .click(co.continue)
  await t
    .expect(co.errorContainer.innerText).eql(co.postCodeReq)
  await t
    .typeText(co.zipCode, creds.zipCodeText)
  await t
    .expect(co.zipCode.getAttribute('value')).eql(creds.zipCodeText)
  await t
    .click(co.continue)
  await t
    .expect(func.getPageUrl()).eql(co.checkOut2Url)
  await t
    .expect(page.pageTitle.innerText).eql(page.homeTitle)
})

test('Checkout Page 2 Element Validations', async t => {
  await addRandomProduct(t)
  await t
    .expect(func.getPageUrl()).eql(co.checkOutUrl)
  await t
    .typeText(co.firstName, creds.firstNameText)
    .typeText(co.lastName, creds.lastnameText)
    .typeText(co.zipCode, creds.zipCodeText)
  await t
    .click(co.continue)
  await t
    .expect(func.getPageUrl()).eql(co.checkOut2Url)
  await t
    .expect(co.coYourInfo.innerText).eql(co.coOverviewText)
    .expect(co.qtyHeader.innerText).eql(co.qtyText)
    .expect(co.descHeader.innerText).eql(co.descText)
    .expect(co.payInfoHeader.innerText).eql(co.payInfoText)
    .expect(co.summaryValHeader.innerText).contains(co.summaryValText)
    .expect(co.shipInfoHeader.innerText).eql(co.shipInfoText)
    .expect(co.shipSumHeader.innerText).eql(co.shipSumText)
    .expect(co.subtotalHeader.innerText).contains(co.subtotalText)
    .expect(co.taxHeader.innerText).contains(co.taxText)
    .expect(co.totalHeader.innerText).contains(co.totalText)
    .expect(co.cancelPage2.innerText).eql(co.cancelText)
    .expect(co.finishPage2.innerText).eql(co.finishText)

})

test('Complete Checkoput for Random Product', async t => {
  await addRandomProduct(t)
  await t
    .expect(func.getPageUrl()).eql(co.checkOutUrl)
  await t
    .typeText(co.firstName, creds.firstNameText)
    .typeText(co.lastName, creds.lastnameText)
    .typeText(co.zipCode, creds.zipCodeText)
  await t
    .click(co.continue)
  await t
    .expect(func.getPageUrl()).eql(co.checkOut2Url)
  await t
    .click(co.finishPage2)
  await t
    .expect(func.getPageUrl()).eql(co.checkOutCompleteUrl)
  await t
    .expect(co.finishHeader.innerText).eql(co.finishHeaderText)
    .expect(co.checkOutHeader.innerText).eql(co.checkOutHeaderText)
    .expect(co.checkOutCompleteHeader.innerText).eql(co.checkOutCompleteText)
  await t
    .expect(co.ponyExpress.getStyleProperty('background-image')).contains(co.ponyExpressImage)
})
