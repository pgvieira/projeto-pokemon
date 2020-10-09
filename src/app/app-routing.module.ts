import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'items', component: ItemsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
