import { Hono } from "hono";
export declare const userRouter: Hono<import("hono").Env, import("hono").ToSchema<"get", "/", unknown, {
    users: {
        id: number;
        name: string;
        age: number;
    }[];
}> & import("hono").ToSchema<"get", "/:id", unknown, {
    id: number;
    name: string;
    age: number;
}>, "/">;
