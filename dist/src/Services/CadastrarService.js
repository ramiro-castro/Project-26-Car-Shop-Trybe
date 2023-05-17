"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("../Domains/Car"));
const CarODM_1 = __importDefault(require("../Models/CarODM"));
class CadastrarService {
    //   private isValidKey(key: string): boolean {
    //     const cpfRegex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
    //     return cpfRegex.test(key);
    //   }
    createCarDomain(car) {
        if (car) {
            return new Car_1.default(car);
        }
        return null;
    }
    async register(car) {
        // if (!this.isValidKey(payment.key)) throw new Error('Invalid Key!');
        // Criar instância da Model de Payment usando Mongoose
        const carODM = new CarODM_1.default();
        // Inserir os dados no banco
        const newCar = await carODM.create(car);
        // Retornar os dados com o id
        const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = newCar;
        return this.createCarDomain({ id, model, year, color, status, buyValue, doorsQty, seatsQty });
    }
    async getAll() {
        // if (!this.isValidKey(payment.key)) throw new Error('Invalid Key!');
        // Criar instância da Model de Payment usando Mongoose
        const carODM = new CarODM_1.default();
        // Inserir os dados no banco
        const carsArray = await carODM.getAll();
        // Retornar os dados com o id
        return carsArray.map((car) => this.createCarDomain(car));
        // const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = newCar;
        // return result;
    }
    async getById(id) {
        // if (!this.isValidKey(payment.key)) throw new Error('Invalid Key!');
        // Criar instância da Model de Payment usando Mongoose
        const carODM = new CarODM_1.default();
        // Inserir os dados no banco
        const car = await carODM.getById(id);
        // Retornar os dados com o id
        return this.createCarDomain(car);
        // const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = newCar;
        // return result;
    }
}
exports.default = CadastrarService;
