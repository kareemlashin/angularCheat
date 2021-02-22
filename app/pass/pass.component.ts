import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.scss']
})
export class PassComponent implements OnInit {
  id :number |any;
  constructor(private _route: ActivatedRoute, private router: Router) {
    this.id = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }
  goTo() {
    this.router.navigate(['base']);
  }

}
