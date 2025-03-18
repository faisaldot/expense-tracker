import { Hono } from "hono";

const expensesRoute = new Hono();

type Expense = {
  id: number;
  title: string;
  amount: number;
};

const fakeExpense: Expense[] = [
  { id: 1, title: "Bought a keyboard", amount: 2700 },
  { id: 2, title: "Bought a headphone", amount: 2400 },
  { id: 3, title: "Bought a bluetooth", amount: 390 },
];

expensesRoute.get("/", (c) => {
  return c.json({ expense: fakeExpense });
});

export { expensesRoute };
