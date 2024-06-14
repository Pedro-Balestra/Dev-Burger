import { Router } from 'express';
import multer from 'multer';
import ProductsController from './app/controllers/ProductsController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import multerConfig from './config/multer';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);
routes.post('/products', upload.single('file'), ProductsController.store);

export default routes;
