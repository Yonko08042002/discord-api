import { Hono } from "hono";

import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { router as authRouter } from "./modules/auth/auth.controller";
import { router as orgsRouter } from "./modules/orgs/orgs.controller";
import { router as uploadRouter } from "./modules/upload/upload.controller";
import { serve } from "@hono/node-server";

const app = new Hono().basePath("/api");

app.use("*", logger());
app.use(
  "*",
  cors({
    origin: ["http://localhost:5173", "https://clone-discord-drab.vercel.app"],
    credentials: true,
  })
);

app.route("/", authRouter);
app.route("/orgs", authRouter);
app.route("/upload", uploadRouter);

serve(app, () => {
  console.log("Server is running on http://localhost:3000");
});
