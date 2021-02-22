import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  data: any = 55;
  get: any;

  constructor() { }

  ngOnInit(): void {
  }

}
