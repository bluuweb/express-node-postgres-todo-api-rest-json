import "dotenv/config";
import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  allowExitOnIdle: true,
});

try {
  await pool.query("SELECT NOW()");
  console.log("Database connected");
} catch (error) {
  console.log(error);
}
