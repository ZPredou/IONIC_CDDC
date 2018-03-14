import { Component , OnInit, Injectable} from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DetailPage } from '../detail/detail';
import { ContactPage } from '../contact/contact';
import { ArtistPage } from '../artist/artist';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [ BarcodeScanner ]
})
@Injectable()
export class AboutPage {
  results: {};
  oeuvres;

  constructor(public nav: NavController, public barcode: BarcodeScanner, private http: HttpClient) {
    this.nav = nav;

  }
  public goToOeuvres(){
    this.nav.push(ContactPage);
  }
  public goToArtists(){
    this.nav.push(ArtistPage);
  }

}
