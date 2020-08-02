import express from 'express';
import ProductsController from './controllers/ProductsController';

const routes = express.Router();
const productsController = new ProductsController();

routes.post('/products', productsController.create);

routes.get('/products', productsController.index);

routes.get('/products/:id', productsController.show);


export default routes;