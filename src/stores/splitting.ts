import { create } from "zustand";

type State = { splitting: boolean };

type Actions = { setSplitting: (splitting: boolean) => void };

export type SplittingStore = State & Actions;

export const useSplittingStore = create<SplittingStore>((set) => ({
  splitting: false,
  setSplitting: (splitting: boolean) => set(() => ({ splitting })),
}));
