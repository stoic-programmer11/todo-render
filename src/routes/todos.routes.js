const { Router } = require("express");
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getTodosWithCategories,
} = require("../controllers/todos.controllers");
//1
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

// Se ejecutan pero por pasos
router.get("/todos", authMiddleware, getAllTasks);

router.get("/todos/:id", authMiddleware, getTaskById);

router.get("/todos/:id/categories", authMiddleware, getTodosWithCategories);

router.post("/todos", authMiddleware, createTask);

router.put("/todos/:id", authMiddleware, updateTask);

router.delete("/todos/:id", authMiddleware, deleteTask);

module.exports = router;
