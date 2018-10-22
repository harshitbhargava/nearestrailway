import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveStatusPage } from './live-status';

@NgModule({
  declarations: [
    LiveStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveStatusPage),
  ],
})
export class LiveStatusPageModule {}
