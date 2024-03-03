import { Hono } from "hono";
import { serveStatic } from "hono/bun";

export const codegenRouter = new Hono().get("/", async (c) => {
  const file = Bun.file("./types/hono.d.ts");

  const text = await file.text();
  console.log(text);
  return c.text(text);
});
