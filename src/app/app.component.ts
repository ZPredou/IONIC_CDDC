import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
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

  constructor(platform: Platform, statusBar: StatusBar, private _OneSignal: OneSignal, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might  need.
      splashScreen.hide();
      statusBar.hide();
      this._OneSignal.startInit('b532d545-0594-4d4c-9f34-cc6e3daf1056', '337865225097');
      this._OneSignal.inFocusDisplaying(this._OneSignal.OSInFocusDisplayOption.Notification);
      this._OneSignal.setSubscription(true);
      this._OneSignal.handleNotificationReceived().subscribe(() => {
        // handle received here how you wish.
      });
      this._OneSignal.handleNotificationOpened().subscribe(() => {
        // handle opened here how you wish.
      });
      this._OneSignal.endInit();
    });

    firebase.initializeApp(config);
  }

}
