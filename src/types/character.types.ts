/**
 * Exporta la interfaz de los personajes
 */

export interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  episode: string[];
}
