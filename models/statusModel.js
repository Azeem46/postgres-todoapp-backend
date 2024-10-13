// models/status.model.js

const { Pool } = require("pg");
const pool = require("../config/db"); // Ensure this is the correct path to your database connection

// Create Status model with methods for CRUD operations
const Status = {
  // Create a new status
  create: async (statusName) => {
    const query =
      "INSERT INTO task_status (status_name) VALUES ($1) RETURNING *";
    const values = [statusName];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  // Get all statuses
  findAll: async () => {
    const query = "SELECT * FROM task_status";
    const result = await pool.query(query);
    return result.rows;
  },

  // Get a specific status by ID
  findById: async (statusId) => {
    const query = "SELECT * FROM task_status WHERE status_id = $1";
    const result = await pool.query(query, [statusId]);
    return result.rows[0];
  },

  // Update a status by ID
  update: async (statusId, statusName) => {
    const query =
      "UPDATE task_status SET status_name = $1 WHERE status_id = $2 RETURNING *";
    const values = [statusName, statusId];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  // Delete a status by ID
  delete: async (statusId) => {
    const query = "DELETE FROM task_status WHERE status_id = $1";
    const result = await pool.query(query, [statusId]);
    return result.rowCount; // Returns the number of rows affected
  },
};

module.exports = Status;
