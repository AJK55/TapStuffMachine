import {
  Selector
} from 'testcafe'
import {
  ClientFunction
} from 'testcafe';


export default class Functions {
  constructor() {

    this.getPageUrl = ClientFunction(() => window.location.href);

    this.goBack = ClientFunction(() => window.history.back());
    //await func.goBack();

    this.randomCreds = function makeid(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }



  }
}
