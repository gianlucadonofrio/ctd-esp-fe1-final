import './Detalle.css';
import BotonFavorito from '../componentes/botones/boton-favorito.componente';
import TarjetaEpisodio from '../componentes/episodios/tarjeta-episodio.componente';
import { FC, useEffect, useState } from 'react';
import { Character } from '../types/character.types';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getEpisodesThunk } from '../store/thunks/episodeThunk';
import { Episode } from '../types';
/** * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 *
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalle /> ```
 *
 * @returns {JSX.Element}
 */
const PaginaDetalle: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const state: any = location.state;
  const character: Character = { ...state?.characters };
  const [arrayEpisodeID, setArrayEpisodeID] = useState<(string | undefined)[]>(
    []
  );

  const { episodes } = useSelector((state: any) => state.episodes);

  useEffect(() => {
    const array: (string | undefined)[] = character.episode?.map((episode) => {
      return episode.split('/').at(-1);
    });
    setArrayEpisodeID(array);
  }, [character.episode]);

  useEffect(() => {
    dispatch(getEpisodesThunk(arrayEpisodeID));
  }, [dispatch, arrayEpisodeID]);
  return (
    <>
      {state?.characters ? (
        <div className="container">
          <h3>{character.name}</h3>
          <div className={'detalle'}>
            <div className={'detalle-header'}>
              <img src={character.image} alt={character.name} />
              <div className={'detalle-header-texto'}>
                <p>{character.name}</p>
                <p>Planeta: {character.origin.name}</p>
                <p>Genero: {character.gender}</p>
              </div>
              <BotonFavorito characters={character} />
            </div>
          </div>
          <h4>Lista de episodios donde apareció el personaje</h4>
          <div className={'episodios-grilla'}>
            {Array.isArray(episodes) ? (
              episodes.map((episode: Episode) => (
                <TarjetaEpisodio key={episode.id} episode={episode} />
              ))
            ) : (
              <TarjetaEpisodio key={episodes.id} episode={episodes} />
            )}
          </div>
        </div>
      ) : (
        <div className="container">
          <h3>No se selecciono ningun personaje!</h3>
        </div>
      )}
    </>
  );
};

export default PaginaDetalle;
