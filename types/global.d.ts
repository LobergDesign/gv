declare namespace Global {
  export interface IImage {
    src: string;
    alt: string;
    width: number;
    height: number;
    layout: string;
  }

  export interface IRawHtmlComponentProps {
    htmlContent: any;
  }
}
