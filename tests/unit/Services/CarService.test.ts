// tests/unit/services/transfer.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';
// import carsArray from '../../utils/CarsMock';

describe('Deveria criar uma transferência TRIX', function () {
  const carInput: ICar = {
    model: 'Marea',
    year: 1992,
    color: 'Red',
    status: true,
    buyValue: 12000,
    doorsQty: 2,
    seatsQty: 5,
  };
  const carOutput: Car = new Car({
    id: '6464587229cdd8077dc06b3e',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    buyValue: 12000,
    status: true,
    doorsQty: 4,
    seatsQty: 5,
  });

  //   const carOutputArray = [
  //     {
  //       id: '6464587229cdd8077dc06b3e',
  //       model: 'Marea',
  //       year: 2002,
  //       color: 'Black',
  //       buyValue: 12000,
  //       status: true,
  //       doorsQty: 4,
  //       seatsQty: 5,
  //     },
  //     {
  //       id: '646512f6ffc6a17b780adb85',
  //       model: 'Tempra',
  //       year: 1995,
  //       color: 'Black',
  //       buyValue: 39000,
  //       status: false,
  //       doorsQty: 2,
  //       seatsQty: 5,
  //     },
  //   ];

  it('Deveria cadastrar um carro com SUCESSO', async function () {
  // Arrange
    sinon.stub(Model, 'create').resolves(carOutput);

    // Act
    const service = new CarService();
    const result = await service.register(carInput);

    // Assert
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deveria listar todos os carros com SUCESSO', async function () {
    // Arrange

    sinon.stub(Model, 'find').resolves([carOutput]);

    // Act
    const service = new CarService();
    // await service.register(carInput);
    const result = await service.getAll();

    // Assert
    expect(result).to.be.deep.equal([carOutput]);
  });

  it('Deveria retornar null quando uma id nao existe no banco', async function () {
    sinon.stub(Model, 'find').resolves();

    const service = new CarService();
    const result = await service.getById('1111222233330000ffffcccc');
    // console.log(result);

    expect(result).equal(null);
  });
  
  afterEach(function () {
    sinon.restore();
  }); 
});