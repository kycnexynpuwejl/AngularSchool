import { Component } from '@angular/core';
import {RouteChangeService} from "./services/route-change/route-change.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fbi-wanted-project';

  constructor(private routeChangeService: RouteChangeService) {}
}
