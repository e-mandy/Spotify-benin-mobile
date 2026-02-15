import { create } from "zustand";

interface ISearch {
  query: string;
  musicGenres: any[];
  setQuery: (value: string) => void;
  searchResult: any | null;
  setResults: (results: any[] | null) => void;
  currentGenre: string;
  setCurrentGenre: (genre: string) => void;
  setGenreName: (genres: any[]) => void;
  allGenreName: any[];
  genreInfos: any[];
  setGenreInfos: (genreInfos: any[]) => void;
}

export const useSearchStore = create<ISearch>((set) => ({
  query: "",
  musicGenres: [],
  searchResult: [],
  currentGenre: "",
  genreInfos: null,
  allGenreName: [],

  setQuery: (query: string) => set({ query: query }),
  setResults: (results: any[]) => set({ searchResult: results }),
  setCurrentGenre: (genre: string) => set({ currentGenre: genre }),
  setGenreInfos: (genreInfos: any[]) => set({ genreInfos: genreInfos }),
  setGenreName: async (genre: any[]) => set({ allGenreName: genre }),
}));
