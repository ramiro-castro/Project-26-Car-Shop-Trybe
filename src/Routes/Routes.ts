import { Router } from 'express';
import CadastrarController from '../Controllers/CadastrarController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CadastrarController(req, res, next).create(),
);

routes.get(
  '/cars',
  (req, res, next) => new CadastrarController(req, res, next).getAll(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new CadastrarController(req, res, next).getById(),
);

export default routes;