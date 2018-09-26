import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NrShomePage } from '../nr-shome/nr-shome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    navCtrl.push(NrShomePage);
  }

}
