const Task = require("../models/Task");

module.exports = class TaskController {
  static async createTask(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    };

    await Task.save(task);
  }

  static showTasks(req, res) {
    res.send("Mostrar tarefas");
  }
};
