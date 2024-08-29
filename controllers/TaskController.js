const Task = require("../models/Task");

module.exports = class TaskController {
  static async createTask(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    };

    await Task.create(task);

    res.send("Task adicionada ao banco de dados");
  }

  static showTasks(req, res) {
    const tasks = Task.findAll();

    res.send(tasks);
  }
};
