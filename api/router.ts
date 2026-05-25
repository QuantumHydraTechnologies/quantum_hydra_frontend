import { authRouter } from "./auth-router";
import { contactRouter } from "./contact-router";
import { newsletterRouter } from "./newsletter-router";
import { projectRouter } from "./project-router";
import { testimonialRouter } from "./testimonial-router";
import { teamRouter } from "./team-router";
import { createRouter, publicQuery } from "./middleware";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  auth: authRouter,
  contact: contactRouter,
  newsletter: newsletterRouter,
  project: projectRouter,
  testimonial: testimonialRouter,
  team: teamRouter,
});

export type AppRouter = typeof appRouter;
