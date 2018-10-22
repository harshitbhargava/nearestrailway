import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the NearestStationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nearest-station',
  templateUrl: 'nearest-station.html',
})
export class NearestStationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('https://maps.googleapis.com/maps/api/place/textsearch/json?location=26.8215623,75.8666092&type=train_station&key=AIzaSyChtIus3arMIhw9IROgfuFiWghMaCIwLL4')
    .map(data => data.json()) // Instead of getting the _body manually, you can use the map method from RxJS
            .subscribe(data =>{
                //console.log(data);
                console.log(data.results[0].geometry.location);
             },error=>{
                 console.log(error);// Error getting the data
             });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearestStationPage');
  }

}
