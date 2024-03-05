import { Hono } from "hono";
import { userRouter } from "./userRouter";
import { codegenRouter } from "./codegenRouter";

const app = new Hono();

/**
 * The base router. Include all the routes here from `./routes/*`
 */
export const appRouter = app
  .route("/users", userRouter)
  .route("/hono", codegenRouter);

/** Exported type definition for the hono/client. */
export type AppRouter = typeof appRouter;
