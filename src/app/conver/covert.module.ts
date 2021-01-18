import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertRoutingModule } from './convert-routing.module';
import { IdxConvertComponent } from './idx-convert/idx-convert.component';
import { LengthComponent } from './length/length.component';
import { SharedModule } from '../shared/shared.module';
import { CurrencyComponent } from './currency/currency.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
 declarations: [
   IdxConvertComponent,
   LengthComponent,
   CurrencyComponent
 ],
 imports: [
   CommonModule,
   ConvertRoutingModule,
   SharedModule,
   MatTabsModule
 ]
})
export class ConvertModule { }