import express from 'express';
import knex from './database/connection';
import ProductsController from './controllers/ProductsController';
const routes = express.Router();
const productsController = new ProductsController();

routes.post('/products', productsController.create);

routes.get('/products', productsController.index);


export default routes;