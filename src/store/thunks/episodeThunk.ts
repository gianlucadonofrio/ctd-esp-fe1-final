import { Dispatch } from '@reduxjs/toolkit';
import { getEpisodes } from '../slices';

/**
 * Exporta todos los thunks para los episodios
 * @function getEpisodesThunk - Obtiene los episodios
 *
 */

export const getEpisodesThunk = (arrayEpisodes: Object) => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await fetch(
        `https://rickandmortyapi.com/api/episode/${arrayEpisodes}`
      ).then((res) => res.json());
      dispatch(getEpisodes(data));
    } catch (error) {
      console.log(error);
    }
  };
};
