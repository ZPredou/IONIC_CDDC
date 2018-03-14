import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule }      from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataProvider } from '../providers/data/data';
import * as firebase from 'firebase';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailPage } from '../pages/detail/detail';
import { SchoolPage } from '../pages/school/school';
import { PlansPage } from '../pages/plans/plans';
import { ArtistPage } from '../pages/artist/artist';
import { DetailOeuvrePage } from '../pages/detailOeuvre/detailOeuvre';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Vibration } from '@ionic-native/vibration';
import { OneSignal } from '@ionic-native/onesignal';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HeaderColor } from '@ionic-native/header-color';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { Keyboard } from '@ionic-native/keyboard';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailPage,
    SchoolPage,
    PlansPage,
    FilterPipe,
    ArtistPage,
    DetailOeuvrePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    SuperTabsModule.forRoot(),
    SuperTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    LazyLoadImageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailPage,
    SchoolPage,
    ArtistPage,
    PlansPage,
    DetailOeuvrePage

  ],
  providers: [
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OneSignal,
    HeaderColor,
    InAppBrowser,
    SocialSharing,
    HttpClient,
    HttpClientModule,
    Keyboard,
    DataProvider
  ]
})
export class AppModule {}
