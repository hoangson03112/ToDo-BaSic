const {
  dele,
  update,
  add,
  getAll,
} = require("../Repository/repository.js");

const writeFile = require("../func/function");

function getTasks(ctx) {
  try {
    const tasks = getAll();
    ctx.body = tasks;
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      error: e.message,
    };
  }
}

function save(ctx) {
  try {
    const contentRequest = ctx.request.body;
    const tasks = getAll();
    const taskData = {
      ...contentRequest,
      id: tasks.length == 0 ? 0 : tasks[tasks.length - 1].id + 1,
      isCompleted: false,
    };
    const newTasks = add(taskData);
    ctx.status = 201;
    writeFile(newTasks);
    return (ctx.body = {
      todos: newTasks,
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
}

function updatedTask(ctx) {
  try {
    const { id } = ctx.params;
    const newTasks = update(id);
    writeFile(newTasks);
    ctx.status = 201;
    return (ctx.body = {
      todos: newTasks,
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
}
function deleteTask(ctx) {
  try {
    const { id } = ctx.params;
    const deleProduct = dele(id);
    writeFile(deleProduct);
    ctx.status = 200;
    return (ctx.body = {
      todos: deleProduct,
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
}

module.exports = {
  deleteTask,
  updatedTask,
  save,
  getTasks,
};
