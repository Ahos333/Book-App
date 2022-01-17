import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackcoverPage } from './backcover.page';

const routes: Routes = [
  {
    path: '',
    component: BackcoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackcoverPageRoutingModule {}
