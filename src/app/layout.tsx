import "~/styles/globals.css";

import { Inter as FontSans } from "next/font/google";

import { cn } from "~/lib/utils";
import { getMetadata } from "~/lib/seo";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = getMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-[100dvh] font-sans antialiased",
          fontSans.variable,
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
