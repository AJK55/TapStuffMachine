import {
  Selector
} from 'testcafe';
import {
  clickLogin
} from './shared/actions.js'
import {
  standardLogin
} from './shared/actions.js'
import {
  loopsortItems
} from './shared/actions.js'

import Page from './shared/page.js'
import Creds from './shared/creds.js'
import Functions from './shared/functions.js'
import Inventory from './shared/inventory.js'

const page = new Page();
const creds = new Creds();
const func = new Functions();
const inv = new Inventory();

fixture `Standard User Tests`
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


test('Standard User Login/Logout', async t => {
  //beforeEach
  await t
    .expect(page.pageTitle.innerText).eql(page.homeTitle)
  await t
    .expect(func.getPageUrl()).eql(inv.inventoryUrl)
  await t
    .click(inv.menuButton)
  await t
    .click(inv.menuClose)
  //afterEach
})


test('Standard User Sort Products Dropdown', async t => {
  //beforeEach
  await t
    .expect(page.pageTitle.innerText).eql(page.homeTitle)
  await t
    .expect(func.getPageUrl()).eql(inv.inventoryUrl)
  await t
    .click(inv.sortSelect)
  await t
    .click(inv.sortItems[0])
  await t
    .expect(inv.sortSelect.value).eql(inv.sortOptions[0]);
  await t
    .click(inv.sortSelect)
  await t
    .click(inv.sortItems[3])
  await t
    .expect(inv.sortSelect.value).eql(inv.sortOptions[3]);
  await t
    .click(inv.sortSelect)
  await t
    .click(inv.sortItems[0])
  await t
    .expect(inv.sortSelect.value).eql(inv.sortOptions[0]);
  await t
    .click(inv.sortSelect)
  await t
    .click(inv.sortItems[1])
  await t
    .expect(inv.sortSelect.value).eql(inv.sortOptions[1]);
  await t
    .click(inv.sortSelect)
  await t
    .click(inv.sortItems[2])
  await t
    .expect(inv.sortSelect.value).eql(inv.sortOptions[2]);
  //afterEach
});

test('Loop Sort Items', async t => {
  //beforeEach
  await loopsortItems(t)
  //afterEach
})

test('Random Sort Items Select', async t => {
  //beforeEach
  await t
    .click(inv.sortSelect)
  await t
    .click(inv.sortItems[Math.floor(Math.random() * inv.sortItems.length)])
  //afterEach
})

test('Footer Socials Hover Loop', async t => {
  //beforeEach

  var i;
  for (i = 0; i < inv.footers.length; i++) {
    await t
      .hover(inv.footers[i])
  }
  //afterEach
})

test('Footer Image/Text Validation', async t => {
  await t
    .expect(inv.twitter.getStyleProperty('background-image')).contains(inv.twitterImg)
    .expect(inv.facebook.getStyleProperty('background-image')).contains(inv.facebookImg)
    .expect(inv.linkedin.getStyleProperty('background-image')).contains(inv.linkedinImg)
    .expect(inv.footerRobot.getStyleProperty('background-image')).contains(inv.footerRobotImg)
    .expect(inv.copy.innerText).eql(inv.copyTxt)
})
