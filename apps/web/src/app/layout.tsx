import { RootHeader } from "~/app/header";
import {
  bodyCss,
  footerContentCss,
  footerCss,
  footerWrapperCss,
  mainContentCss,
} from "~/app/layout.css";

import "~/app/global.css";
import { hstack } from "~pandacss/patterns";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bodyCss}>
        <RootHeader />
        <div className={hstack()}>
          <span>Hi</span>
          <span>Hi</span>
          <span>Hi</span>
        </div>
        <main className={mainContentCss}>{children}</main>
        <footer className={footerCss}>
          <div className={footerWrapperCss}>
            <div className={footerContentCss}>
              <span>© Omar Diab, {new Date().getFullYear()}</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
