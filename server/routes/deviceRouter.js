const Router = require('express');
const router = new Router();
const deviceRouter = require('../controllers/deviceController')

router.get('/', deviceRouter.getAll);
router.post('/',deviceRouter.create);
router.get('/:id',deviceRouter.getOne);
module.exports =router;
