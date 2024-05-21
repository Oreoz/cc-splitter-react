import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../components";
import { BillTextArea } from "../components/BillTextArea";
import { SplitContext } from "../components/SplitProvider";
import { Expense } from "../types/expense";

export const Index = () => {
  const [parties, setParties] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const { setState } = useContext(SplitContext);

  const history = useHistory();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setState!({ parties: parties.split(",").map((p) => p.trim()), expenses });

    history.push("splitting");
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
        Split
      </Button>
    </form>
  );
};
