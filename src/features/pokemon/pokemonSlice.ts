import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
    list: string[];
    selectedPokemon: string | null;
}

const initialState: PokemonState = {
    list: [],
    selectedPokemon: null,
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemonList: (state, action: PayloadAction<string[]>) => {
            state.list = action.payload;
        },
        setSelectedPokemon: (state, action: PayloadAction<string | null>) => {
            state.selectedPokemon = action.payload;
        },
    },
});

export const { setPokemonList, setSelectedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;