import { create } from "zustand";
import { Expense } from "../types/expense";

type State = { expenses: Expense[]; parties: string[] };

type Actions = {
  setState: (expenses: Expense[], parties: string[]) => void;
};

export const useDataStore = create<State & Actions>((set) => ({
  expenses: [],
  parties: [],
  setState: (expenses, parties) => set(() => ({ parties, expenses })),
}));
