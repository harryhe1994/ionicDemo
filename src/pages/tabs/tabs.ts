import { Component } from '@angular/core';

import {SettingPage} from "../setting/setting";
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CameraPage } from "../camera/camera";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];

  constructor() {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: '微信',
        tabIcon: 'home'
      },
      {
        root: ContactPage,
        tabTitle: '通讯录',
        tabIcon: 'notifications'
      },
      {
        root: SettingPage,
        tabTitle: '我',
        tabIcon: 'person'
      },
      {
        root: CameraPage,
        tabTitle: '照相机',
        tabIcon: 'camera'
      }
    ];
  }
}
