import moment from "moment";
import React, { useState } from "react";
import { Expense } from "../types/expense";

const FRENCH_MASTER_CARD_PATTERN =
  /(\d{2} \d{2}) (.*) (\d{2} \d{2}) (.*) (\d+\.\d+)(-{0,1})$/;

type Props = {
  onChange: (expenses: Expense[]) => void;
};

export const BillTextArea = ({ onChange }: Props) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    const parsed =
      value
        .split("\n")
        .map((line) => {
          const data = FRENCH_MASTER_CARD_PATTERN.exec(line);

          if (data) {
            const [_, date, __, ___, desc, amount, negative] = data;

            return {
              amount: negative ? Number(-amount) : Number(amount),
              date: moment(date, "MM DD"),
              desc,
            };
          }

          return null;
        })
        .filter((e): e is Expense => e !== null)
        .filter((e) => e.desc !== "PAIEMENT RECU MERCI!") ?? [];

    setExpenses(parsed);
    onChange(parsed);
  };

  return (
    <>
      <label htmlFor="bill-data" className="mt-2">
        Bill Data
      </label>

      <textarea
        name="bill-data"
        style={{ height: 100 }}
        onChange={handleOnChange}
      />

      <i className="mt-1">
        {expenses.length} expenses totaling{" "}
        {expenses.reduce((acc, current) => acc + current.amount, 0)}$ detected.
      </i>
    </>
  );
};
