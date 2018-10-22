import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearestStationPage } from './nearest-station';

@NgModule({
  declarations: [
    NearestStationPage,
  ],
  imports: [
    IonicPageModule.forChild(NearestStationPage),
  ],
})
export class NearestStationPageModule {}
