import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthActions from '../../state/auth/auth.actions';
import * as AuthSelectors from '../../state/auth/auth.selectors';
import {User} from "firebase/auth";
import {AppState} from "../../app.state";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private store: Store<AppState>) {}

  login(email: string, password: string) {
    this.store.dispatch(AuthActions.loginStart({ email, password }));
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }

  isLoggedIn(): Observable<boolean> {
    return this.store.select(AuthSelectors.selectIsAuthenticated);
  }

  getUser(): Observable<User | null> {
    return this.store.select(AuthSelectors.selectUser);
  }
}
