import { FC } from 'react';
import GrillaPersonajes from '../componentes/personajes/grilla-personajes.componente';
import { RootStateOrAny, useDispatch } from 'react-redux';
import { useSelector } from '../store/store';
import { deleteAllFavoritesThunk } from '../store/thunks/favoritesThunk';

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns {JSX.Element}
 */
const PaginaFavoritos: FC = () => {
  const dispatch = useDispatch();

  const { charactersFavorites } = useSelector(
    (state: RootStateOrAny) => state.favorites
  );

  const deleteAllFavorites = () => {
    dispatch(deleteAllFavoritesThunk());
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button
          className="danger"
          onClick={deleteAllFavorites}
          disabled={charactersFavorites.length === 0 ? true : false}
        >
          Eliminar todos
        </button>
      </div>
      {charactersFavorites.length > 0 ? (
        <GrillaPersonajes characters={charactersFavorites} />
      ) : (
        <div className="empty">
          <h3>No hay personajes favoritos</h3>
        </div>
      )}
    </div>
  );
};

export default PaginaFavoritos;
