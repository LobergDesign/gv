import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
export const RTE = ({ htmlContent }: Global.IRawHtmlComponentProps) => {
  return documentToReactComponents(htmlContent);
};
