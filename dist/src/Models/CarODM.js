"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class CarODM {
    constructor() {
        this.schema = new mongoose_1.Schema({
            model: { type: String, required: true },
            year: { type: Number, required: true },
            color: { type: String, required: true },
            status: { type: Boolean, required: false, default: false },
            buyValue: { type: Number, required: true },
            doorsQty: { type: Number, required: true },
            seatsQty: { type: Number, required: true },
        });
        this.model = mongoose_1.models.Car || (0, mongoose_1.model)('Car', this.schema); // Antes de criar o Schema, verificar se o schema já existe. Caso não exista, o schema será criado. 
    }
    async create(car) {
        return this.model.create({ ...car });
    }
    async getAll() {
        return this.model.find({});
    }
    async getById(id) {
        return this.model.findById({ _id: id });
    }
}
exports.default = CarODM;
