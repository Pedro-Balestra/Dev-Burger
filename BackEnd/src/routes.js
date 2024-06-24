import { Router } from 'express';
import multer from 'multer';
import CategoryController from './app/controllers/CategoryController';
import OrderController from './app/controllers/OrderController';
import ProductsController from './app/controllers/ProductsController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import authMiddlewares from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddlewares);
routes.post('/products', upload.single('file'), ProductsController.store);
routes.get('/products', ProductsController.index);
routes.put('/products/:id', upload.single('file'), ProductsController.update);

routes.post('/categories', upload.single('file'), CategoryController.store);
routes.get('/categories', CategoryController.index);
routes.put('/categories/:id', upload.single('file'), CategoryController.update);

routes.post('/order', OrderController.store);
routes.get('/order', OrderController.index);
routes.put('/order/:id', OrderController.update);

export default routes;
