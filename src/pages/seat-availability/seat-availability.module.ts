import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeatAvailabilityPage } from './seat-availability';

@NgModule({
  declarations: [
    SeatAvailabilityPage,
  ],
  imports: [
    IonicPageModule.forChild(SeatAvailabilityPage),
  ],
})
export class SeatAvailabilityPageModule {}
