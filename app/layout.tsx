import type { Metadata } from "next";
// styles
import "@/styles/main.scss";
import styleGrid from "@/styles/base/grid.module.scss";
// components
import Header from "@/app/ui/layout/header/header";

export const metadata: Metadata = {
  title: "Learning next",
  description: "ZzzZZz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da-DK">
      <body suppressHydrationWarning={true}>
        <div className={`${styleGrid.wrap}`}>
          <div className={styleGrid.row}>
            <div className={styleGrid.col6}>
              <Header />
            </div>
            <main className={styleGrid.col6}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
