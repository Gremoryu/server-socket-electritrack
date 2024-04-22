import { db } from "../../shared/db/application/mysqlConnection";
import { ReadingRepository } from "../domain/ReadingRepository";
import { Reading } from "../domain/Reading";

export class MysqlReadingRepository implements ReadingRepository {
    async save(reading: Reading): Promise<Reading | null> {

        try {
            const [result]: any = await db.query(
                "INSERT INTO readings (power_usage, room_id) VALUES (?, ?)",
                [reading.energy, reading.room_id]
            );
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async findAll(): Promise<Reading[]> {
        const [rows]: any = await db.query(
            "SELECT * FROM readings"
        );
        return rows;
    }
}