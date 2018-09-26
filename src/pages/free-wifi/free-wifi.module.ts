import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FreeWifiPage } from './free-wifi';

@NgModule({
  declarations: [
    FreeWifiPage,
  ],
  imports: [
    IonicPageModule.forChild(FreeWifiPage),
  ],
})
export class FreeWifiPageModule {}
