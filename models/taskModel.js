// models/taskModel.js
const pool = require("../config/db");

// SQL Query to create a task
const createTask = async (
  taskTitle,
  taskDescription,
  userId,
  categoryId,
  statusId,
  dueDate
) => {
  const result = await pool.query(
    "INSERT INTO tasks (task_title, task_description, user_id, category_id, status_id, due_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [taskTitle, taskDescription, userId, categoryId, statusId, dueDate]
  );
  return result.rows[0];
};

// SQL Query to get all tasks (with joins)
const getAllTasks = async () => {
  const result = await pool.query(`
    SELECT tasks.task_id, tasks.task_title, tasks.task_description, tasks.due_date,
           users.username, categories.category_name, task_status.status_name
    FROM tasks
    JOIN users ON tasks.user_id = users.user_id
    LEFT JOIN categories ON tasks.category_id = categories.category_id
    LEFT JOIN task_status ON tasks.status_id = task_status.status_id
  `);
  return result.rows;
};

// SQL Query to update task status
const updateTaskStatus = async (taskId, statusId) => {
  const result = await pool.query(
    "UPDATE tasks SET status_id = $1 WHERE task_id = $2 RETURNING *",
    [statusId, taskId]
  );
  return result.rows[0];
};
//Sql Query to update task
const updateTask = async (
  taskId,
  taskTitle,
  taskDescription,
  userId,
  categoryId,
  statusId,
  dueDate
) => {
  const result = await pool.query(
    `UPDATE tasks
     SET task_title = $1, task_description = $2, user_id = $3, category_id = $4, status_id = $5, due_date = $6
     WHERE task_id = $7 RETURNING *`,
    [taskTitle, taskDescription, userId, categoryId, statusId, dueDate, taskId]
  );
  return result.rows[0];
};

// SQL Query to delete a task
const deleteTask = async (taskId) => {
  await pool.query("DELETE FROM tasks WHERE task_id = $1", [taskId]);
};

// models/taskModel.js

// SQL Query to get a task by ID
const getTaskById = async (taskId) => {
  const result = await pool.query("SELECT * FROM tasks WHERE task_id = $1", [
    taskId,
  ]);
  return result.rows[0];
};

module.exports = {
  createTask,
  getAllTasks,
  updateTaskStatus,
  deleteTask,
  updateTask,
  getTaskById,
};
