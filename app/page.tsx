// data
import contentfulClient from "@/app/lib/client";
import { RTE } from "@/app/ui/atoms/rte/rte";

const getData = async () => {
  const response = await contentfulClient().getEntries({
    content_type: "pageGladVinduer",
  });

  return response.items;
};
export default async function Home() {
  const data = await getData();

  const fields = data[0].fields as unknown as CMS.IFields;
  const { bodytext, title } = fields;
  const pageObj: CMS.IPageObj = {
    bodytext,
    title,
  };
  return (
    <main>
      {pageObj.title && <h1>{<RTE htmlContent={pageObj.title} />}</h1>}
      {pageObj.bodytext && <RTE htmlContent={pageObj.bodytext} />}
    </main>
  );
}
