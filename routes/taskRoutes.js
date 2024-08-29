const express = require("express");
const router = express.Router();

const TaskController = require("../controllers/TaskController");

router.post("/add", TaskController.createTask);
router.get("/", TaskController.showTasks);
router.delete("/delete/:id", TaskController.deleteTask);

module.exports = router;
