import { FindAllReadingsUseCase } from "../application/FindAllReadingsUseCase";
import { SaveReadingUseCase } from "../application/SaveReadingUseCase";

import { FindAllReadingsController } from "./controllers/FindAllReadings.controller";
import { SaveReadingController } from "./controllers/SaveReading.controller";

import { MysqlReadingRepository } from "./MysqlReadingRepository";

const mysqlReadingRepository = new MysqlReadingRepository();

const findAllReadingsUseCase = new FindAllReadingsUseCase(mysqlReadingRepository);
const saveReadingUseCase = new SaveReadingUseCase(mysqlReadingRepository);

export const findAllReadingsController = new FindAllReadingsController(findAllReadingsUseCase);    
export const saveReadingController = new SaveReadingController(saveReadingUseCase);
