import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './operators.component';
import { OperatorsRoutingModule } from './operators-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { OperatorsService } from './operators.service';
import { MatDialogModule } from '@angular/material/dialog';
import { NewOperatorComponent } from './new-operator/new-operator.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [OperatorsComponent, NewOperatorComponent],
  imports: [
    CommonModule,
    OperatorsRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    OperatorsService
  ]
})
export class OperatorsModule { }
