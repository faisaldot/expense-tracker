import { Hono } from "hono";

export const healthRoute = new Hono().get("/", (c) => {
  return c.newResponse("OK");
});
