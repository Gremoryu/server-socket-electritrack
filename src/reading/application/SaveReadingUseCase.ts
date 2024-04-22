import { EventsSocket } from "../../shared/socket/domain/entities/event.types";
import { SocketIOPort } from "../../shared/socket/infraestructure/ports/SocketIO.port";
import { Reading } from "../domain/Reading";
import { ReadingRepository } from "../domain/ReadingRepository";
export class SaveReadingUseCase {
    private intervalId?: NodeJS.Timeout;

    constructor(readonly readingRepository: ReadingRepository) { }

    async run(reading: Reading): Promise<Reading | null> {
        try {
            
            const url = "http://54.160.154.177:4000/";
            const socketRepository = new SocketIOPort(url);
            await socketRepository.connect();
            await socketRepository.sendData(EventsSocket.SEND_DATA, reading);
            console.log(reading);
            const metrics = this.readingRepository.save(reading);
            return metrics;
        } catch (error) {
            console.log(error);
            return null;
        }

    }

   // async saveReadingEveryHour(reading: Reading): Promise<Reading | null> {
   //     try {
   //         if(!this.intervalId) {
   //             this.intervalId = setInterval(async () => {
   //                 await this.readingRepository.save(reading);
   //                 console.log(reading);
   //             }, 3600000);
   //         }
   //         return reading;
   //     } catch (error) {
   //         return null;
   //     }
//
   // }
}