import { createSlice } from '@reduxjs/toolkit';
import { Character } from '../../types';

interface CharacterInitialState {
  characters: Character[];
  inputSearch: string;
  errorMessage: string;
  isLoading: boolean;
  page: number;
  maxPage: number;
  searchQuery: string;
  episode: string[];
}

const initialState: CharacterInitialState = {
  characters: [],
  inputSearch: '',
  errorMessage: '',
  isLoading: true,
  page: 0,
  maxPage: 0,
  searchQuery: '',
  episode: [],
};
/**
 * Characters Slide
 * @param {Character[]} characters - Lista de personajes
 * @param {string} inputSearch - Valor del input de búsqueda
 * @param {string} errorMessage - Mensaje de error
 * @param {boolean} isLoading - Indica si se está cargando la información
 * @param {number} page - Página actual
 * @param {number} maxPage - Máximo de páginas
 * @param {string} searchQuery - Valor de la búsqueda
 * @param {string[]} episode - Lista de episodios
 * 
 * 
 * @function setCharacters - Establece la lista de personajes
 * @function setInputSearch - Establece el valor del input de búsqueda
 * 
 */
export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacter: (state, { payload }) => {
      state.characters = payload.characters;
      state.isLoading = false;
      state.errorMessage = payload.errorMessage;
      state.maxPage = payload.maxPage;
      state.page = payload.page;
      state.episode = payload.episode;
    },
    setInputSearch: (state, { payload }) => {
      state.searchQuery = payload.searchQuery;
      state.characters = payload.characters;
      state.page = payload.page;
      state.errorMessage = payload.errorMessage;
      state.maxPage = payload.maxPage;
    },
  },
});

export const { setCharacter, setInputSearch } = characterSlice.actions;
