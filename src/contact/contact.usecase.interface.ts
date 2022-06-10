import { ContactRequestModel, ContactResponseModel } from "./contact.model";

export interface GetAllContactsUseCase {
  execute(): Promise<ContactResponseModel[]>;
}

export interface CreateContactUseCase {
  execute(contact: ContactRequestModel): void;
}

export interface DeleteContactUseCase {
  execute(id: number): void;
}