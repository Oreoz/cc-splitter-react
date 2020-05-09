import React, { useState } from "react";
import styled from "styled-components";
import { BUTTON_PRIMARY } from "../colors";
import { Container } from "../components";
import { BillTextArea } from "../components/BillTextArea";
import { Expense } from "../types/expense";

const Button = styled.button`
  height: 32px;
  border-radius: 12px;
  border: solid 1px ${BUTTON_PRIMARY};
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  color: ${BUTTON_PRIMARY};

  transition: background-color 0.4s ease;

  &:active,
  :hover {
    color: white;
    background-color: ${BUTTON_PRIMARY};
  }
`;

export const Index = () => {
  const [parties, setParties] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleOnSubmit = () => {};

  return (
    <Container>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleOnSubmit}
      >
        <label htmlFor="parties">Parties</label>

        <input
          type="text"
          name="parties"
          value={parties}
          onChange={e => setParties(e.target.value)}
        />

        <BillTextArea onChange={parsed => setExpenses(parsed)} />

        <Button className="mt-2" type="submit">
          Split
        </Button>
      </form>
    </Container>
  );
};
