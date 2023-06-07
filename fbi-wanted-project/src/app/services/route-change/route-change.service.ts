import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from "../auth/auth.service";
import { LoginDialogComponent } from "../../components/header/login-dialog/login-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class RouteChangeService {
  constructor(private router: Router, private authService: AuthService, private dialog: MatDialog) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.handleRouteChange();
      }
    });
  }

  handleRouteChange() {
    this.authService.isLoggedIn().subscribe(isLoggedIn => {
      if (!isLoggedIn) {
        this.dialog.open(LoginDialogComponent);
      }
    });
  }
}
