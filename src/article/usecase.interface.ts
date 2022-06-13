import { ArticleRequestModel, ArticleResponseModel } from "./model";

export interface GetAllArticlesUseCase {
  execute(): Promise<ArticleResponseModel[]>;
}

export interface CreateArticleUseCase {
  execute(article: ArticleRequestModel): void;
}