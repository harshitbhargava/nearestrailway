import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
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
