declare namespace Global {
  export interface IImage {
    src: string;
    alt: string;
    width: number;
    height: number;
    layout?: string;
    loading?: "lazy" | "eager";
  }

  export interface IRawHtmlComponentProps {
    htmlContent: any;
  }
}
