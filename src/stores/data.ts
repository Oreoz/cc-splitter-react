import { create } from "zustand";
import { Expense } from "../types/expense";

type State = { expenses: Expense[]; parties: string[] };

type Actions = {
  setState: (expenses: Expense[], parties: string[]) => void;
};

export type DataStore = State & Actions;

export const useDataStore = create<DataStore>((set) => ({
  expenses: [],
  parties: [],
  setState: (expenses, parties) => set(() => ({ parties, expenses })),
}));
