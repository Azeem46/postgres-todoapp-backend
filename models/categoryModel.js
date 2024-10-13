// models/categoryModel.js
const pool = require("../config/db");

// SQL Query to create a new category
const createCategory = async (categoryName) => {
  const result = await pool.query(
    "INSERT INTO categories (category_name) VALUES ($1) RETURNING *",
    [categoryName]
  );
  return result.rows[0];
};

// SQL Query to get all categories
const getAllCategories = async () => {
  const result = await pool.query("SELECT * FROM categories");
  return result.rows;
};

// SQL Query to delete categories
const deleteCategory = async (categoryId) => {
  const result = await pool.query(
    "DELETE FROM categories WHERE category_id = $1 RETURNING *",
    [categoryId]
  );

  if (result.rowCount === 0) {
    throw new Error("Category not found"); // Throw an error if no rows were affected
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  deleteCategory,
};
