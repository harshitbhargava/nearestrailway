import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { TrainNoPage } from '../train-no/train-no';
/**
/**
 * Generated class for the TrainSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-train-schedule',
  templateUrl: 'train-schedule.html',
})
export class TrainSchedulePage {
  train: any;
  val= false;
  trainstatus: any;
  currDate:any  = new Date();
  cnt;
  arr: any= [];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http: Http, public popoverCtrl: PopoverController) {
      let d: any = this.currDate.getDate();
      if(d<10)
        d = '0' + d;
      let m: any = this.currDate.getMonth() + 1;
      if(m<10)
        m = '0' + m;
      let y: any = this.currDate.getFullYear();
      this.currDate = d+"-"+m+"-"+y;
      this.cnt = 0;
  }
  getSchedule()
  {
    this.http.get('https://api.railwayapi.com/v2/live/train/'+this.train+'/date/'+this.currDate+'/apikey/a9tws7rvfg/')
    .map(data => data.json()) // Instead of getting the _body manually, you can use the map method from RxJS
    .subscribe(data =>{
        console.log(data);
        this.trainstatus = data;
        this.val = !this.val;
     },error=>{
         console.log(error);// Error getting the data
     });
  }
  onkeydown(event)
  {
    this.cnt++;
    this.arr.push(event.key);
    if(this.cnt==3)
    {console.log(event);
      let x = this.arr[0]+this.arr[1]+this.arr[2]
    this.http.get('https://api.railwayapi.com/v2/suggest-train/train/'+x+'/apikey/a9tws7rvfg/')
    .map(data => data.json()) // Instead of getting the _body manually, you can use the map method from RxJS
    .subscribe(data =>{
      this.popoverCall(data.trains, event);
     },error=>{
         console.log(error);// Error getting the data
     });
    }
  }
  popoverCall(t, event)
  {
    let popover = this.popoverCtrl.create(TrainNoPage, {
      tr: t
    });
    popover.onDidDismiss(data => {
      this.train = data;
    });
    popover.present({
      ev: event
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainSchedulePage');
  }

}
