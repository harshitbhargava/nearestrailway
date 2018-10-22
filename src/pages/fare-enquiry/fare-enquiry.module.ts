import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FareEnquiryPage } from './fare-enquiry';

@NgModule({
  declarations: [
    FareEnquiryPage,
  ],
  imports: [
    IonicPageModule.forChild(FareEnquiryPage),
  ],
})
export class FareEnquiryPageModule {}
