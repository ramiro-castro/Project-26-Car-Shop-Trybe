"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ErrorHandler_1 = __importDefault(require("./Middlewares/ErrorHandler"));
const Routes_1 = __importDefault(require("./Routes/Routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(Routes_1.default);
app.use(ErrorHandler_1.default.handle);
exports.default = app;
