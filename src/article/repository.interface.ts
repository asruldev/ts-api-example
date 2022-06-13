import { ArticleRequestModel, ArticleResponseModel } from "./model";

export interface ArticleRepository {
    createArticle(contact: ArticleRequestModel): void;
    getArticles(): Promise<ArticleResponseModel[]>;
}