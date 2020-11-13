import {
  Selector
} from 'testcafe'

import Page from './page.js'

const page = new Page();

export default class CO {
  constructor() {

    this.pageUrls = [
      this.checkOutUrl = page.baseUrl + 'checkout-step-one.html',
      this.checkOut2Url = page.baseUrl + 'checkout-step-two.html',
      this.checkOutCompleteUrl = page.baseUrl + 'checkout-complete.html',
    ]

    this.pageContents = [
      this.coYourInfo = Selector('#contents_wrapper > div.subheader'),
      this.qtyHeader = Selector('.cart_quantity_label'),
      this.descHeader = Selector('.cart_desc_label'),
      this.payInfoHeader = Selector('#checkout_summary_container > div > div.summary_info > div:nth-child(1)'),
      this.summaryValHeader = Selector('#checkout_summary_container > div > div.summary_info > div:nth-child(2)'),
      this.shipInfoHeader = Selector('#checkout_summary_container > div > div.summary_info > div:nth-child(3)'),
      this.shipSumHeader = Selector('#checkout_summary_container > div > div.summary_info > div:nth-child(4)'),
      this.subtotalHeader = Selector('#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label'),
      this.taxHeader = Selector('#checkout_summary_container > div > div.summary_info > div.summary_tax_label'),
      this.totalHeader = Selector('#checkout_summary_container > div > div.summary_info > div.summary_total_label'),
      this.finishHeader = Selector('#contents_wrapper > div.subheader'),
      this.checkOutHeader = Selector('#checkout_complete_container > h2'),
      this.checkOutCompleteHeader = Selector('#checkout_complete_container > div.complete-text'),
      this.ponyExpress = Selector('#checkout_complete_container > div.pony_express')

        ]

    this.contentText = [
      this.coYourInfoText = 'Checkout: Your Information',
      this.coOverviewText = 'Checkout: Overview',
      this.qtyText = 'QTY',
      this.descText = 'DESCRIPTION',
      this.payInfoText = 'Payment Information:',
      this.summaryValText = 'SauceCard',
      this.shipInfoText = 'Shipping Information:',
      this.shipSumText = 'FREE PONY EXPRESS DELIVERY!',
      this.subtotalText = 'Item total:',
      this.taxText = 'Tax:',
      this.totalText = 'Total:',
      this.finishHeaderText = 'Finish',
      this.checkOutHeaderText = 'THANK YOU FOR YOUR ORDER',
      this.checkOutCompleteText = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
      this.ponyExpressImage = '/img/pony-express.png',

    ]

    this.buttons = [
      this.cancel = Selector('.checkout_buttons > a'),
      this.continue = Selector('.checkout_buttons > input'),
      ]

    this.buttonsPage2 = [
      this.cancelPage2 = Selector('#checkout_summary_container > div > div.summary_info > div.cart_footer > a.cart_cancel_link.btn_secondary'),
      this.finishPage2 = Selector('#checkout_summary_container > div > div.summary_info > div.cart_footer > a.btn_action.cart_button'),
]

    this.buttonsText = [
      this.cancelText = 'CANCEL',
      this.continueText = 'CONTINUE',
      this.finishText = 'FINISH'
    ]

    this.formFields = [
      this.firstName = Selector('#first-name'),
      this.lastName = Selector('#last-name'),
      this.zipCode = Selector('#postal-code'),
    ]

    this.formPlaceHolders = [
      this.firstNamePH = 'First Name',
      this.lastnamePH = 'Last Name',
      this.zipCodePH = 'Zip/Postal Code',
    ]

    this.errorMsgContainer = [
      this.errorContainer = Selector('#checkout_info_container > div > form > h3'),
      ]

    this.errorMessages = [
      this.firstNameReq = 'Error: First Name is required',
      this.lastNameReq = 'Error: Last Name is required',
      this.postCodeReq = 'Error: Postal Code is required',
    ]


  }
}
