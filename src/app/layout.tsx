import "~/styles/globals.css";

import { Inter as FontSans } from "next/font/google";

import { cn } from "~/lib/utils";
import { getSeoTags, getViewport } from "~/lib/seo";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = getSeoTags();

export const viewport = getViewport();

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-[100dvh] bg-slate-50 font-sans antialiased",
          fontSans.variable,
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
