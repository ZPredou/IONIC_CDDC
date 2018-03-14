import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'page-school',
  templateUrl: 'school.html',
})
export class SchoolPage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit(){
  }
  slideChanged() {
  let currentIndex = this.slides.getActiveIndex();
    if(currentIndex==3){
      this.slides.stopAutoplay();
    }
  }
}
