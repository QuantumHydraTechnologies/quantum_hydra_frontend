import { createRouter, publicQuery } from "./middleware";
import { getDb } from "./queries/connection";

export const testimonialRouter = createRouter({
  list: publicQuery.query(async () => {
    return getDb().query.testimonials.findMany({
      orderBy: (testimonials, { desc }) => [desc(testimonials.createdAt)],
    });
  }),
});
