import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainArrivalsPage } from './train-arrivals';

@NgModule({
  declarations: [
    TrainArrivalsPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainArrivalsPage),
  ],
})
export class TrainArrivalsPageModule {}
