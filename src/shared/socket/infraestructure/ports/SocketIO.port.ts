import { Socket, io } from "socket.io-client";
import { EventsSocket } from "../../domain/entities/event.types";
import { SocketRepository } from "../../domain/repositories/socketRepository";
import { Reading } from "../../../../reading/domain/Reading";
export class SocketIOPort implements SocketRepository {
  constructor(private readonly url: string) {}
  async connect() {
    return new Promise<Socket>((resolve, reject) => {
      try {
        const socket = io(this.url);
        resolve(socket);
      } catch (err: any) {
        reject(err);
      }
    });
  }
  async sendData(eventEmit: EventsSocket, data: Reading) {
    try {
      const socket = await this.connect();
      console.log("data to socket:")
      console.log(data)
      socket.emit(eventEmit, data);
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
