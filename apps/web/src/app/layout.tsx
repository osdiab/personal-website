import { RootHeader } from "~/app/header";
import {
  bodyContentCss,
  bodyCss,
  footerContentCss,
  footerCss,
  footerWrapperCss,
  mainContentCss,
} from "~/app/layout.css";

import "~/app/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-color-mode="light">
      <body className={bodyCss}>
        <RootHeader />
        <div className={bodyContentCss}>
          <main className={mainContentCss}>{children}</main>
          <footer className={footerCss}>
            <div className={footerWrapperCss}>
              <div className={footerContentCss}>
                <span>© Omar Diab, {new Date().getFullYear()}</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
