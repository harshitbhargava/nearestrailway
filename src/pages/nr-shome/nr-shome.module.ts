import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NrShomePage } from './nr-shome';

@NgModule({
  declarations: [
    NrShomePage,
  ],
  imports: [
    IonicPageModule.forChild(NrShomePage),
  ],
})
export class NrShomePageModule {}
