import Filtros from '../componentes/personajes/filtros.componente';
import GrillaPersonajes from '../componentes/personajes/grilla-personajes.componente';
import Paginacion from '../componentes/paginacion/paginacion.componente';
import { FC, useEffect } from 'react';
import { getAllCharacters, getCharacterByName } from '../store/thunks';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns {JSX.Element}
 */
const PaginaInicio: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  const { characters } = useSelector(
    (state: RootStateOrAny) => state.characters
  );
  const clearSearch = () => {
    dispatch(getCharacterByName(1, ''));
  };
  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={clearSearch}>
          Limpiar filtros
        </button>
      </div>
      <Filtros />
      <Paginacion />
      <GrillaPersonajes characters={characters} />
      <Paginacion />
    </div>
  );
};

export default PaginaInicio;
