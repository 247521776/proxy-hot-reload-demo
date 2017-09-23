const controllers = require("../controllers");
const router      = new require("koa-router")();
for (let url in controllers) {
    const route = controllers[url];
    for (let method in route) {
        router[method](url, route[method]);
    }
}

module.exports = router;