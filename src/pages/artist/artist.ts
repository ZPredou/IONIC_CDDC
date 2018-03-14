import { Component, Injectable, trigger, state, style, animate, transition, ElementRef } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { DetailPage } from '../detail/detail';
import { HttpClient } from '@angular/common/http';
import { DataProvider } from '../../providers/data/data';
import { DetailOeuvrePage } from '../detailOeuvre/detailOeuvre';
import * as firebase from 'firebase';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'page-artist',
  templateUrl: 'artist.html',
  providers:[Vibration],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: '0' })),
      state('*', style({ opacity: '1' })),
      transition('void <=> *', animate('250ms ease-in'))
    ])
  ]
})
@Injectable()
export class ArtistPage {
  public oeuvres:any[] = [];
  public isLoaded=false;
  actualOeuvres:any[] = [];
  loader;
  currentCount=0;
  defaultImage = './assets/imgs/placeholder-compressor.png';
  offset = 100;

  constructor(public nav: NavController, private http: HttpClient ,private elmRef: ElementRef,private _data: DataProvider ,public loading: LoadingController ,private vibration: Vibration) {
    this.nav = nav;
  }

  ionViewDidLoad(){
    let loader = this.loading.create({
      content: 'Récupération des artistes',
    });
    loader.present();
    let that = this;
    loader.present().then(() => {
      this._data.oeuvres.subscribe((data) => {
        that.oeuvres.push(data);
        if(this.oeuvres === that.oeuvres && loader){
          loader.dismiss();
        }
      });
    });
  }
  noneSelected(){
    return this.oeuvres.filter(oeuvre => oeuvre.isSelected).length===0;
  }

  onKey(e) {
        if (e.keyCode == 13) {
            let activeElement = <HTMLElement>document.activeElement;
            activeElement && activeElement.blur && activeElement.blur();
          }
  }
  private vibrate(){
    this.vibration.vibrate([30]);
  }

  private goToDetail(oeuvre){
    this.nav.push(DetailPage , {
      oeuvre: oeuvre
    });
  }
  public gotToDetailOeuvre(oeuvre){
    this.nav.push(DetailOeuvrePage , {
      oeuvre: oeuvre
    });
  }
}
