import React, { FC, useState } from "react";
import { Expense } from "../types/expense";

export const SplitContext = React.createContext<{
  state?: SplitState;
  setState?: React.Dispatch<React.SetStateAction<SplitState | undefined>>;
}>({});

interface SplitState {
  expenses: Expense[];
  parties: string[];
}

export const SplitProvider: FC = ({ children }) => {
  const [state, setState] = useState<SplitState>();

  return (
    <SplitContext.Provider value={{ state, setState }}>
      {children}
    </SplitContext.Provider>
  );
};
