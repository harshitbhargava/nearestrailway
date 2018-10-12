import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { ClassNamePage } from '../class-name/class-name';
import { QuotaPage } from '../quota/quota';
/**
 * Generated class for the FareEnquiryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fare-enquiry',
  templateUrl: 'fare-enquiry.html',
})
export class FareEnquiryPage {
  tno: any;
  scode: any;
  tcode: any;
  className = "SL";
  quotaName = "GN";
  age: any;
  classes: any;
  quota: any = ['GN','HO','DF','PH','FT','LD','tq','PT','SS','HP','RE','GNRS','OS','YU','LB'];
  currDate: any = new Date();
  val = false;
  fare: any;
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
  getFare()
  {
    this.http.get('https://api.railwayapi.com/v2/fare/train/'+this.tno+'/source/'+this.scode+'/dest/'+this.tcode+'/age/'+this.age+'/pref/'+this.className+'/quota/'+this.quotaName+'/date/'+this.currDate+'/apikey/2aqed8xbr5/')
    .map(data => data.json()) // Instead of getting the _body manually, you can use the map method from RxJS
    .subscribe(data =>{
        console.log(data);
        this.val = !this.val;
        this.fare = data.fare;
     },error=>{
         console.log(error);// Error getting the data
     });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FareEnquiryPage');
  }

}
