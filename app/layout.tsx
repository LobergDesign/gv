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

const getData = async () => {
  const response = await contentfulClient().getEntries({
    content_type: "pageGladVinduer",
  });

  return response.items;
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();

  const fields = data[0].fields as unknown as CMS.IFields;

  const seoSettings = fields.seoSettings?.fields;
  return {
    title: seoSettings.metaTitle,
    description: seoSettings.metaDescription,
    openGraph: {
      title: seoSettings.openGraphTitle,
      type: seoSettings.openGraphType,
      description: seoSettings.metaDescription,
      images: seoSettings.openGraphimage[0].original_secure_url,
    } as any,
  };
}

// export const metadata: Metadata = {
//   title: "Glad vinduer",
//   description: "glad vinduer københavns lokale vinduespudser",
//   openGraph: {
//     title: "og:title",
//     description: "og:description",
//     images:
//       "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzw0r5i7d%2Fimage%2Fupload%2Ff_auto%2Fq_auto%2Fv1704457954%2Fwebsite%2Fgladvinduer_qx2o1r.png&w=1200&q=75",
//   },
// };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();

  const fields = data[0].fields as unknown as CMS.IFields;

  const {
    phonenumber,
    email,
    profiletext,
    adresse,
    bannerImage,
    linkedIn,
    facebook,
  } = fields;

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
            <Footer linkedIn={linkedIn} facebook={facebook} />
          </div>
        </div>
      </body>
    </html>
  );
}
