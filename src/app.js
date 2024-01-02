const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const routes = require("./routes/routes.js");
const cors = require("@koa/cors");

app.use(cors());
app.use(bodyParser());
app.use(routes.routes()).use(routes.allowedMethods());
app.listen(2000);