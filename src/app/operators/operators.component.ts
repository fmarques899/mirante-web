import { Component, OnInit } from '@angular/core';
import { OperatorsService } from './operators.service';
import { MatDialog } from '@angular/material/dialog';
import { NewOperatorComponent } from './new-operator/new-operator.component';
import { OperatorResponse } from '../shared/operator-response.model';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  public data: OperatorResponse[];

  displayedColumns: string[] = ['id', 'name', 'creationDate'];
  constructor(private operatorsService: OperatorsService, private dialog: MatDialog) { }


  ngOnInit(): void {
    this.operatorsService.list().subscribe((res: OperatorResponse[]) => {
      this.data = res;
    });
  }

  openModalNewOperator(): void {
    const dialogRef = this.dialog.open(NewOperatorComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
