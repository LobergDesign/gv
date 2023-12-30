import type { Metadata } from "next";
// styles
import "@/styles/main.scss";
import styleGrid from "@/styles/base/grid.module.scss";
// components
import Header from "@/app/ui/layout/header/header";
import Footer from "@/app/ui/layout/footer/footer";
import Aside from "@/app/ui/section/aside/aside";

export const metadata: Metadata = {
  title: "Glad vinduer",
  description: "gladvinduer københavns lokale vinduespudser",
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
            <div className={`${styleGrid.collg6} ${styleGrid.colmd12}`}>
              <div className={styleGrid.row}>
                <div className={styleGrid.col12}>
                  <Header />
                </div>
                <main className={styleGrid.col12}>{children}</main>
              </div>
            </div>
            <div className={`${styleGrid.collg6} ${styleGrid.colmd12}`}>
              <Aside />
            </div>
          </div>
          <div className={styleGrid.col12}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
