import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeatMap1Page } from '../seat-map1/seat-map1';


/**
 * Generated class for the SeatMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seat-map',
  templateUrl: 'seat-map.html',
})
export class SeatMapPage {
  items = [
    'Sleeper',
    'Garib Rath',
    'Third AC',
    'Second AC',
    'First AC',
    'EC Shatabdi',
    'CC Shatabdi',
    'Second Seating',
   
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeatMapPage');
  }
openSeatMap(item){
  this.navCtrl.push(SeatMap1Page,{
    data1:item
  });
}}