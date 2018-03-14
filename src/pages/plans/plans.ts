import { Component, OnInit, Injectable, trigger, state, style, animate, transition  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { DetailPage } from '../detail/detail';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'page-plans',
  templateUrl: 'plans.html',
  styles:[
    `
    .item-block{
      min-height: 0;
      transition: 0.09s all linear;
    }
    `
    ],
    animations: [
      trigger('expand', [
        state('true', style({ height: '45px' })),
        state('false', style({ height: '0'})),
        transition('void => *', animate('0s')),
        transition('* <=> *', animate('250ms ease-in-out'))
      ])
    ],
  providers: [[Vibration]]
})
@Injectable()
export class PlansPage implements OnInit{
  oeuvres:any[] = [];
  public groups = [];

  constructor(public nav: NavController, public navParams: NavParams ,private vibration: Vibration ,private http: HttpClient) {
    this.nav = nav;
  //   for(let i = 0; i < 4; i++){
  //   this.groups[i]={
  //     active: false,
  //     id: i,
  //     items: []
  //   }
  //   for (var j=0; j<3; j++) {
  //     this.groups[i].items.push(i + '-' + j);
  //   }
  // }
  }
  // toggleGroup(group){
  //   group.active = !group.active
  //   console.log(group)
  // }
  ngOnInit(){
      this.http.get('./assets/oeuvres.json').subscribe(data => {
        this.oeuvres = data['oeuvres'];
    });
  }
  private vibrate(){
    this.vibration.vibrate([30]);
  }
  private goToDetail(oeuvre){
    this.nav.push(DetailPage , {
      oeuvre: oeuvre
    });
  }
}
