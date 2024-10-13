// routes/taskRoutes.js
const express = require("express");
const {
  createTask,
  getAllTasks,
  updateTaskStatus,
  deleteTask,
  updateTask,
  getTaskById,
} = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.put("/:id", updateTask);
router.put("/:id/status", updateTaskStatus);
router.delete("/:id", deleteTask);
router.get("/:id", getTaskById);

module.exports = router;
