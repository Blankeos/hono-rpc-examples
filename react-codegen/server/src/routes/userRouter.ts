import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

/** Fake database */
const users = [
  {
    id: 1,
    name: "John",
    age: 20,
  },
  {
    id: 2,
    name: "Carlo",
    age: 22,
  },
];

export const userRouter = new Hono()
  .get(
    "/",
    // You can use this to validate inputs in POST.
    // zValidator(
    //   "json",
    //   z.object({
    //     id: z.number(),
    //   })
    // ),
    async (c) => {
      return c.json({
        users: users,
      });
    }
  )
  .get("/:id", async (c) => {
    const id = c.req.param("id");

    if (!id) throw Error("No Id found.");

    let _id: number;
    try {
      _id = parseInt(id);
    } catch (e) {
      throw Error("Invalid Id. Must be int.");
    }

    const user = users.find((u) => u.id === _id);

    if (!user) throw Error("User not found.");

    return c.json(user);
  });
