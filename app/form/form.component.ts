import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form=new FormGroup({
    name: new FormControl('',[Validators.minLength(3),Validators.pattern(/^[A-z]{5,100}$/),Validators.required]),
    age: new FormControl('', [Validators.required]),
    data: new FormGroup({
      news: new FormControl('',[Validators.required]),
    }),
  });
  constructor() { }

  ngOnInit(): void {
    this.form.patchValue({
      name: 'fffffff',
      age: '11111',
      data: {
        news:'dddddddddd'
      }
    })
  }
  go() {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      alert('get valid');
      return false;
    } else {
      console.log(this.form.value);
      return true;
    }
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
}
