import { create } from "zustand";

interface IGenreStore {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  currentGenreInfo: any[];
  setCurrentGenreInfo: (genreInfo: any) => void;
}

export const useGenreStore = create<IGenreStore>((set) => ({
  currentSection: "Tout",
  setCurrentSection: (section) => set({ currentSection: section }),
  currentGenreInfo: [],
  setCurrentGenreInfo: (genreInfo: any[]) =>
    set({ currentGenreInfo: genreInfo }),
}));
