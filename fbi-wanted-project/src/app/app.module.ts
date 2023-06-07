import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginDialogComponent } from './components/header/login-dialog/login-dialog.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import {LandingComponent} from './components/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router'
import { MatButtonModule } from '@angular/material/button'
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from "@angular/material/paginator";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {FormsModule} from "@angular/forms";
import {AuthService} from "./services/auth/auth.service";
import {AuthGuard} from "./guards/auth/auth.guard";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {authReducer} from "./state/auth/auth.reducers";
import {AuthEffects} from "./state/auth/auth.effects";

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'first-component', component: FirstComponent, canActivate: [AuthGuard] },
  { path: 'second-component', component: SecondComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FirstComponent,
    SecondComponent,
    LoginDialogComponent,
    LandingComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthEffects
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
