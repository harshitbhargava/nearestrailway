import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeatMap1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seat-map1',
  templateUrl: 'seat-map1.html',
})
export class SeatMap1Page {
  selectedSeat;
  seatpic;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedSeat=this.navParams.get('data1');
   switch(this.selectedSeat){
    
     case "Second AC":
     this.seatpic="./assets/imgs/2AC_1.jpg";
     break;
     case "Third AC":
     this.seatpic="./assets/imgs/3AC.jpg";
     break;
     case "First AC":
     this.seatpic="./assets/imgs/1st-Ac-Type-1.jpg";
     break;
     case "Second Seating":
     this.seatpic="./assets/imgs/IR-2nd-Seating.jpg";
     break;
     case "Garib Rath":
     this.seatpic="./assets/imgs/IR-Garibrath-Sleeper.jpg";
     break;
     case "CC Shatabdi":
     this.seatpic="./assets/imgs/IR-Shatabdi-Chaircar-New.jpg";
     break;
     case "EC Shatabdi":
     this.seatpic="./assets/imgs/IR-Shatabdi-Executive.jpg";
     break;
     case "Sleeper":
     this.seatpic="./assets/imgs/Sleeper.jpg";
          break;
   }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SeatMap1Page');
  }

}
