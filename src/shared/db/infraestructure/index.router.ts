import { Router, Request, Response } from "express";
import ReadingRouter from "../../../reading/infrastructure/routes/ReadingRouter";
const prefijo = "/api";
const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

indexRouter.use(`${prefijo}/readings`, ReadingRouter);

export default indexRouter;