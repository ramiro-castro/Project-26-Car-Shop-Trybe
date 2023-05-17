"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CadastrarService_1 = __importDefault(require("../Services/CadastrarService"));
class CadastrarController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.service = new CadastrarService_1.default();
    }
    async create() {
        const car = {
            model: this.req.body.model,
            year: this.req.body.year,
            color: this.req.body.color,
            status: this.req.body.status,
            buyValue: this.req.body.buyValue,
            doorsQty: this.req.body.doorsQty,
            seatsQty: this.req.body.seatsQty,
        };
        try {
            const newCar = await this.service.register(car);
            //   if (!newCar) throw new Error('Car not registered!');
            return this.res.status(201).json(newCar);
        }
        catch (error) {
            this.next(error);
        }
    }
    async getAll() {
        // const car: ICar = {
        //   model: this.req.body.model,
        //   year: this.req.body.year,
        //   color: this.req.body.color,
        //   status: this.req.body.status,
        //   buyValue: this.req.body.buyValue,
        //   doorsQty: this.req.body.doorsQty,
        //   seatsQty: this.req.body.seatsQty,
        // };
        try {
            const cars = await this.service.getAll();
            //   if (!cars) throw new Error('Car not registered!');
            return this.res.status(200).json(cars);
        }
        catch (error) {
            this.next(error);
        }
    }
    async getById() {
        const id = this.req.params;
        try {
            const cars = await this.service.getById(id);
            //   if (!cars) throw new Error('Car not registered!');
            return this.res.status(200).json(cars);
        }
        catch (error) {
            this.next(error);
        }
    }
}
exports.default = CadastrarController;
