import { Router } from 'express';
import CadastrarController from '../Controllers/CadastrarController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CadastrarController(req, res, next).create(),
);

export default routes;