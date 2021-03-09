import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JohnPage } from './john';

@NgModule({
  declarations: [
    JohnPage,
  ],
  imports: [
    IonicPageModule.forChild(JohnPage),
  ],
})
export class JohnPageModule {}
