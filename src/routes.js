import { Router } from 'express';
import OrderController from './app/Controllers/OrderController';

const routes = new Router();

routes.post('/order', OrderController.create);
routes.get('/order', OrderController.index);

export default routes;
