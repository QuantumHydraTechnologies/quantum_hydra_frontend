import { createRouter, publicQuery } from "./middleware";
import { getDb } from "./queries/connection";

export const teamRouter = createRouter({
  list: publicQuery.query(async () => {
    return getDb().query.teamMembers.findMany({
      orderBy: (teamMembers, { asc }) => [asc(teamMembers.displayOrder)],
    });
  }),
});
