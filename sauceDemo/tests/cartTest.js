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

import Page from './shared/page.js'
//import Creds from './shared/creds.js'
import Functions from './shared/functions.js'
import Inventory from './shared/inventory.js'
import Cart from './shared/cart.js'

const page = new Page();
//const creds = new Creds();
const func = new Functions();
const inv = new Inventory();
const cart = new Cart();

fixture `Testing of Cart Page Functionality`
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

test('Login and Go to Cart Page', async t => {
  await t
    .expect(func.getPageUrl()).eql(inv.inventoryUrl)
  await t
    .expect(page.pageTitle.innerText).eql(page.homeTitle)
  await goToCartPg(t)

});

test('Footer Socials Hover Loop Cart Page', async t => {
  //beforeEach
  await goToCartPg(t)

  var i;
  for (i = 0; i < inv.footers.length; i++) {
    await t
      .hover(inv.footers[i])
  }
  //afterEach
});


test('Hover Page Contents Sections', async t => {

  await goToCartPg(t)

  var i;
  for (i = 0; i < cart.pageContents.length; i++) {
    await t
      .hover(cart.pageContents[i])
  }
});

test('Validate Contents Text', async t => {
  await goToCartPg(t)
  await t
    .expect(cart.yourCart.innerText).eql(cart.yourCartText)
    .expect(cart.qtyCart.innerText).eql(cart.qtyText)
    .expect(cart.description.innerText).eql(cart.descriptionText)
});


test('Continue Shopping Button Back to Inventory Page', async t => {
  await goToCartPg(t)
  await t
    .expect(cart.cShopButton.innerText).eql(cart.cShopText)
  await t
    .click(cart.cShopButton)
    .expect(func.getPageUrl()).eql(inv.inventoryUrl)

});

test('Hover over Checkout Button', async t => {
  await goToCartPg(t)
  await t
    .expect(cart.checkoutButton.innerText).eql(cart.checkoutText)
  await t
    .hover(cart.checkoutButton)
});

test('Add One Backpack Item to Cart', async t => {
  await t
    .expect(inv.cartCounter.exists).notOk();
  //couinter is hidden if no items added to cart
  await t
    .expect(inv.backpackAdd.innerText).eql(inv.addToCartText)
  await t
    .click(inv.backpackAdd)
  await t
    .expect(inv.backpackAdd.innerText).eql(inv.removeText)
  await t
    .hover(inv.cartCounter)
  await t
    .expect(inv.cartCounter.exists).ok();
  await t
    .expect(inv.cartCounter.innerText).eql('1')
  await t
    .click(inv.cartButton)
  await t
    .expect(func.getPageUrl()).eql(cart.cartUrl)
  await func.goBack()
  await t
    .click(inv.cartCounter)
  await t
    .expect(func.getPageUrl()).eql(cart.cartUrl)
  await t
    .click(cart.backPackRemoveButton)
  await t
    .expect(inv.cartCounter.exists).notOk();
});

test('Loop Through Adds, Counting', async t => {
  await t
    .expect(inv.cartCounter.exists).notOk()

  var i;
  for (i = 0; i < inv.inventoryAddCart.length; i++) {
    await t
      .click(inv.inventoryAddCart[i])
    await t
      .expect(inv.cartCounter.exists).ok();
    await t
      .expect(inv.cartCounter.innerText).eql((i + 1).toString())
  }

});

test('Loop Through Adds, Remove From Cart', async t => {
  await t
    .expect(inv.cartCounter.exists).notOk()

  var i;
  for (i = 0; i < inv.inventoryAddCart.length; i++) {
    await t
      .click(inv.inventoryAddCart[i])
    await t
      .click(inv.cartButton)
    await t
      .expect(inv.cartCounter.exists).ok();
    await t
      .expect(inv.cartCounter.innerText).eql((i + 1).toString())
    await t
      .click(cart.cShopButton)
  }

  await t
    .click(inv.cartButton)

  var r;
  for (r = 0; r < cart.cartRemoveButtons.length; r++) {
    await t
      .click(cart.cartRemoveButtons[r])
  }

  await t
    .expect(inv.cartCounter.exists).notOk()

  await t
    .click(cart.cShopButton)
})
