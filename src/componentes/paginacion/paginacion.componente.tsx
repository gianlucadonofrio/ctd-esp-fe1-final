import { FC } from 'react';
import './paginacion.css';
import { useDispatch } from 'react-redux';
import { getAllCharacters, getCharacterByName } from '../../store/thunks';
import { useSelector } from '../../store/store';

/**
 * Componente que contiene los botones para paginar
 *
 *
 * @returns {JSX.Element}
 */
const Paginacion: FC = () => {
  const dispatch = useDispatch();
  const { page, maxPage, searchQuery } = useSelector(
    (state) => state.characters
  );

  const handleNextPage = () => {
    if (searchQuery.length > 0) {
      dispatch(getCharacterByName(page + 1, searchQuery));
    } else {
      dispatch(getAllCharacters(page + 1));
    }
  };
  const handlePrevPage = () => {
    if (searchQuery.length > 0) {
      dispatch(getCharacterByName(page - 1, searchQuery));
    } else {
      dispatch(getAllCharacters(page - 1));
    }
  };

  return (
    <div className="paginacion">
      <button
        disabled={page === 1 ? true : false}
        className={'primary'}
        onClick={handlePrevPage}
      >
        Anterior
      </button>
      <button
        disabled={page === maxPage ? true : false}
        className={'primary'}
        onClick={handleNextPage}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
