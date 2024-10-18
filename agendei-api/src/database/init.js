import Database from "./config.js";
import * as fs from "fs";

const filePath = process.argv[2] || "src/database/script-database.sql";

const script = fs.readFileSync(filePath, "utf-8");

const initDb = {   
   async init() {
      const db = await Database();
      await db.exec(`${script}`);
      await db.close();
   }
}

initDb.init();
