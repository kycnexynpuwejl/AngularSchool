import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, filter, map, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as AuthActions from './auth.actions';
import { User } from "firebase/auth";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private afAuth: AngularFireAuth,
    private router: Router,
    private dialog: MatDialog
  ) {}

  loginStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginStart),
      exhaustMap(action =>
        from(this.afAuth.signInWithEmailAndPassword(action.email, action.password)).pipe(
          filter(userCredential => userCredential.user !== null),
          map(userCredential => AuthActions.loginSuccess({ user: userCredential.user as any as User })),
          catchError(error => of(AuthActions.loginFailure({ error })))
        )
      )
    ));

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(() => {
        this.router.navigate(['/']);
      })
    ), { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        this.afAuth.signOut();
        this.router.navigate(['/']);
      })
    ), { dispatch: false }
  );

  closeDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.closeDialog),
      tap(() => {
        this.dialog.closeAll();
      })
    ), { dispatch: false }
  );
}
