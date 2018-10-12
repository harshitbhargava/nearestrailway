import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quota',
  templateUrl: 'quota.html',
})
export class QuotaPage {
  searchQuery: string = '';
  quotas: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.quotas = navParams.get('tq');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotaPage');
  }
  close(item)
  {
    this.viewCtrl.dismiss(item);
  }
}
