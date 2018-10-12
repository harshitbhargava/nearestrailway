import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListOfTrainsPage } from '../list-of-trains/list-of-trains';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
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
  FromStation = "";
  ToStation = "";
  fcode: string;    //FromStation code
  tcode: string;    //ToStation code
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchBetStationsPage');
  }
  getTrains()
  {
    console.log(this.FromStation);
    console.log(this.ToStation);
  
    this.navCtrl.push(ListOfTrainsPage, {
      data1: this.FromStation,
      data2: this.ToStation,
      data3: this.fcode,
      data4: this.tcode
    });
  }
  ok1()
  {
    this.http.get('https://api.railwayapi.com/v2/name-to-code/station/'+this.FromStation+'/apikey/a9tws7rvfg/')
    .map(data => data.json()) // Instead of getting the _body manually, you can use the map method from RxJS
            .subscribe(data =>{
                let obj = data.stations;
                for (let item in data.stations){
                  if( obj[item].name == this.FromStation.toUpperCase())
                  {  this.fcode = obj[item].code; break; }
                }
             },error=>{
                 console.log(error);// Error getting the data
             });
  }
  ok2()
  {
    this.http.get('https://api.railwayapi.com/v2/name-to-code/station/'+this.ToStation+'/apikey/a9tws7rvfg/')
    .map(data => data.json()) // Instead of getting the _body manually, you can use the map method from RxJS
            .subscribe(data =>{
                  let obj = data.stations;
                  for (let item in data.stations){
                    if( obj[item].name == this.ToStation.toUpperCase())
                    {  this.tcode = obj[item].code; break; }
                  }
             },error=>{
                   console.log(error);// Error getting the data
             });
  }
}
