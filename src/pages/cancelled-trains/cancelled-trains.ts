import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the CancelledTrainsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cancelled-trains',
  templateUrl: 'cancelled-trains.html',
})
export class CancelledTrainsPage {
  currDate:any  = new Date();
  cancelledTrains: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    let d: any = this.currDate.getDate();
      if(d<10)
        d = '0' + d;
      let m: any = this.currDate.getMonth() + 1;
      if(m<10)
        m = '0' + m;
      let y: any = this.currDate.getFullYear();
      this.currDate = d+"-"+m+"-"+y;
      this.http.get('https://api.railwayapi.com/v2/cancelled/date/'+this.currDate+'/apikey/a9tws7rvfg/')
      .map(data => data.json()) // Instead of getting the _body manually, you can use the map method from RxJS
    .subscribe(data =>{
        console.log(data);
        this.cancelledTrains = data.trains;
     },error=>{
         console.log(error);// Error getting the data
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancelledTrainsPage');
  }

}
