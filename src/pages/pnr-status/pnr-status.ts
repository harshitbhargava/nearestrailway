import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the PnrStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pnr-status',
  templateUrl: 'pnr-status.html',
})
export class PnrStatusPage {
  PNR;
  PnrStatus:any;
  val = false;
  chp;    //Chart Prepared
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PnrStatusPage');
  }
  status(){
    console.log(this.PNR);
    this.http.get('https://api.railwayapi.com/v2/pnr-status/pnr/'+this.PNR+'/apikey/a9tws7rvfg/')
    .map(data => data.json()) // Instead of getting the _body manually, you can use the map method from RxJS
    .subscribe(data =>{
        console.log(data);
        this.PnrStatus = data;
        this.val = !this.val;
        if(this.PnrStatus.chart_prepared)
          this.chp = "Yes";
        else
          this.chp = "No";
     },error=>{
         console.log(error);// Error getting the data
     });
    
  }

}
