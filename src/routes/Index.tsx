import React, { useState } from "react";
import { Button } from "../components";
import { BillTextArea } from "../components/BillTextArea";
import { useDataStore } from "../stores/data";
import { useSplittingStore } from "../stores/splitting";
import { Expense } from "../types/expense";

export const Index = () => {
  const [parties, setParties] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const { setSplitting } = useSplittingStore();
  const { setState } = useDataStore();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setState(
      expenses,
      parties.split(",").map((p) => p.trim()),
    );
    setSplitting(true);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleOnSubmit}
    >
      <label htmlFor="parties">Parties</label>

      <input
        type="text"
        name="parties"
        value={parties}
        onChange={(e) => setParties(e.target.value)}
      />

      <BillTextArea onChange={(parsed) => setExpenses(parsed)} />

      <Button className="mt-2" type="submit">
        Start splitting
      </Button>
    </form>
  );
};
