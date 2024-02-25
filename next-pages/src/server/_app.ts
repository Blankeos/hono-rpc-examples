import { Hono } from "hono";
import { userRouter } from "./routes/userRouter";

const app = new Hono();

/**
 * The base router. Include all the routes here from `./routes/*`
 */
export const appRouter = app.route("/users", userRouter);

/** Exported type definition for the hono/client. */
export type AppRouter = typeof appRouter;
