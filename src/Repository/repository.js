const { todos: tasks } = require("../database/tasks.json");

function getAll() {
  return tasks;
}

function add(data) {
  const newTask = [...tasks,data];
  return newTask;
}
function update(id) {
  const updateTask = tasks.map((task) => {
    if (task.id === parseInt(id)) {
      task.isCompleted = !task.isCompleted;
    }
    return task;
  });
  return updateTask;

}
function dele(id) {
  const deleteTask = tasks.filter((task) => {
    if (parseInt(id) != task.id) {
      return task;
    }
  });
  return deleteTask;
}
module.exports={
  dele,
  update,
  add,
  getAll
}