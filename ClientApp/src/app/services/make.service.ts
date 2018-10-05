import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MakeService {

  constructor(private http: HttpClient) { }

  getMakes() {
    return this.http.get('/api/makes');
  }
}
