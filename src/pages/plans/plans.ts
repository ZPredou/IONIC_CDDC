import { Component, OnInit, Injectable, trigger, state, style, animate, transition  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { DetailPage } from '../detail/detail';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-plans',
  templateUrl: 'plans.html',
  providers: [[Vibration]]
})
@Injectable()
export class PlansPage{
  oeuvres:any[] = [];
  @ViewChild(Slides) slides: Slides;
  constructor(public nav: NavController, public navParams: NavParams ,private vibration: Vibration ,private http: HttpClient) {
    this.nav = nav;
  }
  goToSlide() {
  this.slides.slideTo(2, 500);
}
}
