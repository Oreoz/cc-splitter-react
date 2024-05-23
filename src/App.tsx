import React from "react";
import { Container, Nav } from "./components";
import { Index } from "./routes/Index";
import { Splitting } from "./routes/Splitting";
import { useSplittingStore } from "./stores/splitting";

export const App = () => {
  const { splitting } = useSplittingStore();

  return (
    <>
      <Nav />
      <Container>{splitting ? <Splitting /> : <Index />}</Container>
    </>
  );
};
