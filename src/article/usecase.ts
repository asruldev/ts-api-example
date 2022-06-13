import { ArticleRequestModel, ArticleResponseModel } from "./model";
import { ArticleRepository } from "./repository.interface";
import {
  CreateArticleUseCase, GetAllArticlesUseCase
} from "./usecase.interface";

export class GetAllArticle implements GetAllArticlesUseCase {
  articleRepository: ArticleRepository;
  constructor(articleRepository: ArticleRepository) {
    this.articleRepository = articleRepository;
  }

  async execute(): Promise<ArticleResponseModel[]> {
    const result = await this.articleRepository.getArticles();
    return result;
  }
}

export class CreateArticle implements CreateArticleUseCase {
  articleRepository: ArticleRepository;
  constructor(articleRepository: ArticleRepository) {
    this.articleRepository = articleRepository;
  }

  async execute(article: ArticleRequestModel) {
    await this.articleRepository.createArticle(article);
  }
}
