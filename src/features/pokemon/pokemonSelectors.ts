import { RootState } from "app/store";

export const selectPokemons = (state: RootState) => state.pokemon.list;

export const selectSelectedPokemon = (state: RootState) => state.pokemon.selectedPokemon;