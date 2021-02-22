import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.scss']
})
export class NowComponent implements OnInit {
  img: string = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';
  class: any = "one";
  class2: any = true;
  class3: number = 5;
  data: number[] = [1, 2, 3, 4, 5];
  expression: any = "50px";
  constructor() { }

  ngOnInit(): void {
  }

}
