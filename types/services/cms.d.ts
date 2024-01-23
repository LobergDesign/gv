declare namespace CMS {
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
    seoSettings: [Object];
  }
  export interface IAsideObj {
    phonenumber: string;
    email: string;
    profiletext: object;
    adresse: object;
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
}
