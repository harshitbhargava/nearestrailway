import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NrShomePage } from '../pages/nr-shome/nr-shome';
import { SearchBetStationsPage } from '../pages/search-bet-stations/search-bet-stations';
import { NearestStationPage } from '../pages/nearest-station/nearest-station';
import { PnrStatusPage } from '../pages/pnr-status/pnr-status';
import { LiveStatusPage } from '../pages/live-status/live-status';
import { SeatAvailabilityPage } from '../pages/seat-availability/seat-availability';
import { TrainSchedulePage } from '../pages/train-schedule/train-schedule';
import { FareEnquiryPage } from '../pages/fare-enquiry/fare-enquiry';
import { SeatMapPage } from '../pages/seat-map/seat-map';
import { FreeWifiPage } from '../pages/free-wifi/free-wifi';
import { HelplineNoPage } from '../pages/helpline-no/helpline-no';
import { RakesPage } from '../pages/rakes/rakes';
import { CancelledTrainsPage } from '../pages/cancelled-trains/cancelled-trains';
import { DivertedTrainsPage } from '../pages/diverted-trains/diverted-trains';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NrShomePage,
    SearchBetStationsPage,
    NearestStationPage,
    PnrStatusPage,
    LiveStatusPage,
    SeatAvailabilityPage,
    TrainSchedulePage,
    FareEnquiryPage,
    SeatMapPage,
    FreeWifiPage,
    HelplineNoPage,
    RakesPage,
    CancelledTrainsPage,
    DivertedTrainsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NrShomePage,
    SearchBetStationsPage,
    NearestStationPage,
    PnrStatusPage,
    LiveStatusPage,
    SeatAvailabilityPage,
    TrainSchedulePage,
    FareEnquiryPage,
    SeatMapPage,
    FreeWifiPage,
    HelplineNoPage,
    RakesPage,
    CancelledTrainsPage,
    DivertedTrainsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
