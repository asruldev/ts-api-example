import express from "express";
import { Request, Response } from "express";
import { GetAllContacts } from "../contact/usecase";
import { CreateArticleUseCase, GetAllArticlesUseCase } from "./usecase.interface";

export default function ArticlesRouter(
  getAllArticlesUseCase: GetAllArticlesUseCase,
  createArticleUseCase: CreateArticleUseCase,
) {
  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {
      const articles = await getAllArticlesUseCase.execute();
      res.send(articles);
    } catch (err) {
      res.status(500).send({ message: "Error fetching data" });
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    try {
      await createArticleUseCase.execute(req.body);
      res.statusCode = 201;
      res.json({ message: "Created" });
    } catch (err: any) {
      console.log(err.message);
      res.status(500).send({ message: "Error saving data" });
    }
  });

  return router;
}
