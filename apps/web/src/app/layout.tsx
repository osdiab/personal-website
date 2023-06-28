import "@/app/index.css";
import { RootHeader } from "@/app/header";

import { css, cx } from "@/panda-css/css";
import { hstack } from "@/panda-css/patterns";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootHeader />
        <div className={cx(hstack(), css({ color: "green.400" }))}>
          <span>hello</span>
          <span>hello</span>
          <span>hello</span>
        </div>
        <main>{children}</main>
        <footer>
          <div>
            <div>
              <span>© Omar Diab, {new Date().getFullYear()}</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
