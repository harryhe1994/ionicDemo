import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Message: Array<{
    header: String,
    userName: String,
    content: String
  }>;

  constructor(public navCtrl: NavController) {
    this.Message = [];
    this.Message.push({
      header: 'https://avatars3.githubusercontent.com/u/33508394?s=400&u=108ffd636ad52595d6fa73db21fce6cb40b48057&v=4',
      userName: 'Harry He',
      content: 'hello'
    }, {
      header: 'https://avatars3.githubusercontent.com/u/33508394?s=400&u=108ffd636ad52595d6fa73db21fce6cb40b48057&v=4',
      userName: 'HAHA',
      content: 'hello'
    });
  }

}
