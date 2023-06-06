import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fbi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public l: string = 'Login';

  constructor() { }

  ngOnInit(): void {

  }

  loginLogoutClicked() {
    this.l === 'Login' ? this.l = 'Logout' : this.l = 'Login';
  }
}
