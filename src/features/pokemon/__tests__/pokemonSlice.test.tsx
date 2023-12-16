// src/features/pokemon/pokemonTest.ts
import { RootState, pokemonReducer } from 'app/store';
import { setPokemonList, setSelectedPokemon } from '../pokemonSlice';

describe('pokemonSlice', () => {
  it('should set the Pokemon list', () => {
    const initialState: RootState = {
      pokemon: {
        list: [],
        selectedPokemon: null,
      },
    };

    const updatedState = {
      list: ['Bulbasaur', 'Charmander'],
      selectedPokemon: null,
    };

    const action = setPokemonList(updatedState.list);
    const newState = pokemonReducer(initialState.pokemon, action);

    expect(newState).toEqual(updatedState);
  });

  it('should set the selected Pokemon', () => {
    const initialState: RootState = {
      pokemon: {
        list: [],
        selectedPokemon: null,
      },
    };

    const updatedState = { list: [], selectedPokemon: 'Pikachu' };

    const action = setSelectedPokemon(updatedState.selectedPokemon);
    const newState = pokemonReducer(initialState.pokemon, action);

    expect(newState).toEqual(updatedState);
  });
});
