import { Reading } from "../../../../reading/domain/Reading";
import { EventsSocket } from "../entities/event.types";

export interface SocketRepository {
  connect(): Promise<any>;
  sendData(eventEmit: EventsSocket, data: Reading): Promise<void>;
}
