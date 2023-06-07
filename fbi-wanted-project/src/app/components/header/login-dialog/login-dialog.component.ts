import {Component, OnInit, OnDestroy} from '@angular/core';
import { AuthService } from "../../../services/auth/auth.service";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'fbi-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit, OnDestroy {
  public hide: boolean = true;
  public email: string = '';
  public password: string = '';
  private isLoggedInSubscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedInSubscription = this.authService.isLoggedIn().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.dialogRef.close(true);
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy(): void {
    this.isLoggedInSubscription.unsubscribe();
  }

  onLoginSubmit(): void {
    this.authService.login(this.email, this.password);
  }
}
