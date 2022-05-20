import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiologyRoutingModule } from './biology-routing.module';
import { BiologyComponent } from './biology.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BiologyComponent],
  imports: [
    CommonModule,
    BiologyRoutingModule,
     SharedModule
  ]
})
export class BiologyModule { }
