import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-detailOeuvre',
  templateUrl: 'detailOeuvre.html',
  providers: [[Vibration]]
})
export class DetailOeuvrePage {
  title:string;
  description:string;
  image:string;
  author:string;
  authorBio:string;
  url:string;
  sound:string;
  soundMenu:boolean;
  sharingOptions: object = {
    message: '@fondationfrances',
    url: this.url,
    subject: 'Exposition du moment',
  };
  bornText;
  techText;
  workText;

  constructor(public nav: NavController, public navParams: NavParams, private iab: InAppBrowser, private vibration: Vibration, private socialSharing: SocialSharing) {
    this.navParams       = navParams;
    this.bornText        = this.navParams.get('oeuvre').bornText;
    this.techText        = this.navParams.get('oeuvre').techText;
    this.workText        = this.navParams.get('oeuvre').workText;
    this.authorBio       = this.navParams.get('oeuvre').authorBio;
    this.title           = this.navParams.get('oeuvre').title;
    this.description     = this.navParams.get('oeuvre').description;
    this.image           = this.navParams.get('oeuvre').image;
    this.author          = this.navParams.get('oeuvre').author;
    this.url             = this.navParams.get('oeuvre').url;
    this.sound           = this.navParams.get('oeuvre').sound;
  }
  private vibrate(){
    this.vibration.vibrate([30]);
  }
  playAudio(){
    if(this.soundMenu)
    {
      this.soundMenu=false;
    }
    else{
      this.soundMenu=true;
    }
  }
}
