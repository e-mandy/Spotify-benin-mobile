import { create } from "zustand";

interface IGenreStore {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export const useGenreStore = create<IGenreStore>((set) => ({
  currentSection: "Tout",
  setCurrentSection: (section) => set({ currentSection: section }),
}));
