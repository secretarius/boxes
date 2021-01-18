import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConverterComponent } from './convert/converter.component';
import { LengthConverterComponent } from './length-convertor/length-converter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    LengthConverterComponent,
    ConverterComponent,
    
  ],
  exports: [
    ConverterComponent,
    LengthConverterComponent
    
  ],
  imports: [
  CommonModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonToggleModule,
  ]
})
export class SharedModule { }