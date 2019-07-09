const Router = require('koa-router');
const User = require('../controllers/user');

const router = new Router();

router.get('/users/:id', async ctx => {
    try {
        ctx.body = await User.getUser({id: ctx.params.id});
    } catch(err) {
        console.log('err', err);
        ctx.status = 500;
        ctx.body = err.message || 'Internal error';
    }
});

router.patch('/update-user', async ctx => {
    try {
        ctx.body = await User.updateUser({...ctx.request.body});
    } catch(err) {
        console.log('err', err);
        ctx.status = 500;
        ctx.body = err.message || 'Internal error';
    }
});

router.post('/delete-user', async ctx => {
    try {
        ctx.body = await User.deleteUser({...ctx.request.body});
    } catch(err) {
        console.log('err', err);
        ctx.status = 500;
        ctx.body = err.message || 'Internal error';
    }
});

router.post('/add-user', async ctx => {
    try {
        ctx.body = await User.addUser({...ctx.request.body});
    } catch(err) {
        console.log('err', err);
        ctx.status = 500;
        ctx.body = err.message || 'Internal error';
    }
});

router.get('/', async ctx => {
    try {
        ctx.body = await User.allUsers();
    } catch(err) {
        console.log('err', err);
        ctx.status = 500;
        ctx.body = err.message || 'Internal error';
    }
});

module.exports = router;