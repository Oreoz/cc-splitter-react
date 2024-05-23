import React, { Fragment, useContext, useState } from "react";
import { Button, Heading, Separator, Text } from "../components";
import { Expense } from "../types/expense";
import { useDataStore } from "../stores/data";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const Splitting = () => {
  const { expenses, parties } = useDataStore();

  const [unassigned, setUnassigned] = useState(expenses ?? []);
  const [assignments, setAssignments] = useState<any>({});

  const handleOnClick = (index: number, expense: Expense) => {
    const copy = { ...assignments };

    if (!Array.isArray(copy[`${index}`])) copy[`${index}`] = [];
    copy[`${index}`] = [...copy[`${index}`], expense];

    setAssignments({ ...copy });
    setUnassigned(unassigned.filter((element) => element !== expense));
  };

  return (
    <>
      <div className="flex j-space-between">
        {parties.map((party, index) => (
          <div className="flex column" key={index}>
            <div>{party}</div>

            <Text size="lg" weight="bold">
              {assignments[index]
                ? formatter.format(
                    assignments[index].reduce(
                      (acc: number, current: Expense) => acc + current.amount,
                      0,
                    ),
                  )
                : formatter.format(0)}
            </Text>
          </div>
        ))}
      </div>

      <Separator />

      {unassigned.map((e, index) => (
        <Fragment key={index}>
          <div
            className="flex a-center j-space-between"
            style={{ margin: "16px 0" }}
          >
            <div className="flex column">
              <Heading>{e.desc}</Heading>
              <Text>{e.date.format("MMM Do")}</Text>

              <div className="flex" style={{ marginTop: 8, gap: 8 }}>
                {parties.map((p, index) => (
                  <Button
                    kind="secondary"
                    key={index}
                    onClick={() => handleOnClick(index, e)}
                    size="sm"
                  >
                    Assign to {p}
                  </Button>
                ))}
              </div>
            </div>

            <Text
              size="lg"
              style={{ color: e.amount > 0 ? "black" : "green" }}
              weight="bold"
            >
              {formatter.format(Math.abs(e.amount))}
            </Text>
          </div>

          <Separator />
        </Fragment>
      ))}
    </>
  );
};
