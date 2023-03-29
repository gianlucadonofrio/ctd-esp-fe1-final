import { createSlice } from '@reduxjs/toolkit';
import { Character } from '../../types';

interface FavoriteInitialState {
  charactersFavorites: Character[];
}

const initialState: FavoriteInitialState = {
  charactersFavorites: [],
};

/**
 * Favorites Slide
 * @param {Character[]} charactersFavorites - Lista de personajes favoritos
 *
 * @function setCharactersFavorites - Establece la lista de personajes favoritos
 */
export const favoritesSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorites: (state, { payload }) => {
      const index = state.charactersFavorites.findIndex(
        (character) => character.id === payload.id
      );
      if (index === -1) {
        state.charactersFavorites.push(payload);
      } else {
        state.charactersFavorites.splice(index, 1);
      }
    },
    deleteAllFavorites: (state) => {
      state.charactersFavorites = [];
    },
  },
});

export const { toggleFavorites, deleteAllFavorites } = favoritesSlice.actions;
