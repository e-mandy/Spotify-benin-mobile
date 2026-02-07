import { create } from "zustand";

interface ISearch {
  query: string;
  musicGenres: [string] | [];
  setQuery: (value: string) => void;
}

export const useSearchStore = create<ISearch>((set) => ({
  query: "",
  musicGenres: [],
  setQuery: (query: string) => set({ query: query }),
}));
