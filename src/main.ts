import server from "./server";
import { createPool } from "mysql2";
import { ContactDataSource } from "./contact/contact.data.source";
import ContactsRouter from "./contact/contact.router";
import { ContactRepositoryImpl } from "./contact/contact.repository";
import { CreateContact, DeleteContact, GetAllContacts } from "./contact/contact.usecase";

async function getConnection() {
  const db = createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "go_fiber",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  return new ContactDataSource(db.promise());
}

(async () => {
  const dataSource = await getConnection();

  const contactMiddleWare = ContactsRouter(
    new GetAllContacts(new ContactRepositoryImpl(dataSource)),
    new CreateContact(new ContactRepositoryImpl(dataSource)),
    new DeleteContact(new ContactRepositoryImpl(dataSource))
  );
  server.use("/contact", contactMiddleWare);
  server.listen(4000, () => console.log("Running on http://localhost:4000"));
})();
