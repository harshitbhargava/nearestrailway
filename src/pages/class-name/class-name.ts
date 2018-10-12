import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClassNamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class-name',
  templateUrl: 'class-name.html',
})
export class ClassNamePage {
  searchQuery: string = '';
  classNames: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.classNames = navParams.get('tcl');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassNamePage');
  }
  close(item)
  {
    this.viewCtrl.dismiss(item);
  }
}
