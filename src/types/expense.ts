import moment from "moment";

export interface Expense {
  amount: number;
  date: moment.Moment;
  desc: string;
}
