import { exampleRouter } from "npm/server/api/routers/example";
import { createTRPCRouter } from "npm/server/api/trpc";
import { projectRouter } from "./routers/projects";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  project: projectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
