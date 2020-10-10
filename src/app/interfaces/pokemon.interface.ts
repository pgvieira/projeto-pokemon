import { Sprites } from './sprites.interface';

export interface Pokemon {
  id: number;
  name: string;
  abilities: Array<any>; // TODO fazer interface das abilities
  base_experience: number;
  forms: Array<any>; // TODO fazer interface dos forms
  game_indices: Array<any>;  // TODO fazer interface dos gameIndices
  height: number;
  held_itens: Array<any>;  // TODO fazer interface disso (não sei o que é)
  isDefault: boolean;
  location_area_encounters: string;
  moves: Array<any>;  // TODO fazer interface dos moves
  order: number;
  species: object;
  sprites: Sprites;
  stats: Array<any>;  // TODO fazer interface dos stats
  types: Array<any>;  // TODO fazer interface dos types
  weight: number;
}
