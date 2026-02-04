import { create } from "zustand";

interface ISearch {
  query: string;
  setQuery: (value: string) => void;
}

export const searchStore = create<ISearch>((set) => ({
  query: "",
  setQuery: (query: string) => set({ query: query }),
}));
