import express from "express";
import { Request, Response } from "express";
import {
  CreateContactUseCase,
  DeleteContactUseCase,
  GetAllContactsUseCase,
} from "./contact.usecase.interface";

export default function ContactsRouter(
  getAllContactsUseCase: GetAllContactsUseCase,
  createContactUseCase: CreateContactUseCase,
  deleateContactUseCase: DeleteContactUseCase
) {
  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {
      const contacts = await getAllContactsUseCase.execute();
      res.send(contacts);
    } catch (err) {
      res.status(500).send({ message: "Error fetching data" });
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    try {
      await createContactUseCase.execute(req.body);
      res.statusCode = 201;
      res.json({ message: "Created" });
    } catch (err: any) {
      console.log(err.message);
      res.status(500).send({ message: "Error saving data" });
    }
  });

  router.delete("/:id", async (req: Request, res: Response) => {
    try {
      await deleateContactUseCase.execute(Number(req.params.id));
      res.statusCode = 200;
      res.json({ message: "Deleted" });
    } catch (error) {
      res.status(500).send({ message: "Error delete" });
    }
  });

  return router;
}
