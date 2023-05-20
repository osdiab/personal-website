import { siteHeaderCss } from "./layout.css";
import Logo from "@/app/logo.svg";

import "./reset.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        <header className={siteHeaderCss}>
          <Logo />
          <span>Omar Diab</span>
          <span>Yo</span>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
