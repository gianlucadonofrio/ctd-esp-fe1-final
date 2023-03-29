import { ChangeEvent, FC } from 'react';
import './filtros.css';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { getCharacterByName } from '../../store/thunks';

/**
 * Componente que contiene los filtros para buscar personajes
 *
 * @returns {JSX.Element}
 */

const Filtros: FC = () => {
  const dispatch = useDispatch();
  const { searchQuery, page } = useSelector(
    (state: RootStateOrAny) => state.characters
  );

  const filterCharacters = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    dispatch(getCharacterByName(page, value));
  };

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={filterCharacters}
        value={searchQuery}
        autoFocus={true}
      />
    </div>
  );
};

export default Filtros;
