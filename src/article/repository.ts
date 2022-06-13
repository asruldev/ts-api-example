import { ArticleRepository } from "./repository.interface";
import { ArticleRequestModel, ArticleResponseModel } from "./model";
import { ArticleDataSource } from "./source";

export class ArticleRepositoryImpl implements ArticleRepository {
    articleDataSource: ArticleDataSource
    constructor(articleDataSource: ArticleDataSource) {
        this.articleDataSource = articleDataSource
    }
    
    async createArticle(article: ArticleRequestModel) {
        await this.articleDataSource.create(article)

    }
    async getArticles(): Promise<ArticleResponseModel[]> {
        const result = await this.articleDataSource.getAll()
        return result;
    }
}