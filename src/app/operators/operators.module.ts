import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './operators.component';
import { OperatorsRoutingModule } from './operators-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [OperatorsComponent],
  imports: [
    CommonModule,
    OperatorsRoutingModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class OperatorsModule { }
