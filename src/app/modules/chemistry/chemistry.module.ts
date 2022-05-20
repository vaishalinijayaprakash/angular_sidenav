import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChemistryRoutingModule } from './chemistry-routing.module';
import { ChemistryComponent } from './chemistry.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ChemistryComponent],
  imports: [
    CommonModule,
    ChemistryRoutingModule,
    SharedModule,
  ]
})
export class ChemistryModule { }
