import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private _HttpClient: HttpClient) { }
  get() {
    this._HttpClient.get('');
  }
  store() {
    this._HttpClient.post('','');
  }
  delete() {
    this._HttpClient.delete('');
  }
  update() {
    this._HttpClient.put('','');
  }
}
