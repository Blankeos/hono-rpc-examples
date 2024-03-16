import * as hono_hono_base from 'hono/hono-base';
import * as hono_types from 'hono/types';
import * as hono from 'hono';

/**
 * The base router. Include all the routes here from `./routes/*`
 */
declare const appRouter: hono_hono_base.HonoBase<hono.Env, hono_types.MergeSchemaPath<hono.ToSchema<"get", "/", unknown, {}>, "/hono"> & hono_types.MergeSchemaPath<hono.ToSchema<"get", "/", unknown, {
    users: {
        id: number;
        name: string;
        age: number;
    }[];
}> & hono.ToSchema<"get", "/:id", unknown, {
    id: number;
    name: string;
    age: number;
}>, "/users">, "/">;
/** Exported type definition for the hono/client. */
type AppRouter = typeof appRouter;

export { type AppRouter, appRouter };
