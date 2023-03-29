import { FC } from 'react';
import { Character } from '../../types';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { RootStateOrAny, useSelector } from 'react-redux';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * @param {Character[]} characters
 * @returns {JSX.Element}
 */

const GrillaPersonajes: FC<{ characters: Array<Character> }> = ({
  characters,
}) => {
  const { isLoading, errorMessage } = useSelector(
    (state: RootStateOrAny) => state.characters
  );
  return (
    <div className="grilla-personajes">
      {isLoading || errorMessage ? (
        <div className="loading">
          <h3>{errorMessage || 'Cargando...'}</h3>
        </div>
      ) : (
        characters.map((character: Character) => (
          <TarjetaPersonaje characters={character} key={character.id} />
        ))
      )}
    </div>
  );
};

export default GrillaPersonajes;
