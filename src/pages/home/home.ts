import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [[ToastController]]
})
export class HomePage{
  constructor(public navCtrl: NavController,private toastCtrl: ToastController) {
  }

}
