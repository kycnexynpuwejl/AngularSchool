import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fbi-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }

}
