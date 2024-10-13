// controllers/taskController.js
const Task = require("../models/taskModel");

// Controller for creating a task
const createTask = async (req, res) => {
  const { taskTitle, taskDescription, userId, categoryId, statusId, dueDate } =
    req.body;
  try {
    const task = await Task.createTask(
      taskTitle,
      taskDescription,
      userId,
      categoryId,
      statusId,
      dueDate
    );
    res.status(201).json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Controller for getting all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.getAllTasks();
    res.status(200).json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Controller for updating task status
const updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { statusId } = req.body;
  try {
    // First, retrieve the current task status
    const currentTask = await Task.getTaskById(id); // Add this method in your model to get task by ID

    if (!currentTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    // If the status hasn't changed, return the current task
    if (currentTask.status_id === statusId) {
      return res.status(200).json(currentTask);
    }

    // Update the task status since it's different
    const updatedTask = await Task.updateTaskStatus(id, statusId);
    res.status(200).json(updatedTask);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Controller for updating a task
const updateTask = async (req, res) => {
  const { id } = req.params; // Get task ID from URL params
  const { taskTitle, taskDescription, userId, categoryId, statusId, dueDate } =
    req.body; // Get task data from request body
  try {
    const updatedTask = await Task.updateTask(
      id,
      taskTitle,
      taskDescription,
      userId,
      categoryId,
      statusId,
      dueDate
    ); // Call the model method
    if (updatedTask) {
      res.status(200).json(updatedTask); // Send updated task as response
    } else {
      res.status(404).json({ error: "Task not found" }); // If task not found
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Controller for deleting a task
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.deleteTask(id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Controller for getting a task by ID
const getTaskById = async (req, res) => {
  const { id } = req.params; // Get the ID from the request parameters
  try {
    const task = await Task.getTaskById(id); // Call the model function to get the task

    if (!task) {
      return res.status(404).json({ error: "Task not found" }); // If no task is found, return 404
    }

    res.status(200).json(task); // Return the found task
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error"); // Handle server errors
  }
};

module.exports = {
  createTask,
  getAllTasks,
  updateTaskStatus,
  deleteTask,
  updateTask,
  getTaskById,
};
