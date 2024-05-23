import { Moment } from "moment";

export type Expense = {
  amount: number;
  date: Moment;
  desc: string;
};
