import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fbi-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() inputProp: any;

  @Output() outputProp: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log('input: ', this.inputProp);
    this.outputProp.emit('OUTPUT');
  }

}
