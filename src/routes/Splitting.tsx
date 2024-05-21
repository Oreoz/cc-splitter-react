import React, { Fragment, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components";
import { SplitContext } from "../components/SplitProvider";
import { Expense } from "../types/expense";

type FlexProps = "flex-start" | "flex-end" | "center";

type Alignment = FlexProps | "baseline" | "stretch";

type Justification =
  | FlexProps
  | "space-between"
  | "space-around"
  | "space-evenly";

const Flex = styled.div<{ align?: Alignment; justify?: Justification }>`
  display: flex;
  align-items: ${(props) => props.align ?? "flex-start"};
  justify-content: ${(props) => props.justify ?? "flex-start"};
`;

const Col = styled(Flex)`
  flex-direction: column;
`;

const Money = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Separator = styled.div`
  height: 1px;
  background-color: #ababab;
`;

const Heading = styled.h3`
  margin: 0;
`;

const LinkButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
  padding: 0;
  margin-right: 8px;
`;

const Description = styled.div``;

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const Splitting = () => {
  const { state } = useContext(SplitContext);

  const [unassigned, setUnassigned] = useState(state?.expenses ?? []);
  const [assignments, setAssignments] = useState<any>({});

  const history = useHistory();

  if (!state) {
    history.push("/");
    return <></>;
  }

  const handleOnClick = (index: number, expense: Expense) => {
    const copy = { ...assignments };

    if (!Array.isArray(copy[`${index}`])) copy[`${index}`] = [];
    copy[`${index}`] = [...copy[`${index}`], expense];

    setAssignments({ ...copy });
    setUnassigned(unassigned.filter((element) => element !== expense));
  };

  return (
    <Container>
      <Flex justify="space-between">
        {state.parties.map((party, index) => (
          <Col key={index}>
            <div>{party}</div>

            <Money>
              {assignments[index]
                ? formatter.format(
                    assignments[index].reduce(
                      (acc: number, current: Expense) => acc + current.amount,
                      0,
                    ),
                  )
                : formatter.format(0)}
            </Money>
          </Col>
        ))}
      </Flex>

      <Separator />

      {unassigned.map((e, index) => (
        <Fragment key={index}>
          <Flex
            style={{ margin: "16px 0" }}
            align="center"
            justify="space-between"
          >
            <Col>
              <Heading>{e.desc}</Heading>
              <Description>{e.date.format("MMM Do")}</Description>

              <Flex style={{ marginTop: 8 }}>
                {state.parties.map((p, index) => (
                  <LinkButton
                    key={index}
                    onClick={() => handleOnClick(index, e)}
                  >
                    Assign to {p}
                  </LinkButton>
                ))}
              </Flex>
            </Col>

            <Money style={{ color: e.amount > 0 ? "black" : "green" }}>
              {formatter.format(Math.abs(e.amount))}
            </Money>
          </Flex>

          <Separator />
        </Fragment>
      ))}
    </Container>
  );
};
