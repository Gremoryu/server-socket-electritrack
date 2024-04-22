import { db } from "../../shared/db/application/mysqlConnection";
import { ReadingRepository } from "../domain/ReadingRepository";
import { Reading } from "../domain/Reading";

export class MysqlReadingRepository implements ReadingRepository {
    async save(reading: Reading): Promise<Reading | null> {
        const [result]: any = db.query(
            "INSERT INTO readings (power_usage, room_id) VALUES (?, ?)",
            [reading.power_usage, reading.room_id]
        );
        return result;
    }

    async findAll(): Promise<Reading[]> {
        const [rows]: any = await db.query(
            "SELECT * FROM readings"
        );
        return rows;
    }
}