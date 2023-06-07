import { createAction, props } from '@ngrx/store';
import {User} from "firebase/auth";

export const loginStart = createAction(
  '[Auth] Login Start',
  props<{ email: string, password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User | null }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction('[Auth] Logout');

export const closeDialog = createAction('[Auth] Close Dialog');
