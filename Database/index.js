import { JsonDatabase } from "wio.db";

const db = new JsonDatabase({ databasePath: './Database/geral.json'});

export { db }