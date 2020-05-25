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

  displayedColumns: string[] = ['id', 'name', 'creationDate', 'actions'];
  constructor(private operatorsService: OperatorsService, private dialog: MatDialog) { }


  ngOnInit(): void {
    this.getAllOperatorsList();
  }

  openModalNewOperator(action: string, operator?: any): void {
    const dialogRef = this.dialog.open(NewOperatorComponent, {
      width: '250px',
      data: {action: action, operator: operator}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllOperatorsList();
    });
  }

  remove(id: number) {
    this.operatorsService.remove(id).subscribe(res => {
      this.getAllOperatorsList();
    })
  }

  private getAllOperatorsList() {
    this.operatorsService.list().subscribe((res: OperatorResponse[]) => {
      this.data = res;
    });
  }

}
