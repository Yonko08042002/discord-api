import { Hono } from "hono";

export const router = new Hono();

router
  .post("/sign-in", async (c) => {
    const { email, password } = await c.req.json();
    // const body = await c.req.parseBody();
    if (email === "tin.nguyen@gmail.com" && password === "!Enouvo123") {
      return c.json({ token: "124" });
    }
    return c.json({ error: "Invalid email or password" }, 401);
  })
  .get("/sign-up", (c) => c.json({ token: "124" }));
