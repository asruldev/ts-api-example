import { ContactRepository } from "./repository.interface";
import { ContactRequestModel, ContactResponseModel } from "./model";
import { ContactDataSource } from "./data.source";

export class ContactRepositoryImpl implements ContactRepository {
    contactDataSource: ContactDataSource
    constructor(contactDataSource: ContactDataSource) {
        this.contactDataSource = contactDataSource
    }
    async deleteContact(id: number) {
        await this.contactDataSource.deleteOne(id)
    }
    async updateContact(id: number, data: ContactRequestModel) {
        await this.contactDataSource.updateOne(id, data);
    }
    async getContact(id: number): Promise<ContactResponseModel | null> {
        const result = await this.contactDataSource.getOne(id);
        return result;
    }

    async createContact(contact: ContactRequestModel) {
        await this.contactDataSource.create(contact)

    }
    async getContacts(): Promise<ContactResponseModel[]> {
        const result = await this.contactDataSource.getAll()
        return result;
    }
}