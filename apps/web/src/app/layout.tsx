import { RootHeader } from "@/app/header";
import {
  bodyCss,
  footerContentCss,
  footerCss,
  mainContentCss,
} from "@/app/layout.css";

import "@/app/reset.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bodyCss}>
        <RootHeader />
        <main className={mainContentCss}>{children}</main>
        <footer className={footerCss}>
          <div className={footerContentCss}>
            © Omar Diab, {new Date().getFullYear()}
          </div>
        </footer>
      </body>
    </html>
  );
}
