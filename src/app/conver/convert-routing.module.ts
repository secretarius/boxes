import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdxConvertComponent } from './idx-convert/idx-convert.component';
import { CurrencyComponent } from './currency/currency.component';
import { LengthComponent } from './length/length.component';

const routes: Routes = [
  {
    path: '',
    component: IdxConvertComponent,
    children: [
      {
        path: 'currency',
        component: CurrencyComponent
      },
      {
        path: 'length',
        component: LengthComponent
      },
      {
        path: '**',
        redirectTo: 'currency',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvertRoutingModule { }