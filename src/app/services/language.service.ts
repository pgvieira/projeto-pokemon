import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  url = 'https://pokeapi.co/api/v2/language';

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<object> {
    return this.http.get(this.url);
  }
}
