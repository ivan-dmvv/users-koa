const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello!';
});

app.listen(8000, () => {
    console.log('http://localhost:8000');
});