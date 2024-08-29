const express = require("express");
const router = express.Router();

const TaskController = require("../controllers/TaskController");

router.post("/add", TaskController.createTask);
router.get("/", TaskController.showTasks);

module.exports = router;
