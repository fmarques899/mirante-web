import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public showOperatorsCard = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(loggedUser => {
      if(loggedUser['profileId'] == 1) {
        this.showOperatorsCard = true;
      }
    });
  }



}
