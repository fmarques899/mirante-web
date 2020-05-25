import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonResponse } from '../shared/models/person-response.model';
import { PersonService } from './person.service';
import { PersonModalComponent } from './person-modal/person-modal.component';
import { Overlay, ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  public data: PersonResponse[];

  displayedColumns: string[] = ['id', 'name', 'docNumber', 'birthDate', 'creationDate', 'actions'];
  constructor(private personService: PersonService, private dialog: MatDialog, private overlay: Overlay) { }


  ngOnInit(): void {
    this.getAllPersonsList();
  }

  openModalNewPerson(action: string, person?: any): void {
    const dialogRef = this.dialog.open(PersonModalComponent, {
      width: '400px',
      data: {action: action, person: person},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllPersonsList();
    });
  }

  remove(id: number) {
    this.personService.remove(id).subscribe(res => {
      this.getAllPersonsList();
    })
  }

  private getAllPersonsList() {
    this.personService.list().subscribe((res: PersonResponse[]) => {
      this.data = res;
    });
  }

}
