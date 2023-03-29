import { Dispatch } from '@reduxjs/toolkit';
import { setCharacter, setInputSearch } from '../slices';

/**
  * Exporta todos los thunks para los personajes
@function getAllCharacters - Obtiene todos los personajes
@function getCharacterByName - Obtiene los personajes por búsqueda

*/

export const getAllCharacters = (page = 1) => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      ).then((res) => res.json());

      dispatch(
        setCharacter({
          characters: data.results,
          maxPage: data.info.pages,
          page: page,
          episode: data.episode,
        })
      );
    } catch (error) {
      dispatch(
        setCharacter({
          characters: [],
          errorMessage: 'Error al cargar los personajes',
        })
      );
    }
  };
};
export const getCharacterByName = (page = 1, searchQuery: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
      ).then((res) => res.json());
      dispatch(
        setInputSearch({
          characters: data.results,
          maxPage: data.info.pages,
          page: page,
          searchQuery: searchQuery,
        })
      );
    } catch (error) {
      return dispatch(
        setInputSearch({
          characters: [],
          errorMessage: 'No se encontraron personajes!',
        })
      );
    }
  };
};
