// routes/categoryRoutes.js
const express = require("express");
const {
  createCategory,
  getAllCategories,
  deleteCategory,
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/", createCategory);
router.get("/", getAllCategories);
router.delete("/:id", deleteCategory);

module.exports = router;
