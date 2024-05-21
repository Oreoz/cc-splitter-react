import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Container, Nav } from "./components";
import { SplitProvider } from "./components/SplitProvider";
import { Index } from "./routes/Index";
import { Splitting } from "./routes/Splitting";

export const App = () => {
  return (
    <SplitProvider>
      <Nav />
      <Container>
        <Router>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/splitting" component={Splitting} />
          </Switch>
        </Router>
      </Container>
    </SplitProvider>
  );
};
