import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OperatorsService } from '../operators.service';
import { OperatorRequest } from '../../shared/models/operator-request.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-new-operator',
  templateUrl: './new-operator.component.html',
  styleUrls: ['./new-operator.component.scss']
})
export class NewOperatorComponent implements OnInit {

  public data: any;
  public operatorsForm = this.fb.group({
    name: [{ value: '', disabled: false }, Validators.required],
    login: [{ value: '', disabled: false }, Validators.required],
    password: [{ value: '', disabled: false }, [Validators.required]],
    passwordConfirm: [{ value: '', disabled: false }, Validators.required],
  });
  constructor(private fb: FormBuilder, 
    private operatorsService: OperatorsService, 
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<NewOperatorComponent>) { }

  ngOnInit(): void {
  }

  public save() {
    console.log(this.operatorsForm);
    if (this.operatorsForm.get('password').value === this.operatorsForm.get('passwordConfirm').value) {
      this.operatorsService.save(this.createOperator()).subscribe(res => {
        console.log(res);
        this.dialogRef.close();
      })
    } else {
      this.openSnackBar('Senhas não conferem!', 'Dispensar');
      this.operatorsForm.get('password').setErrors({crossValidation: false});
      this.operatorsForm.get('passwordConfirm').setErrors({crossValidation: false});
    }

  }

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  private createOperator() {
    const operatorRq = new OperatorRequest();

    operatorRq.name = this.operatorsForm.get('name').value,
      operatorRq.login = this.operatorsForm.get('login').value,
      operatorRq.password = this.operatorsForm.get('password').value

    return operatorRq;
  }


}
