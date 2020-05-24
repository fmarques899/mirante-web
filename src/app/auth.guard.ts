import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from './alert-dialog.component';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private dialog: MatDialog,
    private userService: UserService,
    private activatedRoute: ActivatedRoute) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('authorization')) {
      this.userService.getUser().subscribe(res => {

        switch (this.router.url) {
          case '/dashboard': {
            return true;
          }
          case '/operators': {
            if (res['profileId'] === 1) {
              return true;
            } 
            return false;
          }
          case 'persons': {
            return true;
          }
        }

      });
      return true;
    }

    this.router.navigate(['/login']);
    this.dialog.open(AlertDialogComponent);
    return false;

  }

}
