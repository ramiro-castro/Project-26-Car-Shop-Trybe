"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor({ id, model, year, color, status, buyValue, doorsQty, seatsQty }) {
        this.id = id;
        this.model = model;
        this.year = year;
        this.color = color;
        this.buyValue = buyValue;
        this.status = status;
        this.doorsQty = doorsQty;
        this.seatsQty = seatsQty;
        // this =;
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
    setModel(model) {
        this.model = model;
    }
    getModel() {
        return this.model;
    }
    setYear(Year) {
        this.year = Year;
    }
    getYear() {
        return this.year;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    setStatus(status) {
        this.status = status;
    }
    setBuyValue(buyValue) {
        this.buyValue = buyValue;
    }
    getBuyValue() {
        return this.buyValue;
    }
    getStatus() {
        return this.status;
    }
    setDoorsQty(doorsQty) {
        this.doorsQty = doorsQty;
    }
    getDoorsQty() {
        return this.doorsQty;
    }
    setSeatsQty(seatsQty) {
        this.seatsQty = seatsQty;
    }
    getSeatsQty() {
        return this.seatsQty;
    }
}
exports.default = Car;
