import { FC } from 'react';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { Character } from '../../types';
import { useNavigate } from 'react-router-dom';
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * @param {Character []} character
 * @returns {JSX.Element}
 */
const TarjetaPersonaje: FC<{ characters: Character }> = ({ characters }) => {
  let navigate = useNavigate();

  return (
    <>
      <div className="tarjeta-personaje">
        <img
          src={characters.image}
          alt={characters.name}
          onClick={() => {
            navigate(`/detalle`, { state: { characters } });
          }}
        />
        <div className="tarjeta-personaje-body">
          <span>{characters.name}</span>
          <BotonFavorito characters={characters} />
        </div>
      </div>
    </>
  );
};

export default TarjetaPersonaje;
