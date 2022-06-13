import { ContactRequestModel } from "../contact/model";

export interface ArticleResponseModel {
  id: number;
  title: string;
  body: string;
  contact: ContactRequestModel 
}

export interface ArticleRequestModel {
  title: string;
  body: string;
}