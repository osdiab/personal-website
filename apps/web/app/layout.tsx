import { stackCss } from "./stack.css";
import "./reset.css";
import { siteHeaderCss } from "./layout.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={siteHeaderCss}>
          <span>Omar Diab</span>
          <span>Yo</span>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
