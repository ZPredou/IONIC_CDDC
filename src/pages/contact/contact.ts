import { Component ,OnInit , Injectable, trigger, state, style, animate, transition, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { DetailPage } from '../detail/detail';
import { HttpClient } from '@angular/common/http';
import { DataProvider } from '../../providers/data/data';
import * as firebase from 'firebase';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [[Vibration]],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: '0' })),
      state('*', style({ opacity: '1' })),
      transition('void <=> *', animate('250ms ease-in'))
    ])
  ],
})
@Injectable()
export class ContactPage{
  myScrollContainer;
  public oeuvres:any[] = [];
  public isLoaded=false;
  searchText='';
  actualOeuvres:any[] = [];
  loader;
  defaultImage = './assets/imgs/placeholder-compressor.png';
  offset = 100;

  constructor(public nav: NavController ,private elmRef: ElementRef, private vibration: Vibration ,private http: HttpClient ,private _data: DataProvider ,public loading: LoadingController) {
    this.nav = nav;
  }
  ngOnInit() {

  }
  ionViewDidLoad(){
    let loader = this.loading.create({
      content: 'Récupération des oeuvres',
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

  private vibrate(){
    this.vibration.vibrate([30]);
  }

  private goToDetail(oeuvre){
    this.nav.push(DetailPage , {
      oeuvre: oeuvre
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
}
