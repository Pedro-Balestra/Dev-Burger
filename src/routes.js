import { Router } from 'express';
import multer from 'multer';
import CategoryController from './app/controllers/CategoryController';
import ProductsController from './app/controllers/ProductsController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import multerConfig from './config/multer';
import authMiddlewares from './middlewares/auth';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);
routes.use(authMiddlewares);
routes.post('/products', upload.single('file'), ProductsController.store);
routes.get('/products', ProductsController.index);
routes.post('/categories', CategoryController.store);
routes.get('/categories', CategoryController.index);
export default routes;
