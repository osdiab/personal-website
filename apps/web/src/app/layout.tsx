import { logoCss, siteHeaderCss, siteTitleCss } from "./layout.css";
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
          <Logo className={logoCss} />
          <span className={siteTitleCss}>Omar Diab</span>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
