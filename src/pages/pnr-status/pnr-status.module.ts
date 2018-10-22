import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PnrStatusPage } from './pnr-status';

@NgModule({
  declarations: [
    PnrStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(PnrStatusPage),
  ],
})
export class PnrStatusPageModule {}
