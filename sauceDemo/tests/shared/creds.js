import {
  Selector
} from 'testcafe';

export default class Creds {
  constructor() {

    this.userNames = [
      this.standard = 'standard_user',
      this.lockedOut = 'locked_out_user',
      this.problem = 'problem_user',
      this.perfGlitch = 'performance_glitch_user',
    ];

    this.passWords = [
      this.passWordAll = 'secret_sauce',
    ]

    this.checkoutFieldsTest = [
      this.firstNameText = 'Firstname',
      this.lastnameText = 'Lastname',
      this.zipCodeText = '55555',
    ]
  }
}
