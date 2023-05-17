"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CadastrarController_1 = __importDefault(require("../Controllers/CadastrarController"));
const routes = (0, express_1.Router)();
routes.post('/cars', (req, res, next) => new CadastrarController_1.default(req, res, next).create());
routes.get('/cars', (req, res, next) => new CadastrarController_1.default(req, res, next).getAll());
routes.get('/cars/:id', (req, res, next) => new CadastrarController_1.default(req, res, next).getById());
exports.default = routes;
