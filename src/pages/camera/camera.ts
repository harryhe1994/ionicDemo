import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from "@ionic-native/camera";

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  images: Array<{src: String}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
    this.images = [];
  }

  tackPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.images.unshift({
        src: base64Image
      })
    }, (err) => {

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

}
