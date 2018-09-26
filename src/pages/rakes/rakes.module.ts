import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RakesPage } from './rakes';

@NgModule({
  declarations: [
    RakesPage,
  ],
  imports: [
    IonicPageModule.forChild(RakesPage),
  ],
})
export class RakesPageModule {}
