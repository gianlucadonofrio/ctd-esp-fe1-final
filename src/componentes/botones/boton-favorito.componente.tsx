import { FC } from 'react';
import './boton-favorito.css';
import { Character } from '../../types';
import { useDispatch, RootStateOrAny } from 'react-redux';
import { toggleFavoriteThunk } from '../../store/thunks';
import { useSelector } from '../../store/store';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * @param {Character} character
 * @returns {JSX.Element}
 */
const BotonFavorito: FC<{ characters: Character }> = ({ characters }) => {
  const dispatch = useDispatch();
  const { charactersFavorites } = useSelector(
    (state: RootStateOrAny) => state.favorites
  );

  const handleFavorites = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(toggleFavoriteThunk(characters));
  };

  const src = charactersFavorites.find(
    (character: Character) => character.id === characters.id
  )
    ? '/imagenes/star-filled.png'
    : '/imagenes/star.png';

  return (
    <div className="boton-favorito" onClick={handleFavorites}>
      <img alt={'favorito'} id={characters.name} src={src} />
    </div>
  );
};

export default BotonFavorito;
