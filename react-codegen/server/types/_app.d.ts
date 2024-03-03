/**
 * The base router. Include all the routes here from `./routes/*`
 */
export declare const appRouter: import("hono/hono-base").HonoBase<import("hono").Env, import("hono/types").MergeSchemaPath<import("hono").ToSchema<"get", "/", unknown, {}>, "/hono"> & import("hono/types").MergeSchemaPath<import("hono").ToSchema<"get", "/", unknown, {
    users: {
        id: number;
        name: string;
        age: number;
    }[];
}> & import("hono").ToSchema<"get", "/:id", unknown, {
    id: number;
    name: string;
    age: number;
}>, "/users">, "/">;
/** Exported type definition for the hono/client. */
export type AppRouter = typeof appRouter;
