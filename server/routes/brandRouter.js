const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.get('/', brandController.getAll);
router.post('/',checkRole('ADMIN'),brandController.create);
router.delete('/:id',brandController.delete);
module.exports =router;
