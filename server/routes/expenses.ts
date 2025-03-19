import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const expenseSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(3).max(100),
  amount: z.number().int().positive(),
});

const createPostSchema = expenseSchema.omit({ id: true });

type Expense = z.infer<typeof expenseSchema>;

const fakeExpense: Expense[] = [
  { id: 1, title: "Bought a keyboard", amount: 2700 },
  { id: 2, title: "Bought a headphone", amount: 2400 },
  { id: 3, title: "Bought a bluetooth", amount: 390 },
];

const expensesRoute = new Hono()
  .get("/", (c) => {
    return c.json({ expenses: fakeExpense });
  })
  .post("/", zValidator("json", createPostSchema), async (c) => {
    const expense = c.req.valid("json");

    if (!expense) {
      return c.notFound();
    }

    fakeExpense.push({ ...expense, id: fakeExpense.length + 1 });
    return c.json(expense);
  })
  .get("/:id{[0-9]+}", async (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const expense = fakeExpense.find((expense) => expense.id === id);

    if (!expense) {
      return c.notFound();
    }

    return c.json({ expense });
  })
  .delete("/:id{[0-9]+}", async (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const index = fakeExpense.findIndex((expense) => expense.id === id);
    const expense = fakeExpense.splice(index, id)[0];

    if (!expense) {
      return c.notFound();
    }

    return c.json({ expense });
  })
  .get("/total-spent", async (c) => {
    const total = fakeExpense.reduce((acc, expense) => acc + expense.amount, 0);
    if (!total) {
      return c.notFound();
    }
    return c.json({ total });
  });

export { expensesRoute };
