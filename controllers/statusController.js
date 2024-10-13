// controllers/status.controller.js

const Status = require("../models/statusModel");

// Create a new status
exports.createStatus = async (req, res) => {
  try {
    const { status_name } = req.body;
    const newStatus = await Status.create(status_name);
    res.status(201).json(newStatus);
  } catch (error) {
    res.status(500).json({ error: "Failed to create status" });
  }
};

// Get all statuses
exports.getAllStatuses = async (req, res) => {
  try {
    const statuses = await Status.findAll();
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch statuses" });
  }
};

// Get a status by ID
exports.getStatusById = async (req, res) => {
  try {
    const { status_id } = req.params;
    const status = await Status.findById(status_id);
    if (status) {
      res.status(200).json(status);
    } else {
      res.status(404).json({ error: "Status not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch status" });
  }
};

// Update a status by ID
exports.updateStatus = async (req, res) => {
  try {
    const { status_id } = req.params;
    const { status_name } = req.body;
    const updatedStatus = await Status.update(status_id, status_name);
    if (updatedStatus) {
      res.status(200).json(updatedStatus);
    } else {
      res.status(404).json({ error: "Status not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update status" });
  }
};

// Delete a status by ID
exports.deleteStatus = async (req, res) => {
  try {
    const { status_id } = req.params;
    const deleted = await Status.delete(status_id);
    if (deleted) {
      res.status(200).json({ message: "Status deleted successfully" });
    } else {
      res.status(404).json({ error: "Status not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete status" });
  }
};
