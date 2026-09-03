import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect((err, client, release) => {
  if (err) {
    console.log(`database connection failed: ${err.stack}`);
    return process.exit(1);
  }
  console.log("connection successfull!");
  release();
});
