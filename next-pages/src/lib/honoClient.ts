import { hc as honoClient } from "hono/client";
import type { AppRouter } from "@/server/_app";

export const hc = honoClient<AppRouter>("http://localhost:3000/api");
