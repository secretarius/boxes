import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  api = 'https://api.exchangeratesapi.io/';

  constructor(private http: HttpClient) { }

  getLatest(): Observable<any> {
    return this.http.get(`${this.api}latest`);
  }
}
