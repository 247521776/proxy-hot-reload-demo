const koa      = require("koa");
const app      = new koa();
const proxyHot = require("proxy-hot-reload");
proxyHot();

const router   = require("./router");
app.use(router.routes());

app.listen(3000);
console.log("启动成功");