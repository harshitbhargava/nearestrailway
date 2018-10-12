import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchBetStationsPage } from '../search-bet-stations/search-bet-stations';
import { NearestStationPage } from '../nearest-station/nearest-station';
import { PnrStatusPage } from '../pnr-status/pnr-status';
import { LiveStatusPage } from '../live-status/live-status';
import { SeatAvailabilityPage } from '../seat-availability/seat-availability';
import { TrainSchedulePage } from '../train-schedule/train-schedule';
import { FareEnquiryPage } from '../fare-enquiry/fare-enquiry';
import { SeatMapPage } from '../seat-map/seat-map';
import { FreeWifiPage } from '../free-wifi/free-wifi';
import { HelplineNoPage } from '../helpline-no/helpline-no';
import { CancelledTrainsPage } from '../cancelled-trains/cancelled-trains';
import { DivertedTrainsPage } from '../diverted-trains/diverted-trains';
import { TrainArrivalsPage } from '../train-arrivals/train-arrivals';

/**
 * Generated class for the NrShomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nr-shome',
  templateUrl: 'nr-shome.html',
})
export class NrShomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NrShomePage');
  }
  searchBetStations()
  {
    this.navCtrl.push(SearchBetStationsPage);
  }
  getNearestStation()
  {
    this.navCtrl.push(NearestStationPage);
  }
  getPNRStatus()
  {
    this.navCtrl.push(PnrStatusPage);
  }
  getLiveStatus()
  {
    this.navCtrl.push(LiveStatusPage);
  }
  getSeatAvailability()
  {
    this.navCtrl.push(SeatAvailabilityPage);
  }
  getTrainSchedule()
  {
    this.navCtrl.push(TrainSchedulePage);
  }
  getFare()
  {
    this.navCtrl.push(FareEnquiryPage);
  }
  getSeatMap()
  {
    this.navCtrl.push(SeatMapPage);
  }
  enableWifi()
  {
    this.navCtrl.push(FreeWifiPage);
  }
  viewHelplineNo()
  {
    this.navCtrl.push(HelplineNoPage);
  }
  getTrainArrivals()
  {
    this.navCtrl.push(TrainArrivalsPage);
  }
  viewCancelledTrains()
  {
    this.navCtrl.push(CancelledTrainsPage);
  }
  viewDivertedTrains()
  {
    this.navCtrl.push(DivertedTrainsPage);
  }
}
