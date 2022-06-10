import { ContactRequestModel, ContactResponseModel } from "./model";

export interface GetAllContactsUseCase {
  execute(): Promise<ContactResponseModel[]>;
}

export interface CreateContactUseCase {
  execute(contact: ContactRequestModel): void;
}

export interface DeleteContactUseCase {
  execute(id: number): void;
}

export interface UpdateContactUseCase {
  execute(id: number, data: Partial<ContactRequestModel>): void;
}