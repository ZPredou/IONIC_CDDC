import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-school',
  templateUrl: 'school.html',
  providers: [[Vibration]]
})
export class SchoolPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration) {
  }
  ionViewDidEnter(){
    this.vibration.vibrate([30]);
  }
}
