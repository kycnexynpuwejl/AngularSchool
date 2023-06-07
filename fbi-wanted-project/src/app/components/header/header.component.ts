import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from 'rxjs';
import { User } from 'firebase/auth';
import { LoginDialogComponent } from "./login-dialog/login-dialog.component";
import { AuthService } from "../../services/auth/auth.service";
import * as AuthActions from '../../state/auth/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'fbi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public loginLogoutText: string = 'Login';
  private userSubscription: Subscription = Subscription.EMPTY;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.getUser().subscribe((user: User | null) => {
      this.loginLogoutText = user ? 'Logout' : 'Login';
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  onLoginLogoutClicked() {
    if (this.loginLogoutText === 'Login') {
      this.dialog.open(LoginDialogComponent);
    } else {
      this.authService.logout();
      this.store.dispatch(AuthActions.closeDialog());
    }
  }
}
