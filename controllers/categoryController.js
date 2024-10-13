// controllers/categoryController.js
const Category = require("../models/categoryModel");

// Controller for creating a category
const createCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const category = await Category.createCategory(categoryName);
    res.status(201).json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Controller for getting all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.getAllCategories();
    res.status(200).json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Controller for deleting a category
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await Category.deleteCategory(id);
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    if (err.message === "Category not found") {
      return res.status(404).json({ error: "Category not found" }); // Return 404 for not found
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  deleteCategory,
};
