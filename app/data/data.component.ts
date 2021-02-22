import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  @Input() to: any;
  @Output() set: EventEmitter<any> =new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.set.emit('dataaaa');
  }
  send() {

  }
}
