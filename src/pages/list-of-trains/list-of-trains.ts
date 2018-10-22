import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//import { SeatAvailabilityPage } from '../seat-availability/seat-availability';
//import { ClassNamePage } from '../class-name/class-name';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
//import { QuotaPage } from '../quota/quota';
/**
 * Generated class for the ListOfTrainsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-of-trains',
  templateUrl: 'list-of-trains.html',
})
export class ListOfTrainsPage {
  fcode: string;
  tcode: string;
  className="SL"
  quotaName = "GN";
  quota: any = ['GN','HO','DF','PH','FT','LD','tq','PT','SS','HP','RE','GNRS','OS','YU','LB'];
  trainList: any;
  currDate = new Date();
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http: Http) {
      this.fcode = navParams.get('data1');
      this.tcode = navParams.get('data2');
      let d: any = this.currDate.getDate();
      if(d<10)
        d = '0' + d;
      let m: any = this.currDate.getMonth() + 1;
      if(m<10)
        m = '0' + m;
      let y: any = this.currDate.getFullYear();
      console.log(d+"/"+m+"/"+y);
      this.http.get('https://api.railwayapi.com/v2/between/source/'+this.fcode+'/dest/'+this.tcode+'/date/'+d+'-'+m+'-'+y+'/apikey/a9tws7rvfg/')
      .map(data => data.json()) // Instead of getting the _body manually, you can use the map method from RxJS
            .subscribe(data =>{
                console.log(data);
                this.trainList = data.trains;
             },error=>{
                 console.log(error);// Error getting the data
             });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListOfTrainsPage');
  }
 
  getRunsOn(day)
  {
    if(day.runs=="Y")
      return "green";
    else
      return "red";
  }
}
