import {
  ContactRequestModel,
  ContactResponseModel,
} from "./model";

export interface ContactDataSourceInterface {
  create(contact: ContactRequestModel): void;
  getAll(): Promise<ContactResponseModel[]>;
  deleteOne(id: number): void;
  updateOne(id: number, data: ContactRequestModel): void;
  getOne(id: number): Promise<ContactResponseModel | null>;
}
