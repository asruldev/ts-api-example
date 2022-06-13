import { ArticleRequestModel, ArticleResponseModel } from "./model";
import { ArticleDataSourceInterface } from "./source.interface";

const DB_TABLE = "db_article";
export class ArticleDataSource implements ArticleDataSourceInterface {
  private db: any;
  constructor(db: any) {
    this.db = db;
  }

  async create(article: ArticleRequestModel) {
    await this.db.query(`insert into ${DB_TABLE} (title, body) values (?, ?)`, [
      article.title,
      article.body,
    ]);
  }

  async getAll(): Promise<ArticleResponseModel[]> {
    const [rows] = await this.db.query(`select * from ${DB_TABLE}`);
    
    const result = rows.map((item: any) => ({
      id: item.id,
      title: item.title,
      body: item.body,
      contact: item.contactId
    }));
    return result;
  }  
}
