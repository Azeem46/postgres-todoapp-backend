// models/userModel.js
const pool = require("../config/db");

// SQL Query to create a new user
const createUser = async (username, email) => {
  const result = await pool.query(
    "INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *",
    [username, email]
  );
  return result.rows[0];
};

// SQL Query to get all users
const getAllUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

// SQL Query to get a single user by ID
const getUserById = async (id) => {
  const result = await pool.query("SELECT * FROM users WHERE user_id = $1", [
    id,
  ]);
  return result.rows[0];
};

// SQL Query to update a user
const updateUser = async (id, username, email) => {
  const result = await pool.query(
    "UPDATE users SET username = $1, email = $2 WHERE user_id = $3 RETURNING *",
    [username, email, id]
  );
  return result.rows[0];
};

// SQL Query to delete a user
const deleteUser = async (id) => {
  await pool.query("DELETE FROM users WHERE user_id = $1", [id]);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
