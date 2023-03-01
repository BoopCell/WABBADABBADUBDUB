export type Info = {
  count: number;
  pages: number;
  next: string;
  prev: null;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Object;
  location: Object;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type CharacterResponse = {
  info: Info;
  results: Character[];
};

export type LocationResponse = {
  info: Info;
  results: Location[];
};

export type EpisodeResponse = {
  info: Info;
  results: Episode[];
};
