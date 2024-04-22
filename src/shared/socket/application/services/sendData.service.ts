import { EventsSocket } from "../../domain/entities/event.types";
import { SocketRepository } from "../../domain/repositories/socketRepository";

export class SendDataService {
  constructor(private readonly socketRepository: SocketRepository) {}
  async run(eventEmit: EventsSocket, data: any) {
    try {
      await this.socketRepository.sendData(eventEmit, data);
      console.log("Sent data");
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
