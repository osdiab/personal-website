import "@/app/index.css";
import { RootHeader } from "@/app/header";
import {
  bodyCss,
  footerContentCss,
  footerCss,
  footerWrapperCss,
  mainContentCss,
} from "@/app/layout.css";

import { css, cx } from "@/panda-css/css";
import { hstack } from "@/panda-css/patterns";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bodyCss}>
        <RootHeader />
        <div className={cx(hstack(), css({ color: "green.400" }))}>
          <span>hello</span>
          <span>hello</span>
          <span>hello</span>
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
