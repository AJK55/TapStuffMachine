import {
  Selector
} from 'testcafe'

export default class Inventory {
  constructor() {

    this.pageUrls = [
      this.inventoryUrl = 'https://www.saucedemo.com/inventory.html'
    ]


    this.menu = [
      this.menuButton = Selector('#menu_button_container > div > div:nth-child(3) > div > button'),
      this.menuClose = Selector('#menu_button_container > div > div.bm-menu-wrap > div:nth-child(2) > div > button'),
      this.menuAll = Selector('#inventory_sidebar_link'),
      this.menuAbout = Selector('#about_sidebar_link'),
      this.menuLogout = Selector('#logout_sidebar_link'),
      this.menuReset = Selector('#logout_sidebar_link'),
    ]

    this.cart = [
      this.cartButton = Selector('#shopping_cart_container > a > svg > path')
    ]

    this.sort = [
      this.sortSelect = Selector('#inventory_filter_container > select')
    ]

    this.sortItems = [
      this.sortAZ = Selector('#inventory_filter_container > select > option:nth-child(1)'),
      this.sortZA = Selector('#inventory_filter_container > select > option:nth-child(2)'),
      this.sortLOHI = Selector('#inventory_filter_container > select > option:nth-child(3)'),
      this.sortHILO = Selector('#inventory_filter_container > select > option:nth-child(4)')
    ]

    this.sortOptions = [
      this.az = 'az',
      this.za = 'za',
      this.lohi = 'lohi',
      this.hilo = 'hilo'
    ]

    this.inventoryImgs = [
      this.backpackImg = Selector("#inventory_container > div > div:nth-child(1) > div.inventory_item_img"),
      this.bikeLightImg = Selector("#inventory_container > div > div:nth-child(2) > div.inventory_item_img"),
      this.boltTshirtImg = Selector("#inventory_container > div > div:nth-child(3) > div.inventory_item_img"),
      this.fleeceJacketImg = Selector("#inventory_container > div > div:nth-child(4) > div.inventory_item_img"),
      this.onesieImg = Selector("#inventory_container > div > div:nth-child(5) > div.inventory_item_img"),
      this.redTshirtImg = Selector("#inventory_container > div > div:nth-child(6) > div.inventory_item_img"),
    ]

    this.inventoryItemImgs = [
      this.backpackItemImg = Selector('#item_4_img_link > img'),
      this.bikeLightItemImg = Selector('#item_0_img_link > img'),
      this.boltTshirtItemImg = Selector('#item_1_img_link > img'),
      this.fleeceJacketItemImg = Selector('#item_5_img_link > img'),
      this.onesieItemImg = Selector('#item_2_img_link > img'),
      this.redTshirtItemImg = Selector('#item_3_img_link > img'),
    ]

    this.inventoryItemImgsSrc = [
      this.backpackItemImgSrc = './img/sauce-backpack-1200x1500.jpg',
      this.bikeLightItemImgSrc = './img/bike-light-1200x1500.jpg',
      this.boltTshirtItemImgSrc = './img/bolt-shirt-1200x1500.jpg',
      this.fleeceJacketItemImgSrc = './img/sauce-pullover-1200x1500.jpg',
      this.onesieItemImgSrc = './img/red-onesie-1200x1500.jpg',
      this.redTshirtItemImgSrc = './img/red-tatt-1200x1500.jpg',
    ]

    this.inventoryLinks = [
      this.backpackLink = Selector("#item_4_title_link > div"),
      this.bikeLightLink = Selector("#item_0_title_link > div"),
      this.boltTshirtLink = Selector("#item_1_title_link > div"),
      this.fleeceJacketLink = Selector("#item_5_title_link > div"),
      this.onesieLink = Selector("#item_2_title_link > div"),
      this.redTshirtLink = Selector("#item_3_title_link > div"),
    ]

    this.inventoryPriceLocator = [
      this.backpackPriceLocator = Selector('#inventory_container > div > div:nth-child(1) > div.pricebar > div'),
      this.bikeLightPriceLocator = Selector('#inventory_container > div > div:nth-child(2) > div.pricebar > div'),
      this.boltTshirtPriceLocator = Selector('#inventory_container > div > div:nth-child(3) > div.pricebar > div'),
      this.fleeceJacketPriceLocator = Selector('#inventory_container > div > div:nth-child(4) > div.pricebar > div'),
      this.onsiePriceLocator = Selector('#inventory_container > div > div:nth-child(5) > div.pricebar > div'),
      this.redTshirtPriceLocator = Selector('#inventory_container > div > div:nth-child(6) > div.pricebar > div'),
]

    this.inventoryPrices = [
      this.backpackPrice = '$29.99',
      this.bikeLightPrice = '$9.99',
      this.boltTshirtPrice = '$15.99',
      this.fleeceJacketPrice = '$49.99',
      this.onesiePrice = '$7.99',
      this.redTshirtPrice = '$15.99',
    ]

    this.productPageUrls = [
      this.backpackUrl = 'https://www.saucedemo.com/inventory-item.html?id=4',
      this.bikeLightUrl = 'https://www.saucedemo.com/inventory-item.html?id=0',
      this.boltTshirtUrl = 'https://www.saucedemo.com/inventory-item.html?id=1',
      this.fleeceJacketUrl = 'https://www.saucedemo.com/inventory-item.html?id=5',
      this.onesieUrl = 'https://www.saucedemo.com/inventory-item.html?id=2',
      this.redTshirtUrl = 'https://www.saucedemo.com/inventory-item.html?id=3',
    ]

    this.productPagePrice = [
      this.prodDetailPrice = Selector('#inventory_item_container > div > div > div > div.inventory_details_price'),
    ]

    this.productPageBackButton = [
      this.prodPageBack = Selector("#inventory_item_container > div > button"),
    ]

    this.inventoryAddCart = [
      this.backpackAdd = Selector("#inventory_container > div > div:nth-child(1) > div.pricebar > button"),
      this.bikeLightAdd = Selector("#inventory_container > div > div:nth-child(2) > div.pricebar > button"),
      this.boltTshirtAdd = Selector("#inventory_container > div > div:nth-child(3) > div.pricebar > button"),
      this.fleeceJacketAdd = Selector("#inventory_container > div > div:nth-child(4) > div.pricebar > button"),
      this.onesieAdd = Selector("#inventory_container > div > div:nth-child(5) > div.pricebar > button"),
      this.redTshirtAdd = Selector("#inventory_container > div > div:nth-child(6) > div.pricebar > button"),
    ]

    this.addCartButtonText = [
      this.addToCartText = 'ADD TO CART',
      this.removeText = 'REMOVE',
    ]

    this.cartBadgeCounter = [
      this.cartCounter = Selector('#shopping_cart_container > a > span')
    ]

    this.footers = [
      this.twitter = Selector('li.social_twitter'),
      this.facebook = Selector('li.social_facebook'),
      this.linkedin = Selector('li.social_linkedin'),
      this.copy = Selector('body > footer > div.footer_copy'),
      this.footerRobot = Selector('body > footer > div.footer_robot'),
    ]

    this.footerContent = [
      this.twitterImg = '/img/twitter.png',
      this.facebookImg = '/img/facebook.png',
      this.linkedinImg = '/img/linkedIn.png',
      this.footerRobotImg = '/img/SwagBot_Footer_graphic.png',
      this.copyTxt = '© 2019 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy',
    ]




  }
}
