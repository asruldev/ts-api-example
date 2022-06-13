import server from "./server";
import { ContactDataSource } from "./contact/source";
import { dbConfig } from "./database/config";
import { Contactmidleware } from "./contact/middleware";
import { ArticleDataSource } from "./article/source";
import { ArticleMidleware } from "./article/middleware";

(async () => {
  const contactDataSource = await new ContactDataSource(dbConfig.promise());
  const contactMiddleWare = Contactmidleware(contactDataSource);

  const articleDataSource = await new ArticleDataSource(dbConfig.promise());
  const articleMiddleWare = ArticleMidleware(articleDataSource);

  server.use("/contact", contactMiddleWare);
  server.use("/article", articleMiddleWare);
  server.listen(4000, () => console.log("Running on http://localhost:4000"));
})();
