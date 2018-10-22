import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DivertedTrainsPage } from './diverted-trains';

@NgModule({
  declarations: [
    DivertedTrainsPage,
  ],
  imports: [
    IonicPageModule.forChild(DivertedTrainsPage),
  ],
})
export class DivertedTrainsPageModule {}
