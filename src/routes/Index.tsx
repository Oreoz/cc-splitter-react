import React, { useState } from "react";
import { Container } from "../components";

export const Index = () => {
  const [parties, setParties] = useState("");
  const [data, setData] = useState("");

  return (
    <Container>
      <label htmlFor="parties">Parties</label>

      <input
        type="text"
        name="parties"
        value={parties}
        onChange={(e) => setParties(e.target.value)}
      />

      <label htmlFor="bill-data" className="mt-2">
        Bill Data
      </label>

      <textarea
        name="bill-data"
        style={{ height: 100 }}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button className="mt-2" type="submit">
        Submit
      </button>
    </Container>
  );
};
