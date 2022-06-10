import server from "./server";
import { ContactDataSource } from "./contact/source";
import { dbConfig } from "./database/config";
import { Contactmidleware } from "./contact/middleware";

(async () => {
  const contactDataSource = await new ContactDataSource(dbConfig.promise());
  const contactMiddleWare = Contactmidleware(contactDataSource);

  server.use("/contact", contactMiddleWare);
  server.listen(4000, () => console.log("Running on http://localhost:4000"));
})();
