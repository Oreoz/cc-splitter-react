import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./Navbar";
import { Index } from "./routes/Index";

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
        <Router>
          <Switch>
            <Route path="/" exact component={Index} />
          </Switch>
        </Router>
      </FillViewport>
    </FlexWrapper>
  );
}

export default App;
