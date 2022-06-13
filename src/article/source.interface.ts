import {
  ArticleRequestModel,
  ArticleResponseModel,
} from "./model";

export interface ArticleDataSourceInterface {
  create(article: ArticleRequestModel): void;
  getAll(): Promise<ArticleResponseModel[]>;
}
