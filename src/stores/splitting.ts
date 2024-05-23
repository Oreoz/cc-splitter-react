import { create } from "zustand";

type State = { splitting: boolean };

type Actions = { setSplitting: (splitting: boolean) => void };

export const useSplittingStore = create<State & Actions>((set) => ({
  splitting: false,
  setSplitting: (splitting: boolean) => set(() => ({ splitting })),
}));
