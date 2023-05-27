import { siteHeaderCss } from "./layout.css";
import Logo from "@/app/logo.svg";

import "../common/styles/reset.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
