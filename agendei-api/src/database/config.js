import sqlite3 from "sqlite3";
import { open } from "sqlite";

const filePath = "./src/database/agendei.db";

const db = () => 
  open({
    filename: filePath,
    driver: sqlite3.Database,
  });
  
export default db;
