import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { newsletterSubscribers } from "@db/schema";

export const newsletterRouter = createRouter({
  subscribe: publicQuery
    .input(
      z.object({
        email: z.string().email("Invalid email address"),
      })
    )
    .mutation(async ({ input }) => {
      await getDb()
        .insert(newsletterSubscribers)
        .values({
          email: input.email,
        })
        .onDuplicateKeyUpdate({
          set: { active: "true" },
        });
      return { success: true };
    }),
});
