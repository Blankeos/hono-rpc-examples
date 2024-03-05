import { AppRouter } from "HonoAPI";
import { hc as honoClient } from "hono/client";

export const hc = honoClient<AppRouter>(
  `${import.meta.env.VITE_SERVER_URL}/api`
);
