import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("app", () => {
  it("works", () => {
    render(<App />);
    expect(screen.getByRole("navigation")).toBeVisible();
  });
});
