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

  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });

    res.send(tasks);
  }

  static async deleteTask(req, res) {
    const id = req.params.id;

    await Task.destroy({ where: { id: id } });

    res.send("Task removida");
  }

  static async updateTask(req, res) {
    const id = req.params.id;

    const task = {
      title: req.body.title,
      description: req.body.description,
      done: req.body.done,
    };

    await Task.update(task, { where: { id: id } });

    res.send("Task atualizada");
  }
};
