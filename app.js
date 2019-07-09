const Koa = require('koa');
const db = require('./db');
const routes = require('./routes');
const koaBody = require('koa-body');
const config = require('./config.json');

const app = new Koa();

app.use(koaBody());
app.use(routes.routes());
app.use(routes.allowedMethods());

db.initDb(() => {
    app.listen(config.app.port, () => {
        console.log(`Application is running here: http://${config.host}:${config.app.port}`);
    });
});