import { pool } from "../database/connection.js";

const findAll = async () => {
  const { rows } = await pool.query("SELECT * FROM todos");
  return rows;
};

const create = async (title) => {
  const query = "INSERT INTO todos (title) VALUES ($1) RETURNING *";
  const { rows } = await pool.query(query, [title]);
  return rows[0];
};

export const todoModel = {
  findAll,
  create,
};
