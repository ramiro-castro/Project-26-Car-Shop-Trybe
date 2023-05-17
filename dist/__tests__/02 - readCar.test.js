"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const mongoose_1 = require("mongoose");
const app_1 = __importDefault(require("../src/app"));
const Connection_1 = __importDefault(require("../src/Models/Connection"));
const db_1 = require("./utils/db");
const CarsMock_1 = require("./utils/CarsMock");
describe('02 - Crie o endpoint para listar carros', () => {
    let VALID_ID;
    beforeAll(async () => {
        await (0, Connection_1.default)();
        await (0, db_1.clearDatabase)();
        const schema = new mongoose_1.Schema({}, { strict: false, collection: 'cars' });
        const Car = (0, mongoose_1.model)('CarTest', schema);
        let car = new Car(CarsMock_1.carsArray[0]);
        await car.save();
        car = new Car(CarsMock_1.carsArray[1]);
        const { _id } = await car.save();
        VALID_ID = _id;
    });
    afterAll(async () => await (0, db_1.closeDatabase)());
    it('Será validado que é possível listar todos os carros', async () => {
        const { body, statusCode } = await (0, supertest_1.default)(app_1.default).get('/cars');
        expect(statusCode).toEqual(200);
        expect(body[0]).toHaveProperty('id');
        expect(body[0]).toHaveProperty('model');
        expect(body[0].model).toEqual('Marea');
        expect(body[0]).toHaveProperty('year');
        expect(body[0].year).toEqual(2002);
        expect(body[0]).toHaveProperty('color');
        expect(body[0].color).toEqual('Black');
        expect(body[0]).toHaveProperty('status');
        expect(body[0].status).toEqual(true);
        expect(body[0]).toHaveProperty('buyValue');
        expect(body[0].buyValue).toEqual(15.990);
        expect(body[0]).toHaveProperty('doorsQty');
        expect(body[0].doorsQty).toEqual(4);
        expect(body[0]).toHaveProperty('seatsQty');
        expect(body[0].seatsQty).toEqual(5);
        expect(body[1]).toHaveProperty('id');
        expect(body[1]).toHaveProperty('model');
        expect(body[1].model).toEqual('Tempra');
        expect(body[1]).toHaveProperty('year');
        expect(body[1].year).toEqual(1995);
        expect(body[1]).toHaveProperty('color');
        expect(body[1].color).toEqual('Black');
        expect(body[1]).toHaveProperty('buyValue');
        expect(body[1].buyValue).toEqual(39.000);
        expect(body[1]).toHaveProperty('doorsQty');
        expect(body[1].doorsQty).toEqual(2);
        expect(body[1]).toHaveProperty('seatsQty');
        expect(body[1].seatsQty).toEqual(5);
    });
    it('Será validado que não é possível listar um carro que não existe', async () => {
        const { body, statusCode } = await (0, supertest_1.default)(app_1.default).get('/cars/1111222233330000ffffcccc');
        expect(statusCode).toEqual(404);
        expect(body.message).toEqual('Car not found');
    });
    it('Será validado que não é possível listar um carro quando o formato do id esta inválido', async () => {
        const { body, statusCode } = await (0, supertest_1.default)(app_1.default).get('/cars/INVALID_MONGO_ID');
        expect(statusCode).toEqual(422);
        expect(body.message).toEqual('Invalid mongo id');
    });
    it('Será validado que é possível listar um carro específico com sucesso', async () => {
        const { body, statusCode } = await (0, supertest_1.default)(app_1.default).get(`/cars/${VALID_ID}`);
        expect(statusCode).toEqual(200);
        expect(body).toHaveProperty('id');
        expect(body).toHaveProperty('model');
        expect(body.model).toEqual('Tempra');
        expect(body).toHaveProperty('year');
        expect(body.year).toEqual(1995);
        expect(body).toHaveProperty('color');
        expect(body.color).toEqual('Black');
        expect(body).toHaveProperty('buyValue');
        expect(body.buyValue).toEqual(39.000);
        expect(body).toHaveProperty('doorsQty');
        expect(body.doorsQty).toEqual(2);
        expect(body).toHaveProperty('seatsQty');
        expect(body.seatsQty).toEqual(5);
    });
});