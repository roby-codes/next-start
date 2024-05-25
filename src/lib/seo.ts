import { type Metadata } from "next";
import { appData as app } from "~/config/app-data";

export const getMetadata = (): Metadata => ({
  metadataBase: new URL(app.domain),
  applicationName: app.name,
  title: app.name,
  description: app.description,
  keywords: app.keywords,
  authors: { name: app.creator.name, url: app.creator.link },
  creator: app.creator.name,
  openGraph: {
    siteName: app.name,
    title: app.name,
    description: app.description,
    type: "website",
    locale: "en",
    url: new URL(app.domain),
    images: `${app.domain}/seo/image.jpg`,
  },
  twitter: {
    title: app.name,
    description: app.description,
    site: app.domain,
    images: `${app.domain}/seo/image.jpg`,
  },
});
