import { Component , OnInit, Injectable} from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { ContactPage } from '../contact/contact';
import { ArtistPage } from '../artist/artist';
import { HttpClient } from '@angular/common/http';
import { Vibration } from '@ionic-native/vibration';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [ Vibration ]
})
@Injectable()
export class AboutPage {
  results: {};
  oeuvres;

  constructor(public nav: NavController, private http: HttpClient, private vibration: Vibration) {
    this.nav = nav;

  }
  ionViewDidEnter(){
    this.vibration.vibrate([30]);
  }
  public goToOeuvres(x){
    this.nav.push(ContactPage, {
      categ: x
    });
  }
  public goToArtists(){
    this.nav.push(ArtistPage);
  }

}
