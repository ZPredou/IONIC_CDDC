import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class DataProvider {
  private _oeuvres$: any;
  public _db: any;
  private _oeuvresRef: any;

  constructor() {
    this._db = firebase.database().ref('/');
    this._oeuvresRef = firebase.database().ref('oeuvres');
    this._oeuvresRef.on('child_added', this.handleData, this);
    this._oeuvres$ = new ReplaySubject();
  }
  get oeuvres()
  {
    return this._oeuvres$;
  }
  handleData(snap) {
    try {
      // Tell our observer we have new data
      this._oeuvres$.next(snap.val());
    }
    catch (error) {
      console.log('catching', error);
    }
  }

}
