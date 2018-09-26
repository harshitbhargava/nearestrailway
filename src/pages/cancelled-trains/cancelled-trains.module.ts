import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancelledTrainsPage } from './cancelled-trains';

@NgModule({
  declarations: [
    CancelledTrainsPage,
  ],
  imports: [
    IonicPageModule.forChild(CancelledTrainsPage),
  ],
})
export class CancelledTrainsPageModule {}
