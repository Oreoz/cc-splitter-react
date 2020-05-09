import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: 60px;
  background: #41b3a3;
  display: flex;
  align-items: center;
  color: white;
`;

const Logo = styled.div`
  margin: 0 16px;
  font-size: 24px;
`;

export const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <span role="img" aria-label="Credit Card">
          💳
        </span>{" "}
        Splitter
      </Logo>
    </Nav>
  );
};
