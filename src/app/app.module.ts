import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SeatMap1Page } from '../pages/seat-map1/seat-map1';

import { AutoCompleteModule } from 'ionic2-auto-complete';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { CancelledTrainsPage } from '../pages/cancelled-trains/cancelled-trains';
import { DivertedTrainsPage } from '../pages/diverted-trains/diverted-trains';
import { FormsModule } from '@angular/forms';
import { ListOfTrainsPage } from '../pages/list-of-trains/list-of-trains';
import { ClassNamePage } from '../pages/class-name/class-name';
import { Http, HttpModule } from '@angular/http';
import { TrainArrivalsPage } from '../pages/train-arrivals/train-arrivals';
import { QuotaPage } from '../pages/quota/quota';
import { TrainNoPage } from '../pages/train-no/train-no';
import { StationcodePage } from '../pages/stationcode/stationcode';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NrShomePage,
    SearchBetStationsPage,
    ListOfTrainsPage,
    ClassNamePage,
    QuotaPage,
    TrainNoPage,
    StationcodePage,
    NearestStationPage,
    PnrStatusPage,
    LiveStatusPage,
    SeatAvailabilityPage,
    TrainSchedulePage,
    FareEnquiryPage,
    SeatMapPage,

    SeatMap1Page,
    FreeWifiPage,
    HelplineNoPage,
    TrainArrivalsPage,
    CancelledTrainsPage,
    DivertedTrainsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpModule,
    HttpClientModule,
    AutoCompleteModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NrShomePage,
    SearchBetStationsPage,
    ListOfTrainsPage,
    ClassNamePage,
    QuotaPage,
    TrainNoPage,
    StationcodePage,
    NearestStationPage,
    PnrStatusPage,
    LiveStatusPage,
    SeatAvailabilityPage,
    TrainSchedulePage,
    FareEnquiryPage,
    SeatMapPage,
    SeatMap1Page,

    FreeWifiPage,
    HelplineNoPage,
    TrainArrivalsPage,
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
