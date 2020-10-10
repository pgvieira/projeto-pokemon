import { Component, OnInit } from '@angular/core';
import {PokemonsService} from '../../services/pokemons.service';
import {Pokemon} from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  listPokemon = [];
  offset = 0;
  limit = 6;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getPokemonList(this.offset, this.limit);
  }

  nextPage(): void {
    this.offset = this.offset + this.limit;
    this.listPokemon = [];
    this.getPokemonList(this.offset, this.limit);
  }

  previousPage(): void {
    this.offset = this.offset - this.limit;
    this.listPokemon = [];
    this.getPokemonList(this.offset, this.limit);
  }

  openModal(pokemon: any): void {
    console.log(pokemon);
  }

  getPokemonList(offset, limit): void {
    this.pokemonsService.getPokemonList(offset, limit).subscribe(async (result: any) => {
      for (const pokemonItem of result.results) {
        await this.pokemonsService.getPokemon(pokemonItem.url).toPromise().then( (data: Pokemon) => {
          const pokemonObject = {
            id: data.id,
            name: data.name,
            urlImage: data.sprites.front_default
          };
          this.listPokemon.push(pokemonObject);
        });
      }
    });
  }
}
