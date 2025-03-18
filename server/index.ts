import { Hono } from "hono";
import { logger } from "hono/logger";
import { expensesRoute } from "./routes/expenses";
import { healthRoute } from "./routes/health";

const PORT = process.env.PORT || 3001;

const app = new Hono();

app.use(logger());

app.route("/api/health", healthRoute);
app.route("/api/expenses", expensesRoute);

export default {
  port: PORT,
  fetch: app.fetch,
};
