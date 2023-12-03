import { Hono } from "hono";
import { handle } from "hono/vercel";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.get("/", (c) => c.json({ message: "Hello Hono!" }));

app
  .post("/sign-in", async (c) => {
    const { email, password } = await c.req.json();

    if (email === "son.tran@gmail.com" && password === "!Enouvo123") {
      return c.json({ token: "124" });
    }
    return c.json({ error: "Invalid email or password" }, 401);
  })
  .post("/sign-up", (c) => c.json({ token: "124" }));
  
export default handle(app);
