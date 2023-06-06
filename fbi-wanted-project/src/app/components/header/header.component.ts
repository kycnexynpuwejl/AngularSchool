import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogComponent} from "./login-dialog/login-dialog.component";

@Component({
  selector: 'fbi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loginLogoutText: string = 'Login';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  loginLogoutClicked() {
    this.dialog.open(LoginDialogComponent);
  }
}
