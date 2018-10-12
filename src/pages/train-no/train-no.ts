import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrainNoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-train-no',
  templateUrl: 'train-no.html',
})
export class TrainNoPage {

  searchQuery: string = '';
  train: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.train = navParams.get('tr');
    console.log(this.train); 
  }
  close(item)
  {
    this.viewCtrl.dismiss(item);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainNoPage');
  }

}
