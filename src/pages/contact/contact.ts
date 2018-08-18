import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  Friends: Array<{
    header: String,
    userName: String
  }>;

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.Friends = [];
  }

  ionViewDidLoad() {
    this.http.get('https://randomuser.me/api/?results=20')
      .subscribe(data => {
        let listData = data['results'];
        listData.forEach(rec => {
          this.Friends.push({header: rec.picture.medium, userName: rec.login.username});
        });
      });
  }
}
