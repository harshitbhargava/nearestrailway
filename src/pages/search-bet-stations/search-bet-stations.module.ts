import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchBetStationsPage } from './search-bet-stations';

@NgModule({
  declarations: [
    SearchBetStationsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchBetStationsPage),
  ],
})
export class SearchBetStationsPageModule {}
