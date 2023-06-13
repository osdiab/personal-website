import { RootHeader } from "@/app/header";
import { contentCss } from "@/app/layout.css";

import "@/app/reset.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={contentCss}>
        <RootHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
