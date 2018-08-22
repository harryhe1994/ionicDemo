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
  Letter: Array<{item: String}>;

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.Friends = [];
    this.Letter = [];
  }


  ionViewDidLoad() {
    this.http.get('https://randomuser.me/api/?results=20')
      .subscribe(data => {
        let listData = data['results'];
        listData.forEach(rec => {
          this.Friends.push({header: rec.picture.medium, userName: rec.login.username});
        });
      });
    this.Letter.push({item: '↑'});
    this.Letter.push({item: '☆'});
    for(let i = 65; i < 91; i++){
      this.Letter.push({item: String.fromCharCode(i)});
    }
    this.Letter.push({item: '#'});
  }
}
