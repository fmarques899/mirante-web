import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { PersonService } from '../person.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NewOperatorComponent } from '../../operators/new-operator/new-operator.component';
import { PersonRequest } from '../../shared/models/person-request.model';
import { PhoneRequest } from '../../shared/models/phone-request.model';
import { PhoneResponse } from '../../shared/models/phone-response.model';
import { PersonResponse } from '../../shared/models/person-response.model';

@Component({
  selector: 'app-person-modal',
  templateUrl: './person-modal.component.html',
  styleUrls: ['./person-modal.component.scss']
})
export class PersonModalComponent implements OnInit {

  public phones: PhoneRequest[] = [];
  public personForm = this.fb.group({
    id: [{value: '', disabled: false}, [Validators.required]],
    name: [{value: '', disabled: false}, [Validators.required]],
    type: [{value: '', disabled: false}, [Validators.required]],
    docNumber: [{value: '', disabled: false}, [Validators.required]],
    birthDate: [{value: '', disabled: false}, [Validators.required]],
    creationDate: [{value: '', disabled: false}, [Validators.required]],
    fatherName: [{value: '', disabled: false}, []],
    motherName: [{value: '', disabled: false}, []],
    phone: [{value: '', disabled: false}, [Validators.required]],
    ddd: [{value: '', disabled: false}, [Validators.required]],
    phoneType: [{value: '', disabled: false}, [Validators.required]],
  })

  constructor(
    private fb: FormBuilder, 
    private personService: PersonService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<NewOperatorComponent>
    ) { }

  ngOnInit(): void {
    if(this.data.action === 'edit') {
      this.personService.detail(this.data.person.id).subscribe((res: PersonResponse) => {
        this.personForm.patchValue(res);
        this.personForm.get('type').setValue(res.type);
        this.phones = res.phones;
      });
    }
    console.log(this.personForm);
  }

  public save() {
    switch (this.data.action) {
      case 'new': {
        this.personService.save(this.createPerson()).subscribe(res => {
          this.dialogRef.close();
        });
      }break;
      case 'edit': {
        this.personService.edit(this.createPerson()).subscribe(res => {
          this.dialogRef.close();
        });
      }
    }

  }

  public addPhone() {
    this.phones.push({
      ddd: this.personForm.get('ddd').value,
      phone: this.personForm.get('phone').value,
      type: this.personForm.get('phoneType').value
    });
    this.personForm.get('ddd').reset();
    this.personForm.get('phone').reset();
    this.personForm.get('phoneType').reset();
  }

  public removePhone(phone: any) {
    console.log(phone);
    this.phones.splice(this.phones.indexOf(phone), 1);
  }

  private createPerson() {
    const person = new PersonRequest();
    
    person.id = this.personForm.get('id').value;
    person.name = this.personForm.get('name').value;
    person.docNumber = this.personForm.get('docNumber').value;
    person.birthDate = this.personForm.get('birthDate').value;
    person.motherName = this.personForm.get('motherName').value;
    person.fatherName = this.personForm.get('fatherName').value;
    person.phones = this.phones;

    return person;
  }


}
