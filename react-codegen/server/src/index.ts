import { Hono } from "hono";
import { cors } from "hono/cors";
import { appRouter } from "./routes/_app";

const app = new Hono()
  .use("*", cors())
  .get("/", async (c) => {
    return c.json({ health: "Active" });
  })
  .basePath("/api");

app.route("/", appRouter);

export default {
  port: 4001,
  fetch: app.fetch,
};
