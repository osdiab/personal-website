import { RootHeader } from "@/app/header";
import "@/common/styles/reset.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
