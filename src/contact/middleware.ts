import { ContactRepositoryImpl } from "./repository";
import ContactsRouter from "./router";
import {
  CreateContact,
  DeleteContact,
  GetAllContacts,
  UpdateContact,
} from "./usecase";

export const Contactmidleware = (dataSource: any) => {
  return ContactsRouter(
    new GetAllContacts(new ContactRepositoryImpl(dataSource)),
    new CreateContact(new ContactRepositoryImpl(dataSource)),
    new DeleteContact(new ContactRepositoryImpl(dataSource)),
    new UpdateContact(new ContactRepositoryImpl(dataSource))
  );
};
