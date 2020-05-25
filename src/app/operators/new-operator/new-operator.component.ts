import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OperatorsService } from '../operators.service';
import { OperatorRequest } from '../../shared/models/operator-request.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-new-operator',
  templateUrl: './new-operator.component.html',
  styleUrls: ['./new-operator.component.scss']
})
export class NewOperatorComponent implements OnInit {

  public operatorsForm = this.fb.group({
    id: [{ value: '', disabled: false }, Validators.required],
    name: [{ value: '', disabled: false }, Validators.required],
    login: [{ value: '', disabled: false }, Validators.required],
    password: [{ value: '', disabled: false }, [Validators.required]],
    passwordConfirm: [{ value: '', disabled: false }, Validators.required],
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private operatorsService: OperatorsService,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<NewOperatorComponent>) { }

  ngOnInit(): void {
    console.log(this.data);
    if (this.data.action === 'edit') {
      this.operatorsService.detail(this.data.operator.id).subscribe(res => {
        console.log(res);
        this.operatorsForm.patchValue(res);
      });
      
    }
  }

  public save() {
    if (this.operatorsForm.get('password').value === this.operatorsForm.get('passwordConfirm').value) {
      switch (this.data.action) {
        case 'new': {
          this.operatorsService.save(this.createOperator()).subscribe(res => {
            console.log(res);
            this.dialogRef.close();
          });
        }break;
        case 'edit': {
          this.operatorsService.edit(this.createOperator()).subscribe(res => {
            this.dialogRef.close();
          })
        }
      }

    } else {
      this.openSnackBar('Senhas não conferem!', 'Dispensar');
      this.operatorsForm.get('password').setErrors({ crossValidation: false });
      this.operatorsForm.get('passwordConfirm').setErrors({ crossValidation: false });
    }

  }

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  private createOperator() {
    const operatorRq = new OperatorRequest();

    operatorRq.id = this.operatorsForm.get('id').value,
    operatorRq.name = this.operatorsForm.get('name').value,
      operatorRq.login = this.operatorsForm.get('login').value,
      operatorRq.password = this.operatorsForm.get('password').value

    return operatorRq;
  }


}
