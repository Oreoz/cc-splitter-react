import { render, screen } from "@testing-library/react";
import React from "react";
import { Button } from "./button";

describe("button", () => {
  it("has sensible defaults", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toHaveClass("button", "md", "primary");
  });
});
