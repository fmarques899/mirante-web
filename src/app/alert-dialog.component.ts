import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

  @Input()
  public message: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
