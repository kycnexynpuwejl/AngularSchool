import {Component, OnInit } from '@angular/core';
import {provideRoutes} from "@angular/router";

@Component({
  selector: 'fbi-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  protected readonly provideRoutes = provideRoutes;
}
