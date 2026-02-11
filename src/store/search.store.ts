import { create } from "zustand";

interface ISearch {
  query: string;
  musicGenres: [string] | [];
  setQuery: (value: string) => void;
  searchResult: any[] | null;
  setResults: (results: any[] | null) => void;
}

export const useSearchStore = create<ISearch>((set) => ({
  query: "",
  musicGenres: [],
  searchResult: [],

  setQuery: (query: string) => set({ query: query }),
  setResults: (results: any[]) => set({ searchResult: results }),
}));
