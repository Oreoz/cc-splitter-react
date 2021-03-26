import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { SplitProvider } from "./components/SplitProvider";
import { Navbar } from "./Navbar";
import { Index } from "./routes/Index";
import { Splitting } from "./routes/Splitting";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const FillViewport = styled.div`
  display: flex;
  flex: 1;
`;

function App() {
  return (
    <FlexWrapper>
      <Navbar />

      <FillViewport>
        <SplitProvider>
          <Router>
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/splitting" component={Splitting} />
            </Switch>
          </Router>
        </SplitProvider>
      </FillViewport>
    </FlexWrapper>
  );
}

export default App;
