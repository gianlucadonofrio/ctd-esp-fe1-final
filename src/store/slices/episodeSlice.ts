import { createSlice } from '@reduxjs/toolkit';
import { Episode } from '../../types';

interface EpisodeInitialState {
  episodes: Episode[];
  errorMessage: string;
}
const initialState: EpisodeInitialState = {
  episodes: [],
  errorMessage: '',
};

/**
 * Episodes Slide
 *
 * @param {Episode[]} episodes - Lista de episodios
 * @param {string} errorMessage - Mensaje de error
 *
 * @function setEpisodes - Establece la lista de episodios
 *
 */

export const episodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {
    getEpisodes: (state, { payload }) => {
      state.episodes = payload;
      state.errorMessage = '';
    },
  },
});

export const { getEpisodes } = episodeSlice.actions;
