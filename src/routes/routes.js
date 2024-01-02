
const Router = require("koa-router");

const router = new Router({
     prefix: '/api'
   });

const handlers = require ("../Handlers/handlers")

router.get("/tasks",handlers.getTasks);
router.post("/task", handlers.save);
router.patch("/task/:id",handlers.updatedTask);
router.delete("/task/:id",handlers.deleteTask);

module.exports= router;