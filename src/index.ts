// const Koa = require('koa');
import * as Koa from 'koa';
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World!'
});

app.listen(4000, () => {
    console.log('Server started!')
}); 