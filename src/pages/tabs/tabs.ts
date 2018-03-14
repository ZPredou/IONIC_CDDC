import { Component, ViewChild } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';
import { AboutPage } from '../about/about';
import { SchoolPage } from '../school/school';
import { HomePage } from '../home/home';
import { SuperTabsModule, SuperTabsController, SuperTabs} from 'ionic2-super-tabs';
import { Keyboard } from '@ionic-native/keyboard';
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html',
  providers: [[Vibration]]
})

export class TabsPage {

@ViewChild(SuperTabs) superTabs: SuperTabs;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = SchoolPage;

  constructor(private vibration: Vibration, private superTabsCtrl: SuperTabsController, public platform: Platform, public keyboard: Keyboard) {
  }

  private vibrate(){
    this.vibration.vibrate([30]);
  }
}
