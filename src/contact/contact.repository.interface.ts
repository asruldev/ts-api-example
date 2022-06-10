import { ContactRequestModel, ContactResponseModel } from "./contact.model";

export interface ContactRepository {
    createContact(contact: ContactRequestModel): void;
    deleteContact(id: number): void;
    updateContact(id: number, data: ContactRequestModel): void;
    getContacts(): Promise<ContactResponseModel[]>;
    getContact(id: number): Promise<ContactResponseModel | null>;
}