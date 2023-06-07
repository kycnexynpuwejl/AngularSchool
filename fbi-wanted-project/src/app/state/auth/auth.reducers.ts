import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import {AuthState} from "../../interfaces/auth-state.interface";

export const authInitialState: AuthState = {
  user: null
};

export const authReducer = createReducer(
  authInitialState,
  on(AuthActions.loginStart, (state) => ({ ...state })),
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user })),
  on(AuthActions.logout, state => ({ ...state, user: null }))
);
