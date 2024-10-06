import { getSiteStats } from "~/utils/siteCounter.server";

export const loader = async () => {
  return await getSiteStats();
};

export type SiteStats = typeof loader;
