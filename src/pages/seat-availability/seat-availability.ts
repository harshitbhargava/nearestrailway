import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { ClassNamePage } from '../class-name/class-name';
import { QuotaPage } from '../quota/quota';
import { TrainNoPage } from '../train-no/train-no';
import { StationcodePage } from '../stationcode/stationcode';
/**
 * Generated class for the SeatAvailabilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seat-availability',
  templateUrl: 'seat-availability.html',
})
export class SeatAvailabilityPage {
  tno: any;
  scode: any;
  tcode: any;
  className = "SL";
  quotaName = "GN";
  classes: any;
  quota: any = ['GN','HO','DF','PH','FT','LD','tq','PT','SS','HP','RE','GNRS','OS','YU','LB'];
  currDate: any = new Date();
  Dated: String;
  val = false;
  availability: any;
  cnt;
  arr: any= [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController, public http: Http) {
      let d: any = this.currDate.getDate();
      if(d<10)
        d = '0' + d;
      let m: any = this.currDate.getMonth() + 1;
      if(m<10)
        m = '0' + m;
      let y: any = this.currDate.getFullYear();
      this.currDate = d+"-"+m+"-"+y;
      this.cnt = 0;
      this.http.get('https://api.railwayapi.com/v2/between/source/JP/dest/ABR/date/'+this.currDate+'/apikey/a9tws7rvfg/')
      .map(data => data.json()) // Instead of getting the _body manually, you can use the map method from RxJS
            .subscribe(data =>{
                this.classes = data.trains[0].classes;
             },error=>{
                 console.log(error);// Error getting the data
             });
  }
  presentPopoverClass(myEvent, trainClass) {
    let popover = this.popoverCtrl.create(ClassNamePage, {
      tcl: trainClass
    });
    popover.onDidDismiss(data => {
      this.className = data;
    });
    popover.present({
      ev: myEvent
    });
  }
  presentPopoverQuota(myEvent, myQuota) {
    let popover = this.popoverCtrl.create(QuotaPage, {
      tq: myQuota
    });
    popover.onDidDismiss(data => {
      this.quotaName = data;
    });
    popover.present({
      ev: myEvent
    });
  }
  getSeatAvailability()
  {
    this.http.get('https://api.railwayapi.com/v2/check-seat/train/'+this.tno+'/source/'+this.scode+'/dest/'+this.tcode+'/date/'+this.Dated+'/pref/'+this.className+'/quota/'+this.quotaName+'/apikey/a9tws7rvfg/')
    .map(data => data.json()) // Instead of getting the _body manually, you can use the map method from RxJS
    .subscribe(data =>{
       this.availability = data.availability;
        this.val = !this.val;
        console.log(data);
     },error=>{
         console.log(error);// Error getting the data
     });
  }
  onkeydown1(event)
  {
    this.cnt++;
    this.arr.push(event.key);
    if(this.cnt==3)
    {console.log(event);
      this.cnt = 0;
      let x = this.arr[0]+this.arr[1]+this.arr[2]
    this.http.get('https://api.railwayapi.com/v2/suggest-train/train/'+x+'/apikey/a9tws7rvfg/')
    .map(data => data.json()) // Instead of getting the _body manually, you can use the map method from RxJS
    .subscribe(data =>{
      this.popoverCallTrain(data.trains, event);
     },error=>{
         console.log(error);// Error getting the data
     });
    }
  }
  popoverCallTrain(t, event)
  {
    this.arr = [];
    let popover = this.popoverCtrl.create(TrainNoPage, {
      tr: t
    });
    popover.onDidDismiss(data => {
      this.tno = data;
    });
    popover.present({
      ev: event
    })
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
      this.scode = data;
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
    console.log('ionViewDidLoad SeatAvailabilityPage');
  }

}
