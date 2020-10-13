import { Component, OnInit } from '@angular/core';
import {PokemonsService} from '../../services/pokemons.service';
import {Pokemon} from '../../interfaces/pokemon.interface';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PokemonDetailComponent} from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  listPokemon: Pokemon[] = [];
  offset = 0;
  limit = 6;

  constructor(private pokemonsService: PokemonsService,
              private modalService: NgbModal) { }

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
    const modalRef = this.modalService.open(PokemonDetailComponent, {size: 'xl'});
    modalRef.componentInstance.pokemon = pokemon;
    modalRef.componentInstance.width = 900;
  }

  getPokemonList(offset, limit): void {
    this.pokemonsService.getPokemonList(offset, limit).subscribe(async (result: any) => {
      for (const pokemonItem of result.results) {
        await this.pokemonsService.getPokemon(pokemonItem.url).toPromise().then((data: Pokemon) => {
          this.listPokemon.push(data);
        });
      }
    });
  }
}
