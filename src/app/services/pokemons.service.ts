import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  url =  'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemonList(offset: number, limit: number): Observable<any> {
    return this.http.get(`${this.url}?offset=${offset}&limit=${limit}`);
  }

}
