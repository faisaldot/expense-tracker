import { hc } from "hono/client";
import { type ExpensesApiType } from "../../../server";

const client = hc<ExpensesApiType>("/");

export const api = client.api;
