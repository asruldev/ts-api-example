import { ContactRequestModel, ContactResponseModel } from "./model";
import { ContactRepository } from "./repository.interface";
import {
  CreateContactUseCase,
  DeleteContactUseCase,
  GetAllContactsUseCase,
  UpdateContactUseCase,
} from "./usecase.interface";

export class GetAllContacts implements GetAllContactsUseCase {
  contactRepository: ContactRepository;
  constructor(contactRepository: ContactRepository) {
    this.contactRepository = contactRepository;
  }

  async execute(): Promise<ContactResponseModel[]> {
    const result = await this.contactRepository.getContacts();
    return result;
  }
}

export class CreateContact implements CreateContactUseCase {
  contactRepository: ContactRepository;
  constructor(contactRepository: ContactRepository) {
    this.contactRepository = contactRepository;
  }

  async execute(contact: ContactRequestModel) {
    await this.contactRepository.createContact(contact);
  }
}

export class DeleteContact implements DeleteContactUseCase {
  contactRepository: ContactRepository;
  constructor(contactRepository: ContactRepository) {
    this.contactRepository = contactRepository;
  }

  async execute(id: number) {
    await this.contactRepository.deleteContact(id);
  }
}

export class UpdateContact implements UpdateContactUseCase {
  contactRepository: ContactRepository
  constructor(contactRepository: ContactRepository) {
      this.contactRepository = contactRepository
  }

  async execute(id: number, data: ContactRequestModel) {
      await this.contactRepository.updateContact(id, data)

  }
}
