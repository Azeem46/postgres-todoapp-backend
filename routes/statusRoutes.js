// routes/status.routes.js

const express = require("express");
const router = express.Router();
const statusController = require("../controllers/statusController");

// Create a new status
router.post("/", statusController.createStatus);

// Get all statuses
router.get("/", statusController.getAllStatuses);

// Get a status by ID
router.get("/:status_id", statusController.getStatusById);

// Update a status by ID
router.put("/:status_id", statusController.updateStatus);

// Delete a status by ID
router.delete("/:status_id", statusController.deleteStatus);

module.exports = router;
