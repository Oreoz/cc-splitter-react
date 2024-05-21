import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SplitProvider } from "./components/SplitProvider";
import { Index } from "./routes/Index";
import { Splitting } from "./routes/Splitting";
import { Nav } from "./components";

function App() {
  return (
    <div>
      <Nav />

      <SplitProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/splitting" component={Splitting} />
          </Switch>
        </Router>
      </SplitProvider>
    </div>
  );
}

export default App;
