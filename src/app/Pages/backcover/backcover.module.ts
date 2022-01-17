import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackcoverPageRoutingModule } from './backcover-routing.module';

import { BackcoverPage } from './backcover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackcoverPageRoutingModule
  ],
  declarations: [BackcoverPage]
})
export class BackcoverPageModule {}
