import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaryPage } from './mary';

@NgModule({
  declarations: [
    MaryPage,
  ],
  imports: [
    IonicPageModule.forChild(MaryPage),
  ],
})
export class MaryPageModule {}
