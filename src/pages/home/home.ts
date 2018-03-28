import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [[ToastController, Vibration]]
})
export class HomePage{
  constructor(public navCtrl: NavController,private toastCtrl: ToastController, private vibration: Vibration) {
  }
  ionViewDidEnter(){
    this.vibration.vibrate([30]);
  }
}
