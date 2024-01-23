import type { Metadata } from "next";
// styles
import "@/styles/main.scss";
import styleGrid from "@/styles/base/grid.module.scss";
// components
import Header from "@/app/ui/layout/header/header";
import Footer from "@/app/ui/layout/footer/footer";
import Aside from "@/app/ui/section/aside/aside";
// data
import contentfulClient from "@/app/lib/client";
export const metadata: Metadata = {
  title: "Glad vinduer",
  description: "glad vinduer københavns lokale vinduespudser",
};

const getData = async () => {
  const response = await contentfulClient().getEntries({
    content_type: "pageGladVinduer",
  });

  return response.items;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();

  const fields = data[0].fields as unknown as CMS.IFields;
  const { phonenumber, email, profiletext, adresse, bannerImage } = fields;

  const asideObj: CMS.IAsideObj = {
    phonenumber,
    email,
    profiletext,
    adresse,
    bannerImage,
  };

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
              <Aside data={asideObj!} />
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
