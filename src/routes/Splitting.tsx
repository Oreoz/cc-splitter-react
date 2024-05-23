import React, { Fragment, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SplitContext } from "../components/SplitProvider";
import { Expense } from "../types/expense";
import { Button, Heading, Separator } from "../components";

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
    <>
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

              <Flex style={{ marginTop: 8, gap: 8 }}>
                {state.parties.map((p, index) => (
                  <Button
                    kind="secondary"
                    key={index}
                    onClick={() => handleOnClick(index, e)}
                    size="sm"
                  >
                    Assign to {p}
                  </Button>
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
    </>
  );
};
