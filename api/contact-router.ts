import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { contacts } from "@db/schema";

export const contactRouter = createRouter({
  create: publicQuery
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email address"),
        subject: z.string().optional(),
        message: z.string().min(1, "Message is required"),
      })
    )
    .mutation(async ({ input }) => {
      await getDb().insert(contacts).values({
        name: input.name,
        email: input.email,
        subject: input.subject || null,
        message: input.message,
      });
      return { success: true };
    }),
});
