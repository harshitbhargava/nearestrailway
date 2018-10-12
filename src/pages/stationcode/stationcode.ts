import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StationcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stationcode',
  templateUrl: 'stationcode.html',
})
export class StationcodePage {
  searchQuery: string = '';
  station: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.station = navParams.get('tr');
    console.log(this.station);
  }
  close(item)
  {
    this.viewCtrl.dismiss(item);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StationcodePage');
  }

}
