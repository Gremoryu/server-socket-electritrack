import { findAllReadingsController } from "../dependencies";
import { saveReadingController } from "../dependencies";

import { Router } from "express";

const ReadingRouter = Router();

ReadingRouter.get('/', (req, res) => findAllReadingsController.run(req, res));
ReadingRouter.post('/', (req, res) => saveReadingController.run(req, res));

export default ReadingRouter;