import { Hono } from "hono";
import { cors } from "hono/cors";
import { appRouter } from "./routes/_app";

const app = new Hono().basePath("/api");

app.use("*", cors());

app.route("/", appRouter);

export default {
  port: 4001,
  fetch: app.fetch,
};
