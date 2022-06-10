import { ContactRequestModel, ContactResponseModel } from "./model";
import { ContactDataSourceInterface } from "./data.source.interface";

const DB_TABLE = "db_contact"
export class ContactDataSource implements ContactDataSourceInterface {

    private db: any
    constructor(db: any) {
        this.db = db
    }

    async create(contact: ContactRequestModel) {
        await this.db.query(`insert into ${DB_TABLE} (name) values (?)`, [contact.name])
    }

    async getAll(): Promise<ContactResponseModel[]> {
        const [rows] = await this.db.query(`select * from ${DB_TABLE}`)
        const result = rows.map((item: any) => ({
            id: item.id,
            name: item.name,
        }));
        return result;
    }

    async deleteOne(id: number) {
        console.log(id)
        await this.db.query(`delete from ${DB_TABLE} where id = ?`, id)
    }

    async updateOne(id: number, data: ContactRequestModel) {
        await this.db.query(`update ${DB_TABLE} set name = ? where id = ?`, [data.name, id])
    }

    async getOne(id: number): Promise<ContactResponseModel | null> {
        const [rows] = await this.db.query(`select * from ${DB_TABLE} where id = ? limit 1`, [id])
        const result = rows.map((item: any) => ({
            id: item.id,
            name: item.name,
        }));

        return result[0];
    }

}