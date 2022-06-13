import { ArticleRepositoryImpl } from "./repository";
import {
 GetAllArticle,
 CreateArticle
} from "./usecase";
import ArticlesRouter from "./router";

export const ArticleMidleware = (dataSource: any) => {
  return ArticlesRouter(
    new GetAllArticle(new ArticleRepositoryImpl(dataSource)),
    new CreateArticle(new ArticleRepositoryImpl(dataSource)),
  );
};
