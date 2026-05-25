import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { projects } from "@db/schema";
import { eq } from "drizzle-orm";

export const projectRouter = createRouter({
  list: publicQuery.query(async () => {
    return getDb().query.projects.findMany({
      orderBy: (projects, { desc }) => [desc(projects.createdAt)],
    });
  }),
  bySlug: publicQuery
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      return getDb().query.projects.findFirst({
        where: eq(projects.slug, input.slug),
      });
    }),
});
