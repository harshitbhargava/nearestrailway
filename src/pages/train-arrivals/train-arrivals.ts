import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { StationcodePage } from '../stationcode/stationcode';
/**
 * Generated class for the TrainArrivalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-train-arrivals',
  templateUrl: 'train-arrivals.html',
})
export class TrainArrivalsPage {
  code: any;
  val = false;
  arrivals:any;
  cnt;
  arr: any= [];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public popoverCtrl: PopoverController, public http: Http) {
      this.cnt=0;
  }
  onkeydown(event)
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
      console.log(data);
        this.popoverCallStation(data.stations, event);
     },error=>{
         console.log(error);// Error getting the data
     });
    }
  }
  popoverCallStation(t, event)
  {
    this.arr = [];
    let popover = this.popoverCtrl.create(StationcodePage, {
      tr: t
    });
    popover.onDidDismiss(data => {
      this.code = data;
    });
    popover.present({
      ev: event
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainArrivalsPage');
  }
  status()
  {
    this.http.get('https://api.railwayapi.com/v2/arrivals/station/'+this.code+'/hours/4/apikey/a9tws7rvfg/')
    .map(data => data.json()) // Instead of getting the _body manually, you can use the map method from RxJS
    .subscribe(data =>{
        console.log(data);
        this.arrivals = data.trains;
        this.val = !this.val;
     },error=>{
         console.log(error);// Error getting the data
     });
  }
}
