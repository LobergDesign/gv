declare namespace CMS {
  export interface IMeta {
    fields: {
      title: string;
      metaTitle: string;
      metaDescription: string;

      openGraphTitle: string;
      openGraphType: string;
      openGraphimage: any;
    };
  }
  export interface IFields {
    pageTitle: string;
    title: [Object];
    bodytext: [Object];
    phonenumber: string;
    email: string;
    linkedIn: string;
    facebook: string;
    profiletext: [Object];
    adresse: [Object];
    seoSettings: IMeta;
    bannerImage: any[];
  }
  export interface IAsideObj {
    phonenumber: string;
    email: string;
    profiletext: object;
    adresse: object;
    bannerImage: any[];
  }
  export interface IAside {
    data: CMS.IAsideObj;
  }
  export interface IPageObj {
    bodytext: any;
    title: any;
  }
  export interface IPage {
    data: CMS.IPageObj;
  }
  export interface IFooter {
    linkedIn: string;
    facebook: string;
  }
}
