import { Character } from '../../types/character.types';
import { Dispatch } from '@reduxjs/toolkit';
import { deleteAllFavorites, toggleFavorites } from '../slices';

/**
 * Exporta todos los thunks para los favoritos
 * @function toggleFavoriteThunk - Agrega o elimina un personaje de favoritos
 *
 * @function deleteAllFavoritesThunk - Elimina todos los personajes de favoritos
 *
 *
 */

export const toggleFavoriteThunk = (character: Character) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleFavorites(character));
  };
};
export const deleteAllFavoritesThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch(deleteAllFavorites());
  };
};
