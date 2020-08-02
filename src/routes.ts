import express from 'express';
import ProductsController from './controllers/ProductsController';
import UsersController from './controllers/UsersController';
import ClientsController from './controllers/ClientsController';
import ProvidersController from './controllers/ProvidersController';

const routes = express.Router();
const productsController = new ProductsController();
const usersController = new UsersController();
const clientsController = new ClientsController();
const providersController = new ProvidersController();


//Products
routes.post('/products', productsController.create);

routes.get('/products', productsController.index);

routes.get('/products/:id', productsController.show);

//Users
routes.post('/users', usersController.create);

routes.get('/users', usersController.index);

routes.get('/users/:id', usersController.show);


//Clients
routes.post('/clients', clientsController.create);

routes.get('/clients', clientsController.index);

routes.get('/clients/:id', clientsController.show);

//Providers
routes.post('/providers', providersController.create);

routes.get('/providers', providersController.index);

routes.get('/providers/:id', providersController.show);

export default routes;