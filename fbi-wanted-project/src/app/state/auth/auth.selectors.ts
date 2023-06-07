import { createSelector } from '@ngrx/store';
import {AuthState} from "../../interfaces/auth-state.interface";
import {User} from "firebase/auth";

export const selectAuth = (state: { auth: AuthState }) => state.auth;

export const selectUser = createSelector(
  selectAuth,
  (auth: AuthState) => auth.user as User | null
);

export const selectIsAuthenticated = createSelector(
  selectAuth,
  (state: AuthState) => !!state.user
);
