import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  inter: string = "interpolation";
  img: string = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';
  constructor() { }

  ngOnInit(): void {
  }

}
