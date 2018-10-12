import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeatMapPage } from './seat-map';

@NgModule({
  declarations: [
    SeatMapPage,
  ],
  imports: [
    IonicPageModule.forChild(SeatMapPage),
  ],
})
export class SeatMapPageModule {}
