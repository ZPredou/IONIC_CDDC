import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';
import { DataProvider } from '../providers/data/data';

const config = {
  apiKey: "AIzaSyCg-j3__45KtdCGiYg04r9GcUmg5KpVrNA",
  authDomain: "dothingsonionic.firebaseapp.com",
  databaseURL: "https://dothingsonionic.firebaseio.com",
  projectId: "dothingsonionic",
  storageBucket: "dothingsonionic.appspot.com",
  messagingSenderId: "337865225097"
};

@Component({
  templateUrl: 'app.html',
  providers: [DataProvider],
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      splashScreen.hide();
      statusBar.hide();
    });

    firebase.initializeApp(config);
  }

}
