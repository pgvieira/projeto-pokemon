import { Component, OnInit } from '@angular/core';
import {PokemonsService} from '../../services/pokemons.service';
import {Pokemon} from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemonList: Pokemon[];
  offset = 0;
  limit = 10;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemonsService.getPokemonList(this.offset, this.limit).subscribe( (result: any) => {
      this.pokemonList = result.results;
    });
  }

  nextPage(): void {
    this.offset = this.offset + this.limit;
    this.pokemonsService.getPokemonList(this.offset, this.limit).subscribe( (result: any) => {
      this.pokemonList = result.results;
    });
  }

  previousPage(): void {
    this.offset = this.offset - this.limit;
    this.pokemonsService.getPokemonList(this.offset, this.limit).subscribe( (result: any) => {
      this.pokemonList = result.results;
    });
  }

  openModal(pokemon: any): void {
    console.log(pokemon);
  }
}
