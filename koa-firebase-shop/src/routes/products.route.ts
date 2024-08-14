import Router from '@koa/router';
import productsController from '../controllers/products.controller';

const router = new Router();

router.get('/', productsController.findAll);

export default router