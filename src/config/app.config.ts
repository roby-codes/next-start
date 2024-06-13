import { env } from "~/env";

export const appData: AppData = {
  name: "Next Start App",
  slug: "/",
  description: "Next Start App by Robert Kovacs",
  domain: env.DOMAIN,
  creator: {
    name: "Robert Kovacs",
    link: "https://github.com/roby-codes",
  },
  keywords: ["web app", "web site", "robert kovacs"],
  brandColor: "#FFFFFF",
};
