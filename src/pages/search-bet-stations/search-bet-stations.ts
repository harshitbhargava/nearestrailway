import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController, NavParams } from 'ionic-angular';
import { ListOfTrainsPage } from '../list-of-trains/list-of-trains';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { StationcodePage } from '../stationcode/stationcode';
/**
 * Generated class for the SearchBetStationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-bet-stations',
  templateUrl: 'search-bet-stations.html',
})
export class SearchBetStationsPage {
  fcode: string;    //FromStation code
  tcode: string;    //ToStation code
  cnt;
  arr: any= [];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public popoverCtrl: PopoverController, public http: Http) {
      this.cnt = 0;
  }
  onkeydown2(event, flag)
  {
    this.cnt++;
    this.arr.push(event.key);
    if(this.cnt==3)
    {console.log(event);
      this.cnt = 0;
      let x = this.arr[0]+this.arr[1]+this.arr[2]
    this.http.get('https://api.railwayapi.com/v2/suggest-station/name/'+x+'/apikey/a9tws7rvfg/')
    .map(data => data.json()) // Instead of getting the _body manually, you can use the map method from RxJS
    .subscribe(data =>{
      if(flag == 1)
        this.popoverCallSrcStation(data.stations, event);
      else
        this.popoverCallDestStation(data.stations, event);
     },error=>{
         console.log(error);// Error getting the data
     });
    }
  }
  popoverCallSrcStation(t, event)
  {
    this.arr = [];
    let popover = this.popoverCtrl.create(StationcodePage, {
      tr: t
    });
    popover.onDidDismiss(data => {
      this.fcode = data;
    });
    popover.present({
      ev: event
    })
  }
  popoverCallDestStation(t, event)
  {
    this.arr = [];
    let popover = this.popoverCtrl.create(StationcodePage, {
      tr: t
    });
    popover.onDidDismiss(data => {
      this.tcode = data;
    });
    popover.present({
      ev: event
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchBetStationsPage');
  }
  getTrains()
  {
  
    this.navCtrl.push(ListOfTrainsPage, {
      data1: this.fcode,
      data2: this.tcode
    });
  }
}
