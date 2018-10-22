import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfTrainsPage } from './list-of-trains';

@NgModule({
  declarations: [
    ListOfTrainsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListOfTrainsPage),
  ],
})
export class ListOfTrainsPageModule {}
