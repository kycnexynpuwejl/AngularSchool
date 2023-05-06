import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fbi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public prop: any;

  constructor() { }

  ngOnInit(): void {
  }

  emitOutputProp(event: any) {
    this.prop = event;
    console.log('prop: ', this.prop);
  }
}
