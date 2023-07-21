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
import { Providers } from "~/app/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning // needed for next-themes, only suppresses for this element
    >
      <body className={bodyCss}>
        <Providers>
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
        </Providers>
      </body>
    </html>
  );
}
